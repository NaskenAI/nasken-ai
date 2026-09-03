import { NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// Kept in sync with the pills in app/contact/page.tsx.
const SUBJECTS: Record<string, string> = {
  healthcare: "Healthcare AI / Pilot Partnership",
  careers: "Careers / Internship",
  partnership: "Partnership / Collaboration",
  general: "General Inquiry",
};

const LIMITS = {
  fullName: 100,
  email: 200,
  phone: 40,
  organization: 200,
  message: 5000,
};

// Deliberately simple: one shape check, not a full RFC 5322 parser.
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

const FROM_ADDRESS = "Nasken AI Website <noreply@nasken.ai>";

/**
 * Per-IP rate limiting, held in module memory.
 *
 * This is best-effort by design: serverless instances are per-region and
 * recycled, so a determined attacker can get more than RATE_MAX through by
 * hitting cold instances. It exists to stop casual form spam without a
 * captcha, not to be a security boundary.
 */
const RATE_WINDOW_MS = 60 * 60 * 1000;
const RATE_MAX = 5;
const hits = new Map<string, { count: number; resetAt: number }>();

function rateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = hits.get(ip);

  if (!entry || now > entry.resetAt) {
    hits.set(ip, { count: 1, resetAt: now + RATE_WINDOW_MS });
    // Opportunistic sweep so the map cannot grow without bound.
    if (hits.size > 5000) {
      for (const [key, value] of hits) {
        if (now > value.resetAt) hits.delete(key);
      }
    }
    return false;
  }

  entry.count += 1;
  return entry.count > RATE_MAX;
}

function clientIp(req: Request): string {
  const forwarded = req.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0].trim();
  return req.headers.get("x-real-ip") ?? "unknown";
}

function str(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function POST(req: Request) {
  let payload: unknown;
  try {
    payload = await req.json();
  } catch {
    return NextResponse.json({ error: "Malformed request body." }, { status: 400 });
  }

  if (typeof payload !== "object" || payload === null) {
    return NextResponse.json({ error: "Malformed request body." }, { status: 400 });
  }

  const body = payload as Record<string, unknown>;

  // Honeypot: a real browser never fills this, it is visually hidden and
  // aria-hidden. Report success so a bot has no signal to tune against.
  if (str(body.website) !== "") {
    return NextResponse.json({ ok: true });
  }

  const subject = str(body.subject);
  const fullName = str(body.fullName);
  const email = str(body.email);
  const phone = str(body.phone);
  const organization = str(body.organization);
  const message = str(body.message);

  const errors: string[] = [];
  if (!SUBJECTS[subject]) errors.push("A valid subject is required.");
  if (!fullName) errors.push("Full name is required.");
  if (!email) errors.push("Email is required.");
  else if (!EMAIL_RE.test(email)) errors.push("Email format is invalid.");
  if (!message) errors.push("Message is required.");

  if (fullName.length > LIMITS.fullName) errors.push("Full name is too long.");
  if (email.length > LIMITS.email) errors.push("Email is too long.");
  if (phone.length > LIMITS.phone) errors.push("Phone number is too long.");
  if (organization.length > LIMITS.organization)
    errors.push("Organisation is too long.");
  if (message.length > LIMITS.message) errors.push("Message is too long.");

  if (errors.length > 0) {
    return NextResponse.json({ error: errors.join(" ") }, { status: 400 });
  }

  if (rateLimited(clientIp(req))) {
    return NextResponse.json(
      { error: "Too many messages from this address. Please try again later." },
      { status: 429 }
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;

  if (!apiKey || !to) {
    console.error(
      "Contact form is not configured: RESEND_API_KEY and CONTACT_TO_EMAIL must both be set."
    );
    return NextResponse.json(
      { error: "The contact form is not configured right now." },
      { status: 500 }
    );
  }

  const subjectLabel = SUBJECTS[subject];
  const rows: [string, string][] = [
    ["Subject", subjectLabel],
    ["Name", fullName],
    ["Email", email],
    ["Phone", phone || "—"],
    ["Organisation", organization || "—"],
  ];

  const text = [
    ...rows.map(([k, v]) => `${k}: ${v}`),
    "",
    "Message:",
    message,
  ].join("\n");

  const html = [
    ...rows.map(
      ([k, v]) =>
        `<p style="margin:0 0 4px"><strong>${k}:</strong> ${escapeHtml(v)}</p>`
    ),
    `<p style="margin:16px 0 4px"><strong>Message:</strong></p>`,
    `<p style="margin:0;white-space:pre-wrap">${escapeHtml(message)}</p>`,
  ].join("");

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: FROM_ADDRESS,
        to: [to],
        reply_to: email,
        subject: `[${subjectLabel}] ${fullName}`,
        text,
        html,
      }),
    });

    if (!res.ok) {
      const detail = await res.text();
      console.error(`Resend rejected the send (${res.status}): ${detail}`);
      return NextResponse.json(
        { error: "We could not send your message." },
        { status: 502 }
      );
    }
  } catch (err) {
    console.error("Resend request failed:", err);
    return NextResponse.json(
      { error: "We could not send your message." },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
