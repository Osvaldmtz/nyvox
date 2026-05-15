import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ServiciosPageClient } from "@/components/ServiciosPageClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Servicios",
  description:
    "Apps móviles, SaaS, software empresarial y ecommerce a la medida. Construimos productos digitales desde Colombia para empresas que quieren crecer.",
  openGraph: {
    title: "Servicios — Nyvox",
    description: "Cuatro maneras de construir productos digitales serios.",
  },
};

export default function ServiciosPage() {
  return (
    <>
      <Header />
      <ServiciosPageClient />
      <Footer />
    </>
  );
}
