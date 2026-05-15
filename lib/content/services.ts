export type Service = {
  title: string;
  description: string;
  tech: string;
};

export const services: Service[] = [
  {
    title: "Apps móviles",
    description: "Experiencias nativas que la gente realmente usa.",
    tech: "iOS · Android · React Native",
  },
  {
    title: "SaaS a medida",
    description:
      "Plataformas escalables, listas para crecer contigo.",
    tech: "Next.js · Supabase · Stripe",
  },
  {
    title: "Software empresarial",
    description: "Automatizamos lo que te quita tiempo.",
    tech: "ERPs · CRMs · APIs",
  },
  {
    title: "Web & Ecommerce",
    description:
      "Sitios rápidos, vendedores y memorables.",
    tech: "Next.js · Shopify · Headless",
  },
];
