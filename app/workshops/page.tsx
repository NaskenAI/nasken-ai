import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import {
  School,
  BookOpen,
  Building,
  Check,
  ArrowRight,
  Users,
  PencilRuler,
  Laptop,
  ClipboardCheck,
  Lightbulb,
  Wifi,
} from "lucide-react";

const workshopTypes = [
  {
    icon: School,
    audience: "For Schools",
    grades: "Grades 8–10",
    duration: "Half-day to 2-day",
    color: "from-coral-400 to-coral-600",
    glow: "bg-coral-300/20",
    accent: "text-coral-100",
    points: [
      "Fun, interactive intro to Artificial Intelligence",
      "“What is AI?” — concepts explained through games and activities",
      "Hands-on with AI tools (chatbots, image generators) in a safe, guided environment",
      "Career awareness: future of AI and tech",
    ],
  },
  {
    icon: BookOpen,
    audience: "For PUC / Pre-University",
    grades: "Grades 11–12",
    duration: "1-day to 1-week",
    color: "from-teal-500 to-teal-700",
    glow: "bg-teal-300/20",
    accent: "text-teal-100",
    points: [
      "Foundations of AI and how it works",
      "Introduction to prompt engineering and Generative AI",
      "Building simple AI projects with no-code tools",
      "Career guidance: AI / Computer Science streams in college",
    ],
  },
  {
    icon: Building,
    audience: "For Engineering & Degree Colleges",
    grades: "Bachelor's & Master's",
    duration: "2 days to 2 weeks (custom)",
    color: "from-ink-800 to-ink-950",
    glow: "bg-teal-400/20",
    accent: "text-teal-200",
    points: [
      "Industry-focused AI bootcamps",
      "Machine Learning, Deep Learning, and Generative AI deep-dives",
      "Hands-on coding sessions with Python and real datasets",
      "LLM application development workshops",
      "Healthcare AI / domain-specific AI sessions",
      "Faculty Development Programs (FDPs)",
    ],
  },
];

const includedFeatures = [
  {
    icon: Users,
    title: "Expert instructors",
    description: "Industry engineers and our CEO lead every workshop.",
  },
  {
    icon: PencilRuler,
    title: "Customised curriculum",
    description: "Tailored to your institution's audience and goals.",
  },
  {
    icon: Laptop,
    title: "Hands-on labs",
    description: "Live coding, real tools, and student-led exercises.",
  },
  {
    icon: ClipboardCheck,
    title: "Workshop kit",
    description: "Slides, handouts, and learning materials included.",
  },
  {
    icon: Lightbulb,
    title: "Certificates",
    description: "Certificate of Participation for every student.",
  },
  {
    icon: Wifi,
    title: "On-campus or online",
    description: "Flexible delivery to fit your schedule.",
  },
];

