"use client";

const NAMES = [
  "KALYO",
  "COLORIS",
  "FRISA TALENT",
  "MANNA KID",
  "VÉRTICE BUILD",
  "NUVO PAY",
  "MESA QUINCE",
] as const;

function MarqueeRow({ suffix }: { suffix: string }) {
  return (
    <>
      {NAMES.map((name) => (
        <span
          key={`${suffix}-${name}`}
          className="inline-flex shrink-0 items-center whitespace-nowrap"
        >
          <span className="text-5xl font-bold tracking-tight text-black/15 md:text-7xl lg:text-8xl">
            {name}
          </span>
          <span
            className="mx-4 text-5xl font-bold tracking-tight text-[#1464F0] md:mx-5 md:text-7xl lg:mx-6 lg:text-8xl"
            aria-hidden
          >
            ·
          </span>
        </span>
      ))}
    </>
  );
}

export function Marquee() {
  return (
    <section
      className="group border-b border-black/[0.06] bg-white py-20 md:py-28"
      aria-label="Proyectos destacados"
    >
      <p className="px-6 text-center text-xs uppercase tracking-[0.2em] text-gray-500 md:text-sm">
        Algunos proyectos que hemos construido
      </p>
      <div className="relative mt-10 overflow-hidden md:mt-12">
        <div className="nyvox-marquee-track flex w-max whitespace-nowrap">
          <div className="flex shrink-0 items-center">
            <MarqueeRow suffix="a" />
          </div>
          <div className="flex shrink-0 items-center" aria-hidden>
            <MarqueeRow suffix="b" />
          </div>
        </div>
      </div>
    </section>
  );
}
