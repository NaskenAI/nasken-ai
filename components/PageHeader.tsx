import { ReactNode } from "react";

interface PageHeaderProps {
  eyebrow: string;
  title: ReactNode;
  description?: string;
}

export default function PageHeader({
  eyebrow,
  title,
  description,
}: PageHeaderProps) {
  return (
    <section className="relative pt-20 pb-16 md:pt-28 md:pb-24 overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 bg-radial-fade pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern bg-[size:48px_48px] opacity-40 pointer-events-none [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,black,transparent)]" />

      <div className="relative max-w-4xl mx-auto px-6 lg:px-10 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-teal-200 bg-teal-50 text-teal-700 text-xs font-medium tracking-wide uppercase mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-teal-500 animate-pulse-soft" />
          {eyebrow}
        </div>

        <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight text-ink leading-[1.05] text-balance">
          {title}
        </h1>

        {description && (
          <p className="mt-6 text-lg md:text-xl text-ink-500 max-w-2xl mx-auto leading-relaxed text-balance">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
