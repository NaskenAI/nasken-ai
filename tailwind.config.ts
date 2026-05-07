import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Medical AI palette: deep teal + warm coral accent
        ink: {
          DEFAULT: "#0B1F2A",
          50: "#F5F8FA",
          100: "#E6EEF2",
          200: "#C8D7DF",
          300: "#9AB1BD",
          400: "#67828F",
          500: "#3F5C6B",
          600: "#28414E",
          700: "#1A2F3B",
          800: "#11242F",
          900: "#0B1F2A",
          950: "#06141C",
        },
        teal: {
          DEFAULT: "#0E7C7B",
          50: "#EAF7F7",
          100: "#CFEDED",
          200: "#9BDADA",
          300: "#5FC2C1",
          400: "#2FA5A4",
          500: "#0E7C7B",
          600: "#0A6968",
          700: "#085554",
          800: "#064140",
          900: "#042E2D",
        },
        coral: {
          DEFAULT: "#F26C5A",
          50: "#FEF2EF",
          100: "#FCDDD6",
          200: "#F9B8AB",
          300: "#F69280",
          400: "#F26C5A",
          500: "#E84D38",
          600: "#C13721",
          700: "#902919",
          800: "#601B11",
          900: "#300D08",
        },
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "ui-serif", "Georgia", "serif"],
        sans: ["var(--font-plus-jakarta)", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(to right, rgba(11,31,42,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(11,31,42,0.04) 1px, transparent 1px)",
        "radial-fade":
          "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(14,124,123,0.18), transparent)",
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease-out forwards",
        "fade-in": "fadeIn 0.8s ease-out forwards",
        "pulse-soft": "pulseSoft 3s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        pulseSoft: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.6" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
