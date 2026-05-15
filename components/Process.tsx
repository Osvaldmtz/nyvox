const steps = [
  {
    n: "01",
    title: "Descubrimiento",
    body: "Entendemos tu negocio antes de tocar código.",
  },
  {
    n: "02",
    title: "Diseño",
    body: "Prototipos en días, no en meses.",
  },
  {
    n: "03",
    title: "Construcción",
    body: "Iteración semanal, sin sorpresas.",
  },
  {
    n: "04",
    title: "Lanzamiento",
    body: "Y soporte continuo después del go-live.",
  },
];

export function Process() {
  return (
    <section
      id="proceso"
      className="border-b border-black/[0.06] bg-white py-16 md:py-24"
    >
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 lg:px-14">
        <h2
          className="mb-10 font-medium tracking-[-0.035em] text-nyvox-black md:mb-14"
          style={{ fontSize: "clamp(40px, 5vw, 72px)" }}
        >
          Proceso
        </h2>
        <div className="grid gap-8 md:grid-cols-2 md:gap-x-6 md:gap-y-10 lg:grid-cols-4 lg:gap-x-4">
          {steps.map((step) => (
            <div key={step.n} className="flex flex-col gap-6">
              <span
                className="font-medium tabular-nums tracking-[-0.05em] text-black/25"
                style={{ fontSize: "clamp(48px, 6vw, 96px)" }}
              >
                {step.n}
              </span>
              <div>
                <h3 className="text-xl font-medium tracking-tight text-nyvox-black md:text-2xl">
                  {step.title}
                </h3>
                <p className="mt-4 text-black/60">{step.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
