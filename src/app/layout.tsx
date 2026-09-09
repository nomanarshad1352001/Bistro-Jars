import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Fraunces, Manrope } from "next/font/google";
import "./globals.css";
import { LangProvider } from "@/lib/i18n";
import { img } from "@/content/media";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Grain from "@/components/Grain";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const fraunces = Fraunces({
  subsets: ["latin", "latin-ext"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
});

const manrope = Manrope({
  subsets: ["latin", "latin-ext"],
  variable: "--font-manrope",
});

const metadataBase = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(metadataBase),
  title: {
    default: "Bistro & Jars — Coffee Bar, Novi Beograd",
    template: "%s — Bistro & Jars",
  },
  description:
    "Bistro & Jars je kafić u srcu Novog Beograda. Kafa, potpis Kinder šejk, domaći ledeni čaj i vrt. Pariske komune 59. — Specialty coffee, signature shakes and a garden in New Belgrade.",
  openGraph: {
    title: "Bistro & Jars — Coffee Bar",
    description:
      "Kafa, potpis šejkovi i spora jutra — Pariske komune 59, Novi Beograd.",
    images: [img.heroPoster],
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#0b0906",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="sr" className={`${fraunces.variable} ${manrope.variable}`}>
      <body className="bg-ink font-sans text-cream antialiased">
        <LangProvider>
          <a
            href="#content"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[120] focus:rounded-full focus:bg-copper focus:px-4 focus:py-2 focus:text-ink"
          >
            Skip
          </a>
          <Nav />
          <main id="content">{children}</main>
          <Footer />
          <WhatsAppFloat />
          <Grain />
        </LangProvider>
      </body>
    </html>
  );
}
