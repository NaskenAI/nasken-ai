import Link from "next/link";
import { Mail, MapPin, Linkedin, Instagram, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-ink-950 text-ink-100 relative overflow-hidden">
      {/* Subtle teal glow */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-teal-500/40 to-transparent" />
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-teal-500/10 blur-3xl rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* Brand */}
          <div className="md:col-span-4">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center">
                <svg
                  viewBox="0 0 24 24"
                  className="w-5 h-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M3 12h3l2-5 4 10 2-5h7" />
                </svg>
              </div>
              <span className="font-display text-xl font-semibold text-white">
                Nasken<span className="text-teal-400">.</span>AI
              </span>
            </Link>

            <p className="mt-5 text-sm text-ink-300 leading-relaxed max-w-sm">
              Building Medical AI software for hospitals and clinics, and
              training the next generation of healthcare-AI engineers.
            </p>

            <div className="mt-6 space-y-3 text-sm">
              <div className="flex items-start gap-3 text-ink-300">
                <MapPin size={16} className="mt-0.5 text-teal-400 shrink-0" />
                <span>
                  #2880, Someshwara Nilaya, Saptagiri Extension,
                  <br />
                  Tumkur, Karnataka, India — 572102
                </span>
              </div>
              <a
                href="mailto:info@nasken.ai"
                className="flex items-center gap-3 text-ink-300 hover:text-teal-400 transition-colors"
              >
                <Mail size={16} className="text-teal-400 shrink-0" />
                info@nasken.ai
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-2">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-ink-400 mb-4">
              Explore
            </h4>
            <ul className="space-y-2.5 text-sm">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About" },
                { href: "/training", label: "Training" },
                { href: "/workshops", label: "Workshops" },
                { href: "/contact", label: "Contact" },
              ].map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-ink-300 hover:text-white transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-ink-400 mb-4">
              Programs
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="/training"
                  className="text-ink-300 hover:text-white transition-colors"
                >
                  AI &amp; Prompt Engineering
                </Link>
              </li>
              <li>
                <Link
                  href="/training"
                  className="text-ink-300 hover:text-white transition-colors"
                >
                  Applied Machine Learning
                </Link>
              </li>
              <li>
                <Link
                  href="/training"
                  className="text-ink-300 hover:text-white transition-colors"
                >
                  Generative AI &amp; LLM Apps
                </Link>
              </li>
              <li>
                <Link
                  href="/workshops"
                  className="text-ink-300 hover:text-white transition-colors"
                >
                  School / College Workshops
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-ink-400 mb-4">
              Connect
            </h4>
            <div className="flex gap-3">
              {/* TODO: Add your social links here */}
              <a
                href="#"
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-full border border-ink-700 flex items-center justify-center text-ink-300 hover:text-white hover:border-teal-400 hover:bg-teal-500/10 transition-all"
              >
                <Linkedin size={16} />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full border border-ink-700 flex items-center justify-center text-ink-300 hover:text-white hover:border-teal-400 hover:bg-teal-500/10 transition-all"
              >
                <Instagram size={16} />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="w-10 h-10 rounded-full border border-ink-700 flex items-center justify-center text-ink-300 hover:text-white hover:border-teal-400 hover:bg-teal-500/10 transition-all"
              >
                <Facebook size={16} />
              </a>
            </div>

            <div className="mt-6 p-4 rounded-xl bg-ink-900 border border-ink-800">
              <p className="text-xs text-ink-400 mb-1">Drop us a line</p>
              <a
                href="mailto:info@nasken.ai"
                className="text-sm text-teal-400 hover:text-teal-300 transition-colors"
              >
                info@nasken.ai
              </a>
            </div>
          </div>
        </div>

        {/* Bottom strip */}
        <div className="mt-12 pt-8 border-t border-ink-800 flex flex-col md:flex-row justify-between gap-4 text-xs text-ink-400">
          <p>
            © {new Date().getFullYear()} Nasken AI Private Limited. All rights
            reserved. <span className="hidden md:inline">·</span>{" "}
            <span className="block md:inline mt-1 md:mt-0">
              CIN: U58200KA2026PTC218628
            </span>
          </p>
          <div className="flex gap-5">
            <Link href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
