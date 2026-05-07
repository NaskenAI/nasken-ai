# Nasken AI — Official Website

The official marketing website for **Nasken AI Private Limited** — a healthcare-AI company building Medical AI software for hospitals and clinics, and training the next generation of AI engineers.

🌐 **Live**: [nasken.ai](https://nasken.ai) _(once deployed)_

Built with **Next.js 14**, **TypeScript**, **Tailwind CSS**, and **Lucide icons**. Designed to deploy in one click on **Vercel**.

---

## 🎨 Design

- **Aesthetic**: Editorial, refined, medical-grade. Not generic SaaS.
- **Typography**: Fraunces (display, serif) + Plus Jakarta Sans (body).
- **Palette**:
  - **Ink** `#0B1F2A` — deep clinical navy (primary)
  - **Teal** `#0E7C7B` — trustworthy medical accent
  - **Coral** `#F26C5A` — warm human accent (used sparingly)
- **Motifs**: Live ECG lines, vitals monitor, grid patterns, soft radial fades, subtle noise texture.

---

## 📂 Project Structure

```
nasken-ai/
├── app/
│   ├── layout.tsx              # Root layout (fonts, navbar, footer)
│   ├── page.tsx                # Home
│   ├── globals.css             # Global styles + animations
│   ├── about/page.tsx          # About
│   ├── training/page.tsx       # Training programs
│   ├── workshops/page.tsx      # Workshops
│   └── contact/page.tsx        # Contact (smart form)
├── components/
│   ├── Navbar.tsx              # Sticky responsive nav
│   ├── Footer.tsx              # Dark footer with social links
│   ├── Hero.tsx                # Home hero + ICU monitor visual
│   └── PageHeader.tsx          # Shared page header
├── public/                     # Static assets (add your logo here)
├── tailwind.config.ts          # Custom theme + animations
├── next.config.js
├── tsconfig.json
├── package.json
└── README.md
```

---

## 🚀 Quickstart

### 1. Clone & install

```bash
git clone https://github.com/YOUR_USERNAME/nasken-ai.git
cd nasken-ai
npm install
```

### 2. Run locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### 3. Build for production

```bash
npm run build
npm run start
```

---

## ☁️ Deploy to Vercel (recommended — 1 minute)

### Option A — Connect GitHub repo

1. Push this repo to GitHub.
2. Go to [vercel.com/new](https://vercel.com/new).
3. Import your repo.
4. Vercel auto-detects Next.js. Click **Deploy**.
5. Done — your site is live with HTTPS at `nasken-ai.vercel.app` (or your custom domain).

### Option B — Vercel CLI

```bash
npm i -g vercel
vercel
```

### Custom domain

In your Vercel project: **Settings → Domains → Add `nasken.ai`**. Vercel will guide you through DNS records.

---

## ✏️ Things to Edit Before Going Live

### 1. Social media links
**`components/Footer.tsx`** — replace the `href="#"` placeholders for LinkedIn, Instagram, Facebook with your actual URLs:

```tsx
<a href="https://linkedin.com/company/nasken-ai" ...>
<a href="https://instagram.com/naskenai" ...>
<a href="https://facebook.com/naskenai" ...>
```

### 2. Logo
Replace the inline SVG icon in **`components/Navbar.tsx`** and **`components/Footer.tsx`** with your logo image:

```tsx
import Image from "next/image";
<Image src="/logo.svg" alt="Nasken AI" width={36} height={36} />
```

Drop your logo file into `/public/logo.svg`.

### 3. Contact form backend
The form currently shows a frontend-only success state. Wire it to a real backend:

**Easy options:**
- [Resend](https://resend.com) + a Next.js API route
- [Formspree](https://formspree.io) (no backend needed)
- [Web3Forms](https://web3forms.com)

In `app/contact/page.tsx`, find `handleSubmit` and replace with a real `fetch()` call to your endpoint.

### 4. Open Graph / Favicon
- Add `/public/og-image.png` (1200×630) for social previews.
- Add `/public/favicon.ico` for the browser tab icon.
- Update `metadata` in `app/layout.tsx` if needed.

### 5. Privacy Policy & Terms
Add `app/privacy/page.tsx` and `app/terms/page.tsx`, then update the footer links.

---

## 🧩 Tech Stack

| Tool | Purpose |
|---|---|
| [Next.js 14](https://nextjs.org) | React framework with App Router |
| [TypeScript](https://www.typescriptlang.org) | Type safety |
| [Tailwind CSS](https://tailwindcss.com) | Utility-first styling |
| [Lucide React](https://lucide.dev) | Icon library |
| [Google Fonts](https://fonts.google.com) | Fraunces + Plus Jakarta Sans |

---

## 🎯 Pages

| Route | Description |
|---|---|
| `/` | Landing page — Medical AI hero, focus areas, training/workshops teaser, partner CTA |
| `/about` | Company story, vision, offerings, technology pillars, leadership, recognitions |
| `/training` | 3-month AI training programs with details, audiences, curriculum, fees CTA |
| `/workshops` | School / PUC / college workshop offerings, what's included, request a proposal |
| `/contact` | Smart contact form with subject-aware fields and dynamic placeholders |

---

## 🛠 Developer Notes

- All pages are **fully responsive** (mobile, tablet, desktop).
- Uses Next.js **App Router** (server components by default; `"use client"` where needed).
- Custom animations defined in `tailwind.config.ts` and `app/globals.css`.
- Smart contact page reads `?subject=training` or `?subject=workshops` from URL params (CTAs on training/workshop pages auto-fill).

---

## 📄 License

© 2026 Nasken AI Private Limited. All rights reserved.
CIN: U58200KA2026PTC218628

---

## 📬 Questions?

Email **info@nasken.ai** or open an issue on this repo.
# nasken-ai
