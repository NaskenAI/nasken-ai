import Link from "next/link";
import Hero from "@/components/Hero";
import {
  Hospital,
  HeartPulse,
  Brain,
  Layers,
  Stethoscope,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";

const focusAreas = [
  {
    icon: Hospital,
    title: "Telehealth Infrastructure",
    description:
      "Hospital-at-Home (HaH) platforms enabling clinical-grade remote care delivery.",
  },
  {
    icon: HeartPulse,
    title: "Predictive RPM",
    description:
      "Remote Patient Monitoring systems using ML to detect deterioration before it becomes critical.",
  },
  {
    icon: Brain,
    title: "ICU & NICU Models",
    description:
      "Early-warning AI models for neonatal and intensive care units to improve patient outcomes.",
  },
  {
    icon: Layers,
    title: "Multimodal Data Fusion",
    description:
      "Fusing vital signs, imaging, and behavioral data for richer, more accurate clinical insights.",
  },
  {
    icon: Stethoscope,
    title: "Diabetes Wound Monitoring",
    description:
      "At-home AI-enabled wound assessment to reduce amputations and avoidable hospital visits.",
  },
  {
    icon: ShieldCheck,
    title: "Responsible AI by Design",
    description:
      "Consent, auditability, and HIPAA-aligned compliance built into every model and pipeline.",
  },
];

const recognitions = [
  "NVIDIA Inception Member",
];

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* Recognitions strip */}
      <section className="relative border-y border-ink-100 bg-ink-50/40 py-8">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <p className="text-xs uppercase tracking-widest text-ink-500 text-center mb-5">
            Recognised &amp; Affiliated With
          </p>
          <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-4">
            {recognitions.map((r) => (
              <span
                key={r}
                className="text-sm font-medium text-ink-600 tracking-tight"
              >
                {r}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* What we do */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-10 mb-16">
            <div className="lg:col-span-5">
              <p className="text-xs uppercase tracking-widest text-teal-600 font-semibold mb-4">
                What we build
              </p>
              <h2 className="font-display text-4xl md:text-5xl font-medium tracking-tight text-ink leading-[1.1] text-balance">
                The future of clinical AI, built for{" "}
                <span className="italic text-teal-600">real care.</span>
              </h2>
            </div>
            <div className="lg:col-span-6 lg:col-start-7">
              <p className="text-lg text-ink-500 leading-relaxed">
                We develop AI-powered software for hospitals and clinics — from
                predictive monitoring in ICUs to intelligent remote patient
                care at home. Our platforms help clinicians intervene earlier,
                reduce preventable complications, and deliver more personalised
                care.
              </p>
            </div>
          </div>

          {/* Focus area grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {focusAreas.map((area, i) => (
              <FocusCard key={area.title} {...area} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="py-24 md:py-32">
        <div className="max-w-5xl mx-auto px-6 lg:px-10">
          <div className="relative overflow-hidden bg-ink-950 rounded-3xl p-10 md:p-16 noise-overlay">
            <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 via-transparent to-coral-400/5" />
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-teal-500/15 blur-3xl rounded-full" />
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-coral-400/10 blur-3xl rounded-full" />

            {/* TODO: This heading still offers to solve "a training need", and the
                paragraph still addresses "a college". Needs replacement copy from marketing. */}
            <div className="relative max-w-2xl">
              <p className="text-xs uppercase tracking-widest text-teal-400 font-semibold mb-5">
                Partner with us
              </p>
              <h2 className="font-display text-4xl md:text-5xl font-medium tracking-tight text-white leading-[1.1] text-balance">
                Got a clinical-AI problem,{" "}
                <span className="italic text-teal-300">a pilot,</span> or a
                training need?
              </h2>
              <p className="mt-5 text-lg text-ink-300 leading-relaxed">
                We&apos;d love to hear from you. Whether you&apos;re a
                hospital, a college, or a curious engineer — start a
                conversation.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 bg-white text-ink px-6 py-3.5 rounded-full text-sm font-medium hover:bg-teal-50 transition-all"
                >
                  Get in touch
                  <ArrowRight
                    size={16}
                    className="group-hover:translate-x-0.5 transition-transform"
                  />
                </Link>
                <a
                  href="mailto:info@nasken.ai"
                  className="inline-flex items-center gap-2 text-white px-6 py-3.5 rounded-full text-sm font-medium border border-ink-700 hover:border-teal-400 hover:bg-white/5 transition-all"
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

function FocusCard({
  icon: Icon,
  title,
  description,
  index,
}: {
  icon: any;
  title: string;
  description: string;
  index: number;
}) {
  return (
    <div
      className="group relative bg-white border border-ink-100 rounded-2xl p-7 hover:border-teal-200 hover:shadow-lg hover:shadow-teal-500/5 transition-all"
      style={{ animationDelay: `${index * 60}ms` }}
    >
      <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-teal-50 to-transparent rounded-bl-3xl rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="relative">
        <div className="w-11 h-11 rounded-xl bg-teal-50 border border-teal-100 flex items-center justify-center mb-5 group-hover:bg-teal-100 transition-colors">
          <Icon size={20} className="text-teal-600" strokeWidth={1.8} />
        </div>
        <h3 className="font-display text-xl font-medium text-ink mb-2 tracking-tight">
          {title}
        </h3>
        <p className="text-sm text-ink-500 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
