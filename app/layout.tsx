import type { Metadata } from "next";
import { Fraunces, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nasken AI — Medical AI for Hospitals & Clinics",
  description:
    "Nasken AI builds intelligent healthcare software for hospitals and clinics.",
  keywords: [
    "Medical AI",
    "Healthcare AI",
    "Hospital AI",
    "Clinical AI",
    "Nasken AI",
    "Karnataka AI",
  ],
  openGraph: {
    title: "Nasken AI — Medical AI for Hospitals & Clinics",
    description:
      "Nasken AI builds intelligent healthcare software for hospitals and clinics.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${fraunces.variable} ${plusJakarta.variable}`}>
      <body className="font-sans bg-white text-ink antialiased">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
