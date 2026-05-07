import PageHeader from "@/components/PageHeader";
import {
  Hospital,
  HeartPulse,
  Brain,
  Layers,
  Stethoscope,
  GraduationCap,
  Building2,
  Sparkles,
  Cpu,
  Lock,
  Zap,
  Eye,
  Award,
} from "lucide-react";

const offerings = [
  { icon: Hospital, label: "Hospital-at-Home telehealth platforms" },
  { icon: HeartPulse, label: "Predictive Remote Patient Monitoring (RPM)" },
  { icon: Brain, label: "Early-warning AI for ICU & NICU" },
  { icon: Layers, label: "Multimodal clinical data integration" },
  { icon: Stethoscope, label: "At-home diabetes wound monitoring" },
  { icon: GraduationCap, label: "AI training programs for students" },
  { icon: Building2, label: "AI workshops for schools & colleges" },
];

const techPillars = [
  {
    icon: Cpu,
    title: "Production-grade ML",
    description:
      "Large-scale machine learning and data engineering, the same stack used at leading global tech companies.",
  },
  {
    icon: Sparkles,
    title: "Clinical decision support",
    description:
      "Applied ML for predictive analytics that helps clinicians intervene earlier and more accurately.",
  },
  {
    icon: Lock,
    title: "Secure by design",
    description:
      "HIPAA-aligned data systems with auditable AI pipelines and consent-first design patterns.",
  },
  {
    icon: Layers,
    title: "Multimodal fusion",
    description:
      "Combining vital signs, imaging, and behavioural signals for a richer view of patient state.",
  },
  {
    icon: Eye,
    title: "Explainable AI",
    description:
      "Models that surface why, not just what — supporting clinical trust and adoption.",
  },
  {
    icon: Zap,
    title: "Low-latency inference",
    description:
      "Optimised pipelines that fit into real clinical workflows, from bedside to home.",
  },
];

const recognitions = [
  {
    name: "NVIDIA Inception Program",
    description: "Member — recognising Nasken's innovation in AI.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About Nasken"
        title={
          <>
            A healthcare-AI company built for{" "}
            <span className="italic text-teal-600">hospitals, clinics,</span>{" "}
            and the patients they serve.
          </>
        }
      />

      {/* Story */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <div className="sticky top-28">
                <p className="text-xs uppercase tracking-widest text-teal-600 font-semibold mb-4">
                  Our story
                </p>
                <h2 className="font-display text-3xl md:text-4xl font-medium tracking-tight text-ink leading-[1.1] text-balance">
                  Born from a simple idea — that good clinical care should
                  scale.
                </h2>
              </div>
            </div>
            <div className="lg:col-span-7 lg:col-start-6 space-y-5 text-lg text-ink-600 leading-relaxed">
              <p>
                <strong className="text-ink font-medium">Nasken AI</strong> is
                a healthcare-AI startup developing intelligent platforms for
                hospitals, clinics, and home-care environments. Our team is
                based in Karnataka, India, where we run engineering, research,
                and academic collaboration operations.
              </p>
              <p>
                We build software that combines machine learning, predictive
                analytics, and secure data systems to solve real-world clinical
                challenges — not theoretical ones. Every platform we ship is
                designed with privacy, consent, and auditability at its core,
                aligned with global healthcare compliance standards.
              </p>
              <p>
                We&apos;re an early-stage, pre-revenue startup backed by angel
                investment, currently focused on core platform development,
                pilot programs, and clinical partnerships. Alongside our
                product work, we run training programs and workshops to help
                build India&apos;s next generation of AI engineers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-6 lg:px-10">
          <div className="relative bg-gradient-to-br from-teal-50 via-white to-coral-50 rounded-3xl p-10 md:p-16 border border-teal-100/60 overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-teal-200/30 blur-3xl rounded-full" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-coral-200/20 blur-3xl rounded-full" />
            <div className="relative">
              <p className="text-xs uppercase tracking-widest text-teal-700 font-semibold mb-5">
                Our vision
              </p>
              <blockquote className="font-display text-3xl md:text-4xl lg:text-5xl font-medium text-ink leading-[1.15] tracking-tight text-balance">
                <span className="text-teal-600">&ldquo;</span>To modernise
                healthcare delivery by making intelligent, data-driven care
                accessible across both hospital and home settings — reducing
                preventable complications and improving patient recovery.
                <span className="text-teal-600">&rdquo;</span>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* What we offer */}
      <section className="py-16 md:py-20 bg-ink-50/40 border-y border-ink-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="max-w-2xl mb-12">
            <p className="text-xs uppercase tracking-widest text-teal-600 font-semibold mb-4">
              What we offer
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-medium tracking-tight text-ink leading-[1.1] text-balance">
              From bedside to{" "}
              <span className="italic text-teal-600">classroom.</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {offerings.map((o) => (
              <div
                key={o.label}
                className="flex items-center gap-4 bg-white rounded-2xl p-5 border border-ink-100 hover:border-teal-200 hover:shadow-sm transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-teal-50 border border-teal-100 flex items-center justify-center shrink-0">
                  <o.icon size={18} className="text-teal-600" strokeWidth={1.8} />
                </div>
                <p className="text-sm font-medium text-ink-700">{o.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology pillars */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-xs uppercase tracking-widest text-teal-600 font-semibold mb-4">
              Technology &amp; approach
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-medium tracking-tight text-ink leading-[1.1] text-balance">
              Engineering principles that make clinical AI{" "}
              <span className="italic text-teal-600">trustworthy.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {techPillars.map((p) => (
              <div
                key={p.title}
                className="group relative bg-white border border-ink-100 rounded-2xl p-7 hover:border-teal-200 transition-all"
              >
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-teal-50 to-teal-100/50 border border-teal-100 flex items-center justify-center mb-5">
                  <p.icon
                    size={20}
                    className="text-teal-600"
                    strokeWidth={1.8}
                  />
                </div>
                <h3 className="font-display text-xl font-medium text-ink mb-2 tracking-tight">
                  {p.title}
                </h3>
                <p className="text-sm text-ink-500 leading-relaxed">
                  {p.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-16 md:py-20 bg-ink-50/40 border-y border-ink-100">
        <div className="max-w-5xl mx-auto px-6 lg:px-10">
          <div className="mb-10">
            <p className="text-xs uppercase tracking-widest text-teal-600 font-semibold mb-4">
              Leadership
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-medium tracking-tight text-ink leading-[1.1] text-balance">
              Built by engineers who&apos;ve shipped at scale.
            </h2>
          </div>
        </div>
      </section>

      {/* Recognitions */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="max-w-2xl mb-12">
            <p className="text-xs uppercase tracking-widest text-teal-600 font-semibold mb-4">
              Recognitions &amp; affiliations
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-medium tracking-tight text-ink leading-[1.1] text-balance">
              Recognised by the people we want to be{" "}
              <span className="italic text-teal-600">recognised by.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {recognitions.map((r) => (
              <div
                key={r.name}
                className="bg-white border border-ink-100 rounded-2xl p-6 hover:border-teal-200 transition-all"
              >
                <h3 className="font-display text-lg font-medium text-ink tracking-tight mb-2">
                  {r.name}
                </h3>
                <p className="text-sm text-ink-500 leading-relaxed">
                  {r.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
