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
  GraduationCap,
  Building2,
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
  "MLSC Participant",
  "HIMSS Committee",
  "AMIA Member",
  "IEEE Senior Member",
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

      {/* Two-track section */}
      <section className="py-24 md:py-32 bg-gradient-to-b from-white to-ink-50/40">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-xs uppercase tracking-widest text-teal-600 font-semibold mb-4">
              Two missions, one company
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-medium tracking-tight text-ink leading-[1.1] text-balance">
              Building products. Building people.
            </h2>
            <p className="mt-5 text-lg text-ink-500 leading-relaxed">
              Alongside our healthcare-AI products, we run training programs
              and workshops — bringing industry-grade AI education to college
              and PUC students across India.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            <TrackCard
              icon={GraduationCap}
              eyebrow="For students"
              title="3-Month AI Training Programs"
              description="Industry-grade AI training in Prompt Engineering, Applied ML, and Generative AI — taught by engineers from Meta, Oracle, and global tech companies."
              href="/training"
              cta="Explore programs"
              variant="teal"
            />
            <TrackCard
              icon={Building2}
              eyebrow="For institutions"
              title="AI Workshops for Schools & Colleges"
              description="Hands-on, instructor-led AI workshops for schools, PUCs, and engineering colleges — customised to your audience and goals."
              href="/workshops"
              cta="See workshops"
              variant="coral"
            />
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

function TrackCard({
  icon: Icon,
  eyebrow,
  title,
  description,
  href,
  cta,
  variant,
}: {
  icon: any;
  eyebrow: string;
  title: string;
  description: string;
  href: string;
  cta: string;
  variant: "teal" | "coral";
}) {
  const styles =
    variant === "teal"
      ? {
          gradient: "from-teal-500 to-teal-700",
          glow: "bg-teal-500/20",
          accent: "text-teal-200",
          hover: "hover:bg-teal-50",
        }
      : {
          gradient: "from-ink-900 to-ink-950",
          glow: "bg-coral-400/20",
          accent: "text-coral-300",
          hover: "hover:bg-coral-50",
        };

  return (
    <Link
      href={href}
      className={`group relative overflow-hidden rounded-3xl p-10 bg-gradient-to-br ${styles.gradient} text-white transition-transform hover:-translate-y-1 noise-overlay`}
    >
      <div
        className={`absolute -top-20 -right-20 w-72 h-72 ${styles.glow} blur-3xl rounded-full`}
      />
      <div className="relative">
        <div className="flex items-center gap-2 mb-8">
          <Icon size={18} className={styles.accent} strokeWidth={1.8} />
          <span
            className={`text-xs uppercase tracking-widest font-semibold ${styles.accent}`}
          >
            {eyebrow}
          </span>
        </div>
        <h3 className="font-display text-3xl md:text-4xl font-medium tracking-tight leading-[1.1] mb-4 text-balance">
          {title}
        </h3>
        <p className="text-base text-white/70 leading-relaxed mb-8 max-w-md">
          {description}
        </p>
        <div className="inline-flex items-center gap-2 text-sm font-medium border-b border-white/30 pb-1 group-hover:border-white transition-colors">
          {cta}
          <ArrowRight
            size={14}
            className="group-hover:translate-x-1 transition-transform"
          />
        </div>
      </div>
    </Link>
  );
}
