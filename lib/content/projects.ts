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
      "Plataforma de evaluación psicométrica de candidatos para procesos de selección. Permite a empresas aplicar baterías de tests, generar reportes comparativos automáticos y tomar decisiones de contratación basadas en datos. Diseñada para consultoras de capital humano y departamentos de Talento internos.",
    challenge:
      "El cliente, una consultora de capital humano, necesitaba digitalizar su proceso de evaluación que era manual y consumía días de trabajo administrativo por cada candidato. Cada batería de tests se aplicaba en papel, se calificaba a mano y se entregaba el reporte como un PDF estático sin posibilidad de comparación.",
    solution:
      "Construimos una plataforma white-label donde el cliente puede crear procesos de selección personalizados, asignar evaluaciones a candidatos por email, y obtener reportes ejecutivos con scoring automático y recomendaciones de fit cultural. Los candidatos hacen los tests online en cualquier dispositivo y los resultados se procesan en tiempo real.",
    technologies: [
      "Next.js",
      "Supabase",
      "Resend",
      "Recharts",
      "Tailwind CSS",
      "TypeScript",
    ],
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
      "Manna Kid es una aplicación móvil de aprendizaje interactivo para niños de 4 a 10 años. Combina juegos educativos con un panel para padres que permite seguir el progreso de aprendizaje en lectoescritura, matemáticas y pensamiento crítico. Diseñada para complementar la educación formal con sesiones cortas y entretenidas.",
    challenge:
      "Las apps educativas para niños suelen ser entretenidas pero superficiales pedagógicamente. Los padres no tienen visibilidad real del aprendizaje. Y las que tienen contenido educativo serio son demasiado aburridas para mantener al niño enganchado más de cinco minutos.",
    solution:
      "Diseñamos una app dual: el niño ve un mundo de juegos coloridos con personajes y misiones, mientras el padre tiene un dashboard con métricas de tiempo invertido, áreas dominadas y reportes semanales por email. Sistema de gamificación con coleccionables, niveles, rewards físicos opcionales y progresión adaptativa según el desempeño del niño.",
    technologies: [
      "React Native",
      "Supabase",
      "Stripe",
      "RevenueCat",
      "Lottie",
      "TypeScript",
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
      "Plataforma de gestión de proyectos para constructoras modernas. Centraliza presupuestos, cronogramas, control de obra, gestión de subcontratistas y comunicación con cliente final en una sola herramienta. Pensada para constructoras medianas que necesitan profesionalizar su operación sin pagar enterprise software.",
    challenge:
      "Las constructoras medianas trabajan con Excel, WhatsApp y planos en PDF. Cuando un proyecto tiene cinco o más subcontratistas y cien partidas, la coordinación se vuelve caótica, los retrasos son la norma y el cliente final pierde visibilidad de su obra.",
    solution:
      "Software modular que cubre el ciclo completo del proyecto: presupuestación con APUs locales, cronograma Gantt interactivo, control de avance por partidas con fotografías, gestión de RFIs entre stakeholders y un portal para el cliente final que ve su obra en tiempo real con fotos diarias y reportes semanales.",
    technologies: [
      "Next.js",
      "Supabase",
      "PostgreSQL",
      "Mapbox",
      "Tailwind CSS",
      "TypeScript",
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
      "Nuvo Pay es una wallet digital para pagos cotidianos en Colombia. Integra tarjetas, transferencias PSE, pagos a contactos y pagos QR en una experiencia móvil simple y confiable. Pensada para usuarios que están cansados de tener cinco apps distintas para hacer pagos diarios.",
    challenge:
      "El mercado de pagos digitales en Colombia está fragmentado entre apps de bancos lentas y wallets sin integración bancaria robusta. El usuario promedio tiene tres apps distintas para pagar servicios, transferir a amigos y comprar en comercios.",
    solution:
      "Wallet unificada con onboarding KYC en tres minutos, conexión bancaria vía Open Banking, transferencias instantáneas gratis entre usuarios Nuvo, pagos QR sin comisión para el comerciante y un programa de cashback gamificado. Cumple con normativa de la Superfinanciera de Colombia.",
    technologies: [
      "React Native",
      "Node.js",
      "PostgreSQL",
      "AWS",
      "Open Banking APIs",
      "TypeScript",
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
      "Sistema de reservas para restaurantes boutique. Permite gestionar reservas, mesas, lista de espera y comunicación con clientes desde una tablet en el host stand. Diseñado para restaurantes de quince a cincuenta cubiertos que no necesitan complejidad enterprise.",
    challenge:
      "Los restaurantes boutique en Colombia no encuentran un sistema de reservas que se ajuste a su operación. La mayoría son demasiado complejos para su tamaño, o son software gringo con UX confusa y precios en dólares que no tienen sentido para el mercado local.",
    solution:
      "Aplicación web optimizada para tablet con interfaz minimalista, plano de mesas interactivo arrastrable, gestión de lista de espera con SMS automático a clientes, integración con Google Calendar del chef y reportes de ocupación con horarios picos y promedio de tickets.",
    technologies: [
      "Next.js",
      "Supabase",
      "Twilio SMS",
      "Tailwind CSS",
      "TypeScript",
    ],
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
