export type ProjectStatus = "live" | "concept";

export type Project = {
  slug: string;
  name: string;
  category: string;
  description: string;
  image: string;
  year: number;
  status: ProjectStatus;
};

export const projects: Project[] = [
  {
    slug: "kalyo",
    name: "Kalyo",
    category: "SaaS · HealthTech",
    description:
      "Plataforma clínica para psicólogos en Latinoamérica.",
    image: "/work/kalyo.jpg",
    year: 2025,
    status: "live",
  },
  {
    slug: "coloris",
    name: "Coloris",
    category: "SaaS · Field Service",
    description:
      "Gestión de servicio técnico para equipos en campo.",
    image: "/work/coloris.jpg",
    year: 2024,
    status: "live",
  },
  {
    slug: "frisa-talent",
    name: "Frisa Talent",
    category: "Web · HR Tech",
    description: "Plataforma de evaluación de candidatos.",
    image: "/work/frisa-talent.jpg",
    year: 2025,
    status: "live",
  },
  {
    slug: "manna-kid",
    name: "Manna Kid",
    category: "App · EdTech",
    description:
      "Aprendizaje interactivo para niños y familias.",
    image: "/work/manna-kid.jpg",
    year: 2025,
    status: "concept",
  },
  {
    slug: "vertice-build",
    name: "Vértice Build",
    category: "SaaS · ConstrucTech",
    description:
      "Gestión de proyectos para constructoras modernas.",
    image: "/work/vertice-build.jpg",
    year: 2025,
    status: "concept",
  },
  {
    slug: "nuvo-pay",
    name: "Nuvo Pay",
    category: "App · Fintech",
    description: "Wallet digital para pagos cotidianos.",
    image: "/work/nuvo-pay.jpg",
    year: 2025,
    status: "concept",
  },
  {
    slug: "mesa-quince",
    name: "Mesa Quince",
    category: "Web · Hospitality",
    description:
      "Sistema de reservas para restaurantes boutique.",
    image: "/work/mesa-quince.jpg",
    year: 2025,
    status: "concept",
  },
];