export default function WorkshopsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Workshops"
        title={
          <>
            AI Workshops for Schools, PUC{" "}
            <span className="italic text-teal-600">&amp; Colleges.</span>
          </>
        }
        description="Hands-on, instructor-led AI workshops conducted on-campus or online — designed to spark curiosity and build real AI skills in students."
      />

      {/* Intro */}
      <section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-6 lg:px-10 text-center">
          <p className="text-lg md:text-xl text-ink-600 leading-relaxed">
            Nasken AI conducts customised AI workshops for educational
            institutions across India. Whether you&apos;re a school looking to
            introduce students to AI for the first time, a Pre-University
            college wanting to give your students an industry edge, or an
            engineering college aiming to upskill final-year students for
            placements — we design and deliver workshops tailored to{" "}
            <span className="text-ink font-medium">
              your audience and goals.
            </span>
          </p>
        </div>
      </section>

      {/* Workshop types */}
      <section className="py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="mb-12">
            <p className="text-xs uppercase tracking-widest text-teal-600 font-semibold mb-4">
              Who we conduct workshops for
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-medium tracking-tight text-ink leading-[1.1] text-balance">
              Three audiences,{" "}
              <span className="italic text-teal-600">
                three tailored experiences.
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {workshopTypes.map((w) => (
              <WorkshopCard key={w.audience} workshop={w} />
            ))}
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="py-16 md:py-24 bg-ink-50/40 border-y border-ink-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-xs uppercase tracking-widest text-teal-600 font-semibold mb-4">
              What&apos;s included
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-medium tracking-tight text-ink leading-[1.1] text-balance">
              Everything you need to run a{" "}
              <span className="italic text-teal-600">great workshop.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {includedFeatures.map((f) => (
              <div
                key={f.title}
                className="bg-white border border-ink-100 rounded-2xl p-7 hover:border-teal-200 transition-all"
              >
                <div className="w-11 h-11 rounded-xl bg-teal-50 border border-teal-100 flex items-center justify-center mb-5">
                  <f.icon
                    size={20}
                    className="text-teal-600"
                    strokeWidth={1.8}
                  />
                </div>
                <h3 className="font-display text-lg font-medium text-ink mb-2 tracking-tight">
                  {f.title}
                </h3>
                <p className="text-sm text-ink-500 leading-relaxed">
                  {f.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fees CTA */}
      <section className="py-24 md:py-32">
        <div className="max-w-5xl mx-auto px-6 lg:px-10">
          <div className="relative overflow-hidden bg-gradient-to-br from-ink-900 to-ink-950 rounded-3xl p-10 md:p-14 text-white noise-overlay">
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-teal-500/15 blur-3xl rounded-full" />
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-coral-400/10 blur-3xl rounded-full" />

            <div className="relative grid md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-7">
                <p className="text-xs uppercase tracking-widest text-teal-300 font-semibold mb-4">
                  Workshop fees
                </p>
                <h2 className="font-display text-3xl md:text-4xl font-medium tracking-tight leading-[1.15] text-balance">
                  Every workshop is{" "}
                  <span className="italic text-teal-300">
                    custom-priced.
                  </span>
                </h2>
                <p className="mt-4 text-base text-ink-300 leading-relaxed max-w-lg">
                  Fees depend on duration, audience size, topics covered, and
                  delivery mode. Share your requirements and we&apos;ll send a
                  customised proposal within 48 hours.
                </p>
              </div>
              <div className="md:col-span-5 md:text-right">
                <Link
                  href="/contact?subject=workshops"
                  className="group inline-flex items-center gap-2 bg-white text-ink px-6 py-3.5 rounded-full text-sm font-medium hover:bg-teal-50 transition-all"
                >
                  Request a proposal
                  <ArrowRight
                    size={16}
                    className="group-hover:translate-x-0.5 transition-transform"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function WorkshopCard({
  workshop,
}: {
  workshop: (typeof workshopTypes)[number];
}) {
  const Icon = workshop.icon;
  return (
    <div
      className={`group relative overflow-hidden rounded-3xl bg-gradient-to-br ${workshop.color} text-white p-8 noise-overlay flex flex-col h-full min-h-[480px]`}
    >
      <div
        className={`absolute -top-20 -right-20 w-72 h-72 ${workshop.glow} blur-3xl rounded-full`}
      />

      <div className="relative flex-1">
        <div className="flex items-start justify-between mb-7">
          <div className="w-12 h-12 rounded-xl bg-white/15 border border-white/20 flex items-center justify-center backdrop-blur-sm">
            <Icon size={22} strokeWidth={1.8} />
          </div>
          <div className="text-right">
            <p
              className={`text-[10px] uppercase tracking-wider font-semibold ${workshop.accent}`}
            >
              {workshop.duration}
            </p>
          </div>
        </div>

        <p
          className={`text-xs uppercase tracking-widest font-semibold ${workshop.accent} mb-2`}
        >
          {workshop.grades}
        </p>
        <h3 className="font-display text-2xl md:text-3xl font-medium tracking-tight leading-tight mb-6">
          {workshop.audience}
        </h3>

        <ul className="space-y-2.5">
          {workshop.points.map((p) => (
            <li
              key={p}
              className="flex items-start gap-2.5 text-sm text-white/85 leading-relaxed"
            >
              <Check
                size={14}
                className="mt-1 shrink-0 opacity-70"
                strokeWidth={2.5}
              />
              <span>{p}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
