import { SmoothScroll } from "@/components/ui/SmoothScroll";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
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
  metadataBase: new URL("https://nyvox.co"),
  title: "Nyvox — Software hecho con visión.",
  description:
    "Diseñamos y construimos productos digitales para empresas que quieren crecer. Apps, SaaS, ecommerce y software a la medida — desde Colombia para el mundo.",
  openGraph: {
    title: "Nyvox — Software hecho con visión.",
    description:
      "Diseñamos y construimos productos digitales para empresas que quieren crecer.",
    locale: "es_CO",
    type: "website",
    images: [
      {
        url: "/hero.jpg",
        width: 1920,
        height: 1080,
        alt: "Nyvox",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nyvox — Software hecho con visión.",
    description:
      "Diseñamos y construimos productos digitales para empresas que quieren crecer.",
    images: ["/hero.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="es" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full bg-white text-nyvox-black">
        <SmoothScroll>{children}</SmoothScroll>
        <WhatsAppButton />
      </body>
    </html>
  );
}
