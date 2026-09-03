"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import {
  Mail,
  Phone,
  Send,
  Check,
  AlertCircle,
  Loader2,
  Hospital,
  Briefcase,
  HelpCircle,
  Handshake,
} from "lucide-react";

const subjectOptions = [
  {
    value: "healthcare",
    label: "Healthcare AI / Pilot Partnership",
    icon: Hospital,
    description:
      "I'm from a hospital or clinic interested in your products or pilots.",
  },
  {
    value: "careers",
    label: "Careers / Internship",
    icon: Briefcase,
    description: "I'd like to apply for a role or internship at Nasken AI.",
  },
  {
    value: "partnership",
    label: "Partnership / Collaboration",
    icon: Handshake,
    description: "I'd like to explore a partnership or collaboration.",
  },
  {
    value: "general",
    label: "General Inquiry",
    icon: HelpCircle,
    description: "I have a general question or feedback.",
  },
];

const GENERAL_SUBJECT = "general";

function resolveSubject(param: string | null): string {
  // No ?subject= at all: nothing preselected, submit stays disabled.
  if (param === null) return "";
  if (subjectOptions.some((s) => s.value === param)) return param;
  // A value we no longer offer (old ?subject=training links from search
  // caches and forwarded messages): fall back to the general enquiry so the
  // form is usable immediately rather than landing in a dead state.
  return GENERAL_SUBJECT;
}

