import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import {
  GraduationCap,
  BookOpen,
  Briefcase,
  Check,
  ArrowRight,
  Sparkles,
  Code2,
  Rocket,
  Calendar,
  Users,
  Award,
  MessageCircle,
  Mail,
} from "lucide-react";

const audiences = [
  {
    icon: BookOpen,
    title: "PUC / Pre-University Students",
    description:
      "Curious learners in 11th and 12th grade who want a head-start in AI before college.",
  },
  {
    icon: GraduationCap,
    title: "College Students (Engineering & Degree)",
    description:
      "B.E., B.Tech, BCA, MCA, M.Tech, M.Sc students looking to build job-ready AI skills.",
  },
  {
    icon: Briefcase,
    title: "Final-Year & Recent Graduates",
    description:
      "Students preparing for placements who want to ship real, deployable AI projects.",
  },
];

const programs = [
  {
    number: "01",
    icon: Sparkles,
    level: "Beginner",
    title: "AI & Prompt Engineering Fundamentals",
    duration: "3 Months",
    audience: "PUC and 1st/2nd year college students",
    topics: [
      "Foundations of Artificial Intelligence and Machine Learning",
      "Introduction to Generative AI and Large Language Models (LLMs)",
      "Prompt engineering: writing effective prompts for ChatGPT, Claude, Gemini",
      "Hands-on with AI tools for productivity, research, and content",
      "Building simple no-code AI workflows",
      "Responsible AI: ethics, bias, and safe usage",
      "Mini capstone project",
    ],
    outcome: "Certificate of Completion + portfolio project",
  },
  {
    number: "02",
    icon: Code2,
    level: "Intermediate",
    title: "Applied Machine Learning with Python",
    duration: "3 Months",
    audience: "Engineering & degree college students",
    topics: [
      "Python programming for AI (NumPy, Pandas, Matplotlib)",
      "Exploratory Data Analysis and statistics",
      "Supervised and unsupervised machine learning",
      "Introduction to deep learning and neural networks",
      "Working with real datasets in Jupyter / Google Colab",
      "Model evaluation, tuning, and deployment basics",
      "Hands-on capstone on a real-world dataset",
    ],
    outcome:
      "Certificate + GitHub portfolio + Letter of Recommendation for top performers",
  },
  {
    number: "03",
    icon: Rocket,
    level: "Advanced",
    title: "Generative AI & LLM App Development",
    duration: "3 Months",
    audience: "Final-year engineering students and recent graduates",
    topics: [
      "LLM fundamentals: transformers, embeddings, vector databases",
      "Advanced prompt engineering and prompt design patterns",
      "Retrieval-Augmented Generation (RAG)",
      "Building AI apps with OpenAI, Anthropic Claude, and open-source models",
      "LangChain, agents, and AI workflow automation (n8n)",
      "Fine-tuning fundamentals",
      "Capstone: build and deploy a working AI application",
    ],
    outcome:
      "Certificate + deployed project + interview prep + chance for internship at Nasken AI",
  },
];

const includedFeatures = [
  { icon: Calendar, label: "3-month structured curriculum" },
  { icon: Users, label: "Live online + recorded sessions" },
  { icon: MessageCircle, label: "Weekly mentor 1:1s" },
  { icon: Code2, label: "Real-world projects, not dummy assignments" },
  { icon: Check, label: "Code reviews from senior engineers" },
  { icon: Sparkles, label: "Industry guest sessions (HIMSS / AMIA network)" },
  { icon: Award, label: "Certificate of Completion" },
  { icon: Mail, label: "Letter of Recommendation for top performers" },
];

