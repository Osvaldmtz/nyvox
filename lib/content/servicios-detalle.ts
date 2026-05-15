export type ServicioDetalle = {
  index: string;
  title: string;
  description: string;
  description2: string;
  incluye: string[];
  stack: string[];
  image: string;
};

export const serviciosDetalle: ServicioDetalle[] = [
  {
    index: "01",
    title: "Apps móviles",
    description:
      "Construimos apps nativas que la gente usa todos los días. iOS, Android o React Native según lo que tu producto necesite. Pensamos en performance, UX detallada y operación a largo plazo desde el primer wireframe.",
    description2:
      "No solo escribimos código — diseñamos productos. Investigamos a tus usuarios, prototipamos en Figma, iteramos con beta testing real, y solo después construimos.",
    incluye: [
      "Investigación de usuarios y wireframes",
      "Diseño UX/UI completo",
      "Desarrollo nativo (Swift/Kotlin) o React Native",
      "Backend escalable",
      "Integraciones con servicios externos",
      "Publicación en App Store y Google Play",
      "Mantenimiento y evolución post-launch",
    ],
    stack: ["React Native", "Swift", "Kotlin", "Supabase", "RevenueCat", "Sentry"],
    image: "/work/nuvo-pay.jpg",
  },
  {
    index: "02",
    title: "SaaS a medida",
    description:
      "Construimos plataformas SaaS multi-tenant pensadas para escalar desde el día uno. Auth robusta, billing recurrente, panel admin, métricas y todo lo necesario para que tu producto crezca sin reescrituras.",
    description2:
      "No usamos plantillas. Cada SaaS lo modelamos según tu negocio real: roles, permisos, planes, ciclos de billing, integraciones.",
    incluye: [
      "Arquitectura multi-tenant escalable",
      "Auth y permisos granulares (RLS, RBAC)",
      "Stripe billing con webhooks",
      "Panel admin completo",
      "Webhooks y APIs documentadas",
      "Analytics y observabilidad",
      "Onboarding y emails transaccionales",
    ],
    stack: ["Next.js", "Supabase", "Stripe", "PostgreSQL", "Vercel", "Resend"],
    image: "/work/kalyo.jpg",
  },
  {
    index: "03",
    title: "Software empresarial",
    description:
      "ERPs, CRMs, sistemas internos. Software que automatiza lo que hoy te toma horas en Excel o WhatsApp. Hecho a la medida de tu operación real, no de un manual genérico.",
    description2:
      "Empezamos entendiendo tus procesos actuales, no proponiendo herramientas. Después modelamos los datos, diseñamos las interfaces clave y entregamos algo que tu equipo realmente quiere usar.",
    incluye: [
      "Análisis de procesos actuales",
      "Modelado de datos a medida",
      "Integraciones con sistemas existentes",
      "Dashboards ejecutivos",
      "Reportería personalizada",
      "Permisos por roles",
      "Soporte y evolución continua",
    ],
    stack: ["Next.js", "PostgreSQL", "Prisma", "TypeScript", "APIs REST/GraphQL"],
    image: "/work/vertice-build.jpg",
  },
  {
    index: "04",
    title: "Web & ecommerce",
    description:
      "Sitios web rápidos, vendedores y memorables. Desde landing pages corporativas hasta ecommerce headless. Optimizados para SEO, mobile y conversión desde el día uno.",
    description2:
      "No hacemos sitios que se ven bonitos pero cargan en 8 segundos. Performance, diseño y conversión son lo mismo — un sitio rápido se ve mejor, vende más y posiciona mejor.",
    incluye: [
      "Diseño editorial premium",
      "Optimización para Core Web Vitals",
      "SEO técnico desde la base",
      "Ecommerce headless (Shopify Hydrogen o custom)",
      "CMS para autogestión",
      "Analytics integrado",
      "A/B testing-ready",
    ],
    stack: ["Next.js", "Tailwind", "Sanity", "Shopify Hydrogen", "Vercel"],
    image: "/work/mesa-quince.jpg",
  },
];
