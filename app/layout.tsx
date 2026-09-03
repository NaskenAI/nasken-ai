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
  metadataBase: new URL("https://www.nasken.ai"),
  title: "Nasken AI — Post-discharge RPM & FHIR interoperability",
  description:
    "Nasken AI is building remote patient monitoring for the period after discharge, and a toolkit that converts legacy clinical data into standards-conformant FHIR.",
  keywords: [
    "Post-discharge RPM",
    "Remote Patient Monitoring",
    "FHIR",
    "Health data interoperability",
    "Diabetic foot ulcer",
    "Healthcare AI",
    "Nasken AI",
    "Karnataka",
  ],
  alternates: {
    canonical: "https://www.nasken.ai",
  },
  openGraph: {
    title: "Nasken AI — Post-discharge RPM & FHIR interoperability",
    description:
      "Nasken AI is building remote patient monitoring for the period after discharge, and a toolkit that converts legacy clinical data into standards-conformant FHIR.",
    url: "https://www.nasken.ai",
    siteName: "Nasken AI",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nasken AI — Post-discharge RPM & FHIR interoperability",
    description:
      "Nasken AI is building remote patient monitoring for the period after discharge, and a toolkit that converts legacy clinical data into standards-conformant FHIR.",
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