function ContactForm() {
  const searchParams = useSearchParams();
  const initialSubject = resolveSubject(searchParams.get("subject"));

  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");
  const [subject, setSubject] = useState(initialSubject);
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    organization: "",
    message: "",
    website: "", // honeypot
  });

  useEffect(() => {
    if (initialSubject) {
      setSubject(initialSubject);
    }
  }, [initialSubject]);

  // Scrub a now-invalid ?subject= and any legacy ?program= out of the address
  // bar. history.replaceState is used rather than router.replace because in
  // the App Router router.replace re-runs the server render; this only edits
  // the URL, with no navigation and no re-fetch.
  useEffect(() => {
    const params = new URLSearchParams(searchParams.toString());
    let changed = false;

    const raw = params.get("subject");
    if (raw !== null && !subjectOptions.some((s) => s.value === raw)) {
      params.delete("subject");
      changed = true;
    }
    if (params.has("program")) {
      params.delete("program");
      changed = true;
    }
    if (!changed) return;

    const query = params.toString();
    window.history.replaceState(
      null,
      "",
      query
        ? `${window.location.pathname}?${query}`
        : window.location.pathname
    );
  }, [searchParams]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (sending) return;

    setSending(true);
    setError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ subject, ...form }),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        setError(
          data?.error ||
            "Something went wrong sending your message."
        );
        return;
      }

      setSubmitted(true);
    } catch {
      setError("Something went wrong sending your message.");
    } finally {
      setSending(false);
    }
  };

  const selectedOption = subjectOptions.find((s) => s.value === subject);

  if (submitted) {
    return (
      <div className="max-w-2xl mx-auto bg-white border border-teal-200 rounded-3xl p-10 md:p-14 text-center">
        <div className="w-16 h-16 rounded-full bg-teal-50 border border-teal-100 flex items-center justify-center mx-auto mb-6">
          <Check size={28} className="text-teal-600" strokeWidth={2.5} />
        </div>
        <h3 className="font-display text-2xl md:text-3xl font-medium text-ink tracking-tight mb-3">
          Thanks — we&apos;ve got your message.
        </h3>
        <p className="text-base text-ink-500 leading-relaxed max-w-md mx-auto">
          We&apos;ll get back to you within 1–2 business days. For anything
          urgent, email us directly at{" "}
          <a
            href="mailto:info@nasken.ai"
            className="text-teal-600 hover:text-teal-700 underline underline-offset-2"
          >
            info@nasken.ai
          </a>
          .
        </p>
        <button
          onClick={() => {
            setSubmitted(false);
            setForm({
              fullName: "",
              email: "",
              phone: "",
              organization: "",
              message: "",
              website: "",
            });
            setSubject("");
            setError("");
          }}
          className="mt-8 text-sm text-ink-500 hover:text-ink-700 underline underline-offset-2"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="relative max-w-2xl mx-auto bg-white border border-ink-100 rounded-3xl p-8 md:p-10 shadow-sm"
    >
      {/* Subject pills */}
      <div className="mb-8">
        <label className="block text-xs uppercase tracking-widest text-ink-500 font-semibold mb-4">
          What are you contacting us about? <span className="text-coral-500">*</span>
        </label>
        <div className="grid sm:grid-cols-2 gap-2">
          {subjectOptions.map((option) => {
            const Icon = option.icon;
            const active = subject === option.value;
            return (
              <button
                key={option.value}
                type="button"
                onClick={() => setSubject(option.value)}
                className={`flex items-start gap-3 p-3.5 rounded-xl border text-left transition-all ${
                  active
                    ? "border-teal-500 bg-teal-50/60 ring-2 ring-teal-500/15"
                    : "border-ink-100 bg-white hover:border-ink-300 hover:bg-ink-50/50"
                }`}
              >
                <div
                  className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                    active
                      ? "bg-teal-500 text-white"
                      : "bg-ink-50 text-ink-500"
                  }`}
                >
                  <Icon size={16} strokeWidth={2} />
                </div>
                <div className="flex-1 min-w-0">
                  <p
                    className={`text-sm font-medium ${
                      active ? "text-teal-800" : "text-ink-800"
                    }`}
                  >
                    {option.label}
                  </p>
                </div>
              </button>
            );
          })}
        </div>
        {selectedOption && (
          <p className="mt-3 text-xs text-ink-500 italic">
            {selectedOption.description}
          </p>
        )}
      </div>

      {/* Form fields */}
      <div className="space-y-5">
        <div className="grid md:grid-cols-2 gap-4">
          <Field
            label="Full name"
            required
            value={form.fullName}
            onChange={(v) => setForm({ ...form, fullName: v })}
            placeholder="Your name"
            type="text"
          />
          <Field
            label="Email"
            required
            value={form.email}
            onChange={(v) => setForm({ ...form, email: v })}
            placeholder="you@example.com"
            type="email"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <Field
            label="Phone Number"
            value={form.phone}
            onChange={(v) => setForm({ ...form, phone: v })}
            placeholder="+91 XXXXX XXXXX"
            type="tel"
          />
          <Field
            label={
              subject === "healthcare"
                ? "Hospital / Clinic"
                : "Organisation (optional)"
            }
            value={form.organization}
            onChange={(v) => setForm({ ...form, organization: v })}
            placeholder={
              subject === "healthcare"
                ? "Your hospital or clinic"
                : "Where you work or study"
            }
            type="text"
          />
        </div>

        <div>
          <label className="block text-xs uppercase tracking-widest text-ink-500 font-semibold mb-2">
            Message <span className="text-coral-500">*</span>
          </label>
          <textarea
            required
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            placeholder={
              subject === "healthcare"
                ? "Tell us about your organisation and how you'd like to collaborate."
                : "Tell us how we can help."
            }
            rows={6}
            className="w-full px-4 py-3 rounded-xl border border-ink-200 bg-white text-ink placeholder:text-ink-300 focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500/15 transition-all resize-none"
          />
        </div>
      </div>

      {/* Honeypot — hidden from people, tempting to bots. */}
      <div className="absolute left-[-9999px] top-0 h-0 w-0 overflow-hidden" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input
          id="website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={form.website}
          onChange={(e) => setForm({ ...form, website: e.target.value })}
        />
      </div>

      {error && (
        <div
          role="alert"
          className="mt-7 flex items-start gap-3 p-4 rounded-xl border border-coral-200 bg-coral-50"
        >
          <AlertCircle
            size={16}
            className="text-coral-500 mt-0.5 shrink-0"
            strokeWidth={2}
          />
          <p className="text-sm text-ink-700 leading-relaxed">
            {error} Please email us directly at{" "}
            <a
              href="mailto:info@nasken.ai"
              className="text-teal-600 hover:text-teal-700 underline underline-offset-2"
            >
              info@nasken.ai
            </a>
            .
          </p>
        </div>
      )}

      <div className="mt-7 flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-ink-100">
        <p className="text-xs text-ink-500 leading-relaxed max-w-xs">
          By submitting, you agree to our{" "}
          <a href="#" className="text-teal-600 hover:underline">
            Privacy Policy
          </a>
          .
        </p>
        <button
          type="submit"
          disabled={
            sending ||
            !subject ||
            !form.fullName ||
            !form.email ||
            !form.message
          }
          className="group inline-flex items-center justify-center gap-2 bg-ink text-white px-7 py-3.5 rounded-full text-sm font-medium hover:bg-ink-800 transition-all disabled:opacity-40 disabled:cursor-not-allowed"
        >
          {sending ? "Sending…" : "Send message"}
          {sending ? (
            <Loader2 size={14} className="animate-spin" />
          ) : (
            <Send
              size={14}
              className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
            />
          )}
        </button>
      </div>
    </form>
  );
}

function Field({
  label,
  required,
  value,
  onChange,
  placeholder,
  type,
}: {
  label: string;
  required?: boolean;
  value: string;
  onChange: (v: string) => void;
  placeholder: string;
  type: string;
}) {
  return (
    <div>
      <label className="block text-xs uppercase tracking-widest text-ink-500 font-semibold mb-2">
        {label}{" "}
        {required && <span className="text-coral-500">*</span>}
      </label>
      <input
        required={required}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full px-4 py-3 rounded-xl border border-ink-200 bg-white text-ink placeholder:text-ink-300 focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500/15 transition-all"
      />
    </div>
  );
}

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-20 pb-12 md:pt-28 md:pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-radial-fade pointer-events-none" />
        <div className="absolute inset-0 bg-grid-pattern bg-[size:48px_48px] opacity-40 pointer-events-none [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,black,transparent)]" />

        <div className="relative max-w-4xl mx-auto px-6 lg:px-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-teal-200 bg-teal-50 text-teal-700 text-xs font-medium tracking-wide uppercase mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-teal-500 animate-pulse-soft" />
            Contact
          </div>
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight text-ink leading-[1.05] text-balance">
            Let&apos;s start a{" "}
            <span className="italic text-teal-600">conversation.</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-ink-500 max-w-2xl mx-auto leading-relaxed text-balance">
            Pick what brings you here below — we&apos;ll route your message to
            the right person and get back to you within 1–2 business days.
          </p>
        </div>
      </section>

      {/* Form */}
      <section className="pb-16 md:pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <Suspense
            fallback={
              <div className="max-w-2xl mx-auto h-96 bg-ink-50/40 rounded-3xl animate-pulse" />
            }
          >
            <ContactForm />
          </Suspense>

          <p className="mt-6 text-center text-sm text-ink-500">
            Prefer email? Reach us at{" "}
            <a
              href="mailto:info@nasken.ai"
              className="text-teal-600 hover:text-teal-700 font-medium"
            >
              info@nasken.ai
            </a>
          </p>
        </div>
      </section>

      {/* Office info */}
      <section className="py-16 md:py-24 bg-ink-50/40 border-t border-ink-100">
        <div className="max-w-5xl mx-auto px-6 lg:px-10">
          <div className="bg-white border border-ink-100 rounded-3xl p-8 md:p-10">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <div className="w-10 h-10 rounded-xl bg-teal-50 border border-teal-100 flex items-center justify-center mb-4">
                  <Phone size={18} className="text-teal-600" strokeWidth={1.8} />
                </div>
                <p className="text-xs uppercase tracking-widest text-ink-500 font-semibold mb-2">
                  Phone
                </p>
                <a
                  href="tel:+919449335634"
                  className="text-sm text-ink-700 hover:text-teal-600 transition-colors"
                >
                  +91 94493 35634
                </a>
              </div>
              <div>
                <div className="w-10 h-10 rounded-xl bg-teal-50 border border-teal-100 flex items-center justify-center mb-4">
                  <Mail size={18} className="text-teal-600" strokeWidth={1.8} />
                </div>
                <p className="text-xs uppercase tracking-widest text-ink-500 font-semibold mb-2">
                  Email
                </p>
                <a
                  href="mailto:info@nasken.ai"
                  className="text-sm text-ink-700 hover:text-teal-600 transition-colors block"
                >
                  info@nasken.ai
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