export default function TrainingPage() {
  return (
    <>
      <PageHeader
        eyebrow="Training Programs"
        title={
          <>
            AI Training for the{" "}
            <span className="italic text-teal-600">next generation.</span>
          </>
        }
        description="Industry-grade AI training programs for college students and PUC students — taught by engineers working at leading global tech companies."
      />

      {/* Intro */}
      <section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-6 lg:px-10 text-center">
          <p className="text-lg md:text-xl text-ink-600 leading-relaxed">
            We believe students should be trained on{" "}
            <span className="text-ink font-medium">real-world problems</span>,
            not just textbooks. Our 3-month programs give students hands-on
            exposure to production-grade AI — from prompt engineering and
            generative AI to machine learning and applied healthcare AI.
          </p>
        </div>
      </section>

      {/* Who it's for */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="mb-12">
            <p className="text-xs uppercase tracking-widest text-teal-600 font-semibold mb-4">
              Who it&apos;s for
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-medium tracking-tight text-ink leading-[1.15] text-balance">
              Built for curious learners at every stage.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {audiences.map((a) => (
              <div
                key={a.title}
                className="bg-white border border-ink-100 rounded-2xl p-7 hover:border-teal-200 transition-all"
              >
                <div className="w-11 h-11 rounded-xl bg-teal-50 border border-teal-100 flex items-center justify-center mb-5">
                  <a.icon size={20} className="text-teal-600" strokeWidth={1.8} />
                </div>
                <h3 className="font-display text-xl font-medium text-ink mb-2 tracking-tight">
                  {a.title}
                </h3>
                <p className="text-sm text-ink-500 leading-relaxed">
                  {a.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="py-16 md:py-24 bg-ink-50/40 border-y border-ink-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-xs uppercase tracking-widest text-teal-600 font-semibold mb-4">
              Our programs
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-medium tracking-tight text-ink leading-[1.1] text-balance">
              Three programs.{" "}
              <span className="italic text-teal-600">One ladder.</span>
            </h2>
          </div>

          <div className="space-y-5">
            {programs.map((p) => (
              <ProgramCard key={p.number} program={p} />
            ))}
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="mb-12 max-w-2xl">
            <p className="text-xs uppercase tracking-widest text-teal-600 font-semibold mb-4">
              What&apos;s included
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-medium tracking-tight text-ink leading-[1.1] text-balance">
              Every program comes with the{" "}
              <span className="italic text-teal-600">full kit.</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {includedFeatures.map((f) => (
              <div
                key={f.label}
                className="flex items-center gap-3 bg-white border border-ink-100 rounded-xl p-4"
              >
                <div className="w-9 h-9 rounded-lg bg-teal-50 flex items-center justify-center shrink-0">
                  <f.icon
                    size={16}
                    className="text-teal-600"
                    strokeWidth={2}
                  />
                </div>
                <span className="text-sm text-ink-700 font-medium">
                  {f.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fees CTA */}
      <section className="pb-24 md:pb-32">
        <div className="max-w-5xl mx-auto px-6 lg:px-10">
          <div className="relative overflow-hidden bg-gradient-to-br from-teal-600 to-teal-800 rounded-3xl p-10 md:p-14 text-white noise-overlay">
            <div className="absolute -top-20 -right-20 w-80 h-80 bg-teal-300/20 blur-3xl rounded-full" />
            <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-coral-400/10 blur-3xl rounded-full" />

            <div className="relative grid md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-7">
                <p className="text-xs uppercase tracking-widest text-teal-200 font-semibold mb-4">
                  Program fees
                </p>
                <h2 className="font-display text-3xl md:text-4xl font-medium tracking-tight leading-[1.15] text-balance">
                  Fees vary by program, level, and batch.
                </h2>
                <p className="mt-4 text-base text-teal-50/80 leading-relaxed max-w-lg">
                  Get in touch for the latest fee structure, batch start
                  dates, and any available scholarships or early-bird
                  discounts.
                </p>
              </div>
              <div className="md:col-span-5 md:text-right">
                <Link
                  href="/contact?subject=training"
                  className="group inline-flex items-center gap-2 bg-white text-teal-700 px-6 py-3.5 rounded-full text-sm font-medium hover:bg-teal-50 transition-all"
                >
                  Contact us for fees
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

function ProgramCard({ program }: { program: (typeof programs)[number] }) {
  const Icon = program.icon;
  return (
    <div className="group bg-white border border-ink-100 rounded-3xl overflow-hidden hover:border-teal-200 hover:shadow-lg hover:shadow-teal-500/5 transition-all">
      <div className="grid md:grid-cols-12 gap-0">
        {/* Left: number + level */}
        <div className="md:col-span-3 bg-gradient-to-br from-ink-950 to-ink-900 p-8 md:p-10 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-40 h-40 bg-teal-500/15 blur-3xl rounded-full" />
          <div className="relative flex flex-col h-full justify-between gap-8">
            <div>
              <p className="font-display text-6xl md:text-7xl font-medium text-teal-300/80 leading-none">
                {program.number}
              </p>
              <div className="mt-6 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20">
                <Icon size={12} className="text-teal-300" strokeWidth={2.2} />
                <span className="text-[11px] uppercase tracking-wider font-semibold">
                  {program.level}
                </span>
              </div>
            </div>
            <div className="text-xs text-ink-300 space-y-1">
              <p className="text-teal-300 font-mono">{program.duration}</p>
              <p>{program.audience}</p>
            </div>
          </div>
        </div>

        {/* Right: details */}
        <div className="md:col-span-9 p-8 md:p-10">
          <h3 className="font-display text-2xl md:text-3xl font-medium text-ink tracking-tight leading-tight mb-6">
            {program.title}
          </h3>

          <p className="text-xs uppercase tracking-widest text-ink-500 font-semibold mb-4">
            What you&apos;ll learn
          </p>
          <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2.5 mb-7">
            {program.topics.map((t) => (
              <li key={t} className="flex items-start gap-2.5 text-sm text-ink-700">
                <Check
                  size={14}
                  className="text-teal-600 mt-1 shrink-0"
                  strokeWidth={2.5}
                />
                <span>{t}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-5 border-t border-ink-100">
            <div>
              <p className="text-xs uppercase tracking-widest text-teal-600 font-semibold mb-1">
                Outcome
              </p>
              <p className="text-sm text-ink-700">{program.outcome}</p>
            </div>
            <Link
              href={`/contact?subject=training&program=${encodeURIComponent(
                program.title
              )}`}
              className="group/btn inline-flex items-center gap-2 bg-ink text-white px-5 py-3 rounded-full text-sm font-medium hover:bg-ink-800 transition-all whitespace-nowrap"
            >
              Contact us for fees
              <ArrowRight
                size={14}
                className="group-hover/btn:translate-x-0.5 transition-transform"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
