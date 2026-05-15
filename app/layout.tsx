import { CustomCursor } from "@/components/ui/CustomCursor";
import { SmoothScroll } from "@/components/ui/SmoothScroll";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import type { ReactNode } from "react";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nyvox.io"),
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", sizes: "32x32", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [
      {
        url: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
    shortcut: "/favicon.ico",
  },
  title: {
    default: "Nyvox — Software hecho con visión.",
    template: "%s | Nyvox",
  },
  description:
    "Diseñamos y construimos productos digitales para empresas que quieren crecer. Apps, SaaS, ecommerce y software a la medida desde Colombia para el mundo.",
  keywords: [
    "software",
    "desarrollo",
    "apps",
    "saas",
    "ecommerce",
    "colombia",
    "agencia",
    "estudio",
    "next.js",
  ],
  authors: [{ name: "Nyvox" }],
  creator: "Nyvox",
  openGraph: {
    type: "website",
    locale: "es_CO",
    url: "https://nyvox.io",
    siteName: "Nyvox",
    title: "Nyvox — Software hecho con visión.",
    description:
      "Estudio de software en Colombia. Apps, SaaS y productos digitales hechos a medida.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nyvox — Software hecho con visión.",
    description: "Estudio de software en Colombia.",
    creator: "@nyvox",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="es" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full bg-white text-nyvox-black">
        <CustomCursor />
        <SmoothScroll>{children}</SmoothScroll>
        <WhatsAppButton />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
