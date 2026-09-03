import Link from "next/link";
import Hero from "@/components/Hero";
import { ArrowRight } from "lucide-react";

const focusBlocks = [
  {
    number: "01",
    title: "Post-discharge remote patient monitoring",
    description:
      "The weeks after a patient leaves hospital are where recovery is won or lost, and where clinical visibility is thinnest. We're building monitoring that works from the patient's home, starting with diabetic foot ulcers — where a wound that goes unwatched is the difference between a dressing change and an amputation.",
    listLabel: "In development",
    items: [
      "At-home wound assessment from patient-captured images",
      "Structured recovery tracking between clinic visits",
      "Review and escalation workflow for the care team",
    ],
  },
  {
    number: "02",
    title: "FHIR health-data interoperability toolkit",
    description:
      "Most clinical data in Indian hospitals and labs lives in CSVs, spreadsheets, and legacy formats that no other system can read. We're building the toolkit that turns it into standards-conformant FHIR, with the mapping and validation work that step actually requires.",
    listLabel: "Five components",
    items: [
      "Legacy-to-FHIR mapping",
      "Terminology mapping",
      "Conformance validation",
      "Data-quality reporting",
      "Human review interface",
    ],
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

      {/* What we're building */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-10 mb-16">
            <div className="lg:col-span-5">
              <p className="text-xs uppercase tracking-widest text-teal-600 font-semibold mb-4">
                What we&apos;re building
              </p>
              <h2 className="font-display text-4xl md:text-5xl font-medium tracking-tight text-ink leading-[1.1] text-balance">
                Two problems, taken{" "}
                <span className="italic text-teal-600">seriously.</span>
              </h2>
            </div>
            <div className="lg:col-span-6 lg:col-start-7">
              <p className="text-lg text-ink-500 leading-relaxed">
                We&apos;re an early-stage team, so we&apos;re building two
                things properly rather than six things thinly. Both are in
                active development and neither is shipping yet.
              </p>
            </div>
          </div>

          {/* Two focus blocks */}
          <div className="grid md:grid-cols-2 gap-5">
            {focusBlocks.map((block) => (
              <FocusBlock key={block.number} {...block} />
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="py-24 md:py-32 bg-gradient-to-b from-white to-ink-50/40">
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
                Got a clinical-AI problem or{" "}
                <span className="italic text-teal-300">a pilot</span> in mind?
              </h2>
              <p className="mt-5 text-lg text-ink-300 leading-relaxed">
                If you&apos;re a hospital, a clinic, a lab, or a research group
                with a problem worth solving, start a conversation.
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

function FocusBlock({
  number,
  title,
  description,
  listLabel,
  items,
}: {
  number: string;
  title: string;
  description: string;
  listLabel: string;
  items: string[];
}) {
  return (
    <div className="group relative bg-white border border-ink-100 rounded-3xl p-8 md:p-10 hover:border-teal-200 hover:shadow-lg hover:shadow-teal-500/5 transition-all">
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-teal-50 to-transparent rounded-bl-3xl rounded-tr-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="relative">
        <p className="font-display text-2xl font-medium text-teal-600 mb-5">
          {number}
        </p>
        <h3 className="font-display text-2xl md:text-3xl font-medium text-ink mb-4 tracking-tight leading-[1.15] text-balance">
          {title}
        </h3>
        <p className="text-base text-ink-500 leading-relaxed">{description}</p>

        <p className="mt-8 mb-4 text-xs uppercase tracking-widest text-ink-400 font-semibold">
          {listLabel}
        </p>
        <ul className="space-y-2.5">
          {items.map((item) => (
            <li
              key={item}
              className="flex items-start gap-3 text-sm text-ink-700 leading-relaxed"
            >
              <span className="mt-[7px] w-1.5 h-1.5 rounded-full bg-teal-500 shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
