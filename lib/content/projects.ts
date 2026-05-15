export type ProjectStatus = "live" | "concept";

export type Project = {
  slug: string;
  name: string;
  category: string;
  description: string;
  image: string;
  year: number;
  status: ProjectStatus;
  longDescription: string;
  challenge: string;
  solution: string;
  technologies: string[];
  liveUrl?: string;
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
    longDescription:
      "Kalyo es una plataforma SaaS B2B que digitaliza la práctica clínica de psicólogos en Latinoamérica. Centraliza historia clínica, agenda, sesiones virtuales, evaluaciones validadas y monitoreo continuo de pacientes en una sola herramienta diseñada por y para profesionales de salud mental.\n\nEl producto prioriza privacidad, consentimiento informado y una experiencia usable en conexiones lentas típicas de la región, sin sacrificar rigor clínico ni la velocidad del día a día en consulta.",
    challenge:
      "Los psicólogos en LATAM gestionan su práctica con WhatsApp, Excel y papel. No existía una herramienta moderna pensada para sus necesidades específicas: tests psicológicos validados, notas SOAP, agenda con recordatorios automáticos y videoconsulta integrada.",
    solution:
      "Construimos una plataforma multi-tenant con Next.js y Supabase, integrando Daily.co para videoconsulta, Stripe para pagos, Resend para emails transaccionales y Whisper para transcripción automática de sesiones. Incluye 91+ tests validados (BAI, BDI, MMPI, etc.) con reportes PDF premium.",
    technologies: [
      "Next.js 15",
      "Supabase",
      "Stripe",
      "Daily.co",
      "Resend",
      "Tailwind v4",
      "TypeScript",
    ],
    liveUrl: "https://kalyo.io",
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
    longDescription:
      "Coloris es el sistema de gestión de servicio técnico para una empresa de equipos de impresión con presencia en 5 ciudades de México. Permite asignación de rutas, captura de servicios en campo, firma digital del cliente y reportería en tiempo real.\n\nLos supervisores dejan de depender de fotos en chat y hojas sueltas: ven SLA, tiempos de traslado y cierres de orden en un solo panel, con trazabilidad lista para auditoría operativa.",
    challenge:
      "Una operación de mantenimiento de impresoras dispersa entre Mexicali, Ensenada, Hermosillo, Monterrey y Guadalajara, con técnicos que reportaban en papel y supervisores sin visibilidad de las operaciones en tiempo real.",
    solution:
      "Aplicación web responsive con módulo de campo optimizado para móvil, notificaciones por WhatsApp vía Twilio, firma digital del cliente, integración con SAT para facturación electrónica y dashboard ejecutivo con métricas en tiempo real.",
    technologies: [
      "Next.js",
      "Supabase",
      "Twilio WhatsApp",
      "Stripe",
      "Tailwind",
    ],
    liveUrl: "https://app.coloris.mx",
  },
  {
    slug: "frisa-talent",
    name: "Frisa Talent",
    category: "Web · HR Tech",
    description: "Plataforma de evaluación de candidatos.",
    image: "/work/frisa-talent.jpg",
    year: 2025,
    status: "live",
    longDescription:
      "Plataforma de evaluación psicométrica de candidatos para procesos de selección. Permite a empresas aplicar baterías de tests, generar reportes comparativos y tomar decisiones de contratación basadas en datos.\n\nEl enfoque es reducir fricción para el candidato y tiempo administrativo para el reclutador, manteniendo validez psicométrica y una narrativa clara para el cliente interno.",
    challenge:
      "El cliente, una consultora de capital humano, necesitaba digitalizar su proceso de evaluación que era manual y consumía días de trabajo administrativo por cada candidato.",
    solution:
      "Construimos una plataforma white-label donde el cliente puede crear procesos de selección personalizados, asignar evaluaciones a candidatos por email, y obtener reportes ejecutivos con scoring automático y recomendaciones de fit cultural.",
    technologies: ["Next.js", "Supabase", "Resend", "Recharts", "Tailwind"],
    liveUrl: "https://frisa-talent.vercel.app",
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
    longDescription:
      "Manna Kid es una aplicación móvil de aprendizaje interactivo para niños de 4 a 10 años. Combina juegos educativos con un panel para padres que permite seguir el progreso de aprendizaje en lectoescritura, matemáticas y pensamiento crítico.\n\nLa propuesta equilibra micro-sesiones cortas, feedback inmediato y rutas de aprendizaje adaptativas para que el niño mantenga atención sin saturación de pantalla.",
    challenge:
      "Las apps educativas para niños suelen ser entretenidas pero superficiales. Los padres no tienen visibilidad real del aprendizaje. Y las que tienen contenido serio son aburridas para los niños.",
    solution:
      "Diseñamos una app dual: el niño ve un mundo de juegos coloridos con personajes y misiones, mientras el padre tiene un dashboard con métricas de tiempo, áreas dominadas y reportes semanales. Sistema de gamificación con coleccionables, niveles y rewards físicos opcionales.",
    technologies: [
      "React Native",
      "Supabase",
      "Stripe",
      "RevenueCat",
      "Lottie",
    ],
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
    longDescription:
      "Plataforma de gestión de proyectos para constructoras modernas. Centraliza presupuestos, cronogramas, control de obra, gestión de subcontratistas y comunicación con cliente final en una sola herramienta.\n\nLa visión es reemplazar el caos de hojas desconectadas por un único sistema de verdad operativa, con permisos por rol y bitácoras que aguantan litigios y auditorías de obra.",
    challenge:
      "Las constructoras medianas trabajan con Excel, WhatsApp y planos en PDF. Cuando un proyecto tiene 5+ subcontratistas y 100+ partidas, la coordinación se vuelve caótica y los retrasos son la norma.",
    solution:
      "Software modular que cubre el ciclo completo: presupuestación con APUs locales, cronograma Gantt interactivo, control de avance por partidas con fotografías, gestión de RFIs y un portal para el cliente final que ve su obra en tiempo real.",
    technologies: [
      "Next.js",
      "Supabase",
      "PostgreSQL",
      "Mapbox",
      "Tailwind",
    ],
  },
  {
    slug: "nuvo-pay",
    name: "Nuvo Pay",
    category: "App · Fintech",
    description: "Wallet digital para pagos cotidianos.",
    image: "/work/nuvo-pay.jpg",
    year: 2025,
    status: "concept",
    longDescription:
      "Nuvo Pay es una wallet digital para pagos cotidianos en Colombia. Integra tarjetas, transferencias PSE, pagos a contactos y pagos QR en una experiencia móvil simple y confiable.\n\nEl roadmap contempla antifraud en tiempo real, límites dinámicos y educación financiera in-app para usuarios que recién migran del efectivo al digital.",
    challenge:
      "El mercado de pagos digitales en Colombia está fragmentado entre apps de bancos lentas y wallets sin integración bancaria robusta. El usuario promedio tiene 3 apps distintas para hacer pagos diarios.",
    solution:
      "Wallet unificada con onboarding KYC en 3 minutos, conexión bancaria vía Open Banking, transferencias gratis entre usuarios Nuvo, pagos QR sin comisión y un programa de cashback gamificado.",
    technologies: [
      "React Native",
      "Node.js",
      "PostgreSQL",
      "AWS",
      "Open Banking APIs",
    ],
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
    longDescription:
      "Sistema de reservas para restaurantes boutique. Permite gestionar reservas, mesas, lista de espera y comunicación con clientes desde una tablet en el host stand.\n\nIncluye reglas de capacidad por turno, preferencias de mesa y comunicación SMS discreta para no interrumpir el servicio en sala.",
    challenge:
      "Los restaurantes boutique en Colombia no encuentran un sistema de reservas que se ajuste a su operación: la mayoría son demasiado complejos o son solo software gringo con UX confusa.",
    solution:
      "Aplicación web optimizada para tablet con interfaz minimalista, plano de mesas interactivo, gestión de lista de espera con SMS automático, integración con Google Calendar y reportes de ocupación para el chef.",
    technologies: ["Next.js", "Supabase", "Twilio SMS", "Tailwind"],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getNextProject(currentSlug: string): Project {
  const i = projects.findIndex((p) => p.slug === currentSlug);
  if (i === -1) return projects[0];
  return projects[(i + 1) % projects.length];
}
