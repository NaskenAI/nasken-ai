import Link from "next/link";
import { ArrowRight, Activity } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-teal-50/60 via-white to-white pointer-events-none" />
      <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-teal-200/40 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-40 -left-32 w-[400px] h-[400px] bg-coral-100/40 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute inset-0 bg-grid-pattern bg-[size:48px_48px] opacity-30 pointer-events-none [mask-image:radial-gradient(ellipse_70%_50%_at_50%_0%,black,transparent)]" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 pt-16 pb-24 md:pt-24 md:pb-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: copy */}
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/80 backdrop-blur border border-ink-100 text-xs font-medium text-ink-700 mb-7 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75 animate-ping" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500" />
              </span>
              Healthcare AI · Karnataka, India
            </div>

            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight text-ink leading-[1.02] text-balance">
              Medical AI{" "}
              <span className="italic text-teal-600">software</span> for
              hospitals &amp; clinics.
            </h1>

            <p className="mt-7 text-lg md:text-xl text-ink-500 leading-relaxed max-w-lg">
              Nasken AI builds intelligent healthcare platforms that combine
              machine learning, predictive analytics, and secure data systems —
              with privacy and responsible AI at the core.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                href="/about"
                className="group inline-flex items-center gap-2 bg-ink text-white px-6 py-3.5 rounded-full text-sm font-medium hover:bg-ink-800 transition-all shadow-lg shadow-ink/10 hover:shadow-xl hover:shadow-ink/20"
              >
                Learn more
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-0.5 transition-transform"
                />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-white text-ink px-6 py-3.5 rounded-full text-sm font-medium border border-ink-200 hover:border-ink-400 hover:bg-ink-50 transition-all"
              >
                Talk to us
              </Link>
            </div>

            {/* Quick stats */}
            <div className="mt-14 grid grid-cols-3 gap-6 pt-8 border-t border-ink-100">
              <div>
                <p className="font-display text-2xl text-ink font-medium">
                  HIPAA
                </p>
                <p className="text-xs text-ink-500 mt-1">Aligned pipelines</p>
              </div>
              <div>
                <p className="font-display text-2xl text-ink font-medium">
                  NVIDIA
                </p>
                <p className="text-xs text-ink-500 mt-1">Inception member</p>
              </div>
              <div>
                <p className="font-display text-2xl text-ink font-medium">
                  IEEE
                </p>
                <p className="text-xs text-ink-500 mt-1">Senior member</p>
              </div>
            </div>
          </div>

          {/* Right: ICU monitor visual */}
          <div className="relative">
            <ICUMonitorVisual />
          </div>
        </div>
      </div>
    </section>
  );
}

function ICUMonitorVisual() {
  return (
    <div className="relative">
      {/* Background card */}
      <div className="absolute -inset-4 bg-gradient-to-br from-teal-100/60 to-coral-100/40 rounded-[2rem] blur-2xl" />

      <div className="relative bg-white rounded-3xl shadow-2xl shadow-ink-900/10 border border-ink-100 p-7 overflow-hidden">
        <div className="absolute top-0 right-0 w-40 h-40 bg-teal-100/50 rounded-full blur-3xl" />

        {/* Header */}
        <div className="relative flex items-start justify-between mb-6">
          <div>
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-xl bg-teal-50 border border-teal-100 flex items-center justify-center">
                <Activity size={16} className="text-teal-600" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-ink-400 font-medium">
                  Live · ICU
                </p>
                <p className="text-sm font-medium text-ink">
                  Predictive Monitor
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-teal-50 border border-teal-100">
            <div className="w-1.5 h-1.5 rounded-full bg-teal-500 animate-pulse-soft" />
            <span className="text-[10px] uppercase tracking-wider font-semibold text-teal-700">
              Stable
            </span>
          </div>
        </div>

        {/* ECG */}
        <div className="relative bg-ink-950 rounded-xl p-5 mb-5 overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern bg-[size:20px_20px] opacity-10" />
          <div className="relative flex items-center justify-between mb-2">
            <span className="text-[10px] uppercase tracking-wider text-teal-400 font-mono">
              ECG · Lead II
            </span>
            <span className="text-[10px] text-ink-300 font-mono">72 BPM</span>
          </div>
          <svg
            viewBox="0 0 300 60"
            className="w-full h-14"
            preserveAspectRatio="none"
          >
            <path
              className="ecg-path"
              d="M0,30 L40,30 L50,30 L55,28 L60,32 L65,15 L70,45 L75,30 L80,30 L120,30 L130,30 L135,28 L140,32 L145,15 L150,45 L155,30 L160,30 L200,30 L210,30 L215,28 L220,32 L225,15 L230,45 L235,30 L240,30 L300,30"
              fill="none"
              stroke="#5FC2C1"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        {/* Vitals grid */}
        <div className="grid grid-cols-2 gap-3">
          <VitalCard label="Heart Rate" value="72" unit="bpm" trend="stable" />
          <VitalCard label="SpO₂" value="98" unit="%" trend="up" />
          <VitalCard label="Resp. Rate" value="16" unit="/min" trend="stable" />
          <VitalCard label="Temp" value="98.4" unit="°F" trend="stable" />
        </div>

        {/* Risk score */}
        <div className="mt-5 p-4 rounded-xl bg-gradient-to-r from-ink-50 to-teal-50/50 border border-ink-100">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-medium text-ink-700">
              Deterioration Risk · 6h forecast
            </span>
            <span className="text-xs font-mono text-teal-700 font-semibold">
              LOW · 0.08
            </span>
          </div>
          <div className="h-1.5 bg-ink-100 rounded-full overflow-hidden">
            <div className="h-full w-[8%] bg-gradient-to-r from-teal-400 to-teal-600 rounded-full" />
          </div>
          <p className="text-[11px] text-ink-500 mt-2">
            Multimodal fusion · 12 signals · 30s window
          </p>
        </div>
      </div>

      {/* Floating mini badge */}
      <div className="hidden md:block absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl shadow-ink-900/10 border border-ink-100 p-4 max-w-[180px]">
        <div className="flex items-center gap-2 mb-1">
          <div className="w-2 h-2 rounded-full bg-coral-400" />
          <span className="text-[10px] uppercase tracking-wider font-semibold text-ink-500">
            Early warning
          </span>
        </div>
        <p className="text-xs text-ink-700 leading-snug">
          Models surface risk hours before standard scoring systems.
        </p>
      </div>
    </div>
  );
}

function VitalCard({
  label,
  value,
  unit,
  trend,
}: {
  label: string;
  value: string;
  unit: string;
  trend: "up" | "down" | "stable";
}) {
  return (
    <div className="bg-ink-50/60 rounded-xl p-3 border border-ink-100">
      <p className="text-[10px] uppercase tracking-wider text-ink-500 font-medium">
        {label}
      </p>
      <div className="flex items-baseline gap-1 mt-1">
        <span className="font-display text-2xl font-medium text-ink">
          {value}
        </span>
        <span className="text-xs text-ink-500">{unit}</span>
      </div>
    </div>
  );
}
