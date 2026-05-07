"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import {
  Mail,
  MapPin,
  Phone,
  Send,
  Check,
  GraduationCap,
  Building2,
  Hospital,
  Briefcase,
  HelpCircle,
  Handshake,
} from "lucide-react";

const subjectOptions = [
  {
    value: "training",
    label: "AI Training Programs (3-month)",
    icon: GraduationCap,
    description: "I want to enrol or learn more about your training programs.",
  },
  {
    value: "workshops",
    label: "AI Workshops for our Institution",
    icon: Building2,
    description:
      "We're a school, PUC, or college interested in conducting a workshop.",
  },
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

function ContactForm() {
  const searchParams = useSearchParams();
  const initialSubject = searchParams.get("subject") || "";
  const initialProgram = searchParams.get("program") || "";

  const [submitted, setSubmitted] = useState(false);
  const [subject, setSubject] = useState(initialSubject);
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    organization: "",
    message: initialProgram ? `Interested in: ${initialProgram}\n\n` : "",
  });

  useEffect(() => {
    if (initialSubject && subjectOptions.find((s) => s.value === initialSubject)) {
      setSubject(initialSubject);
    }
  }, [initialSubject]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Frontend-only success state (wire to your backend / email service later)
    setSubmitted(true);
    setTimeout(() => {
      // Optional: reset after a few seconds
    }, 100);
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
            });
            setSubject("");
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
      className="max-w-2xl mx-auto bg-white border border-ink-100 rounded-3xl p-8 md:p-10 shadow-sm"
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
              subject === "workshops"
                ? "Institution / Organisation"
                : subject === "healthcare"
                ? "Hospital / Clinic"
                : subject === "training"
                ? "College / School (optional)"
                : "Organisation (optional)"
            }
            value={form.organization}
            onChange={(v) => setForm({ ...form, organization: v })}
            placeholder={
              subject === "workshops"
                ? "Your school or college"
                : subject === "healthcare"
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
              subject === "training"
                ? "Tell us which program you're interested in, your background, and any questions you have."
                : subject === "workshops"
                ? "Tell us about your institution, audience size, preferred dates, and topics of interest."
                : subject === "healthcare"
                ? "Tell us about your organisation and how you'd like to collaborate."
                : "Tell us how we can help."
            }
            rows={6}
            className="w-full px-4 py-3 rounded-xl border border-ink-200 bg-white text-ink placeholder:text-ink-300 focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500/15 transition-all resize-none"
          />
        </div>
      </div>

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
          disabled={!subject || !form.fullName || !form.email || !form.message}
          className="group inline-flex items-center justify-center gap-2 bg-ink text-white px-7 py-3.5 rounded-full text-sm font-medium hover:bg-ink-800 transition-all disabled:opacity-40 disabled:cursor-not-allowed"
        >
          Send message
          <Send
            size={14}
            className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
          />
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
          <div className="text-center mb-10">
            <p className="text-xs uppercase tracking-widest text-teal-600 font-semibold mb-3">
              Visit us
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-medium tracking-tight text-ink leading-[1.15] text-balance">
              Our office
            </h2>
          </div>

          <div className="bg-white border border-ink-100 rounded-3xl p-8 md:p-10">
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="w-10 h-10 rounded-xl bg-teal-50 border border-teal-100 flex items-center justify-center mb-4">
                  <MapPin size={18} className="text-teal-600" strokeWidth={1.8} />
                </div>
                <p className="text-xs uppercase tracking-widest text-ink-500 font-semibold mb-2">
                  Address
                </p>
                <address className="not-italic text-sm text-ink-700 leading-relaxed">
                  #2880, Someshwara Nilaya,
                  <br />
                  Behind Saptagiri PU College,
                  <br />
                  Saptagiri Extension, Tumkur,
                  <br />
                  Karnataka, India — 572102
                </address>
              </div>
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
                  +91 9449335634
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
