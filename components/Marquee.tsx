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

function MarqueeSequence({ suffix }: { suffix: string }) {
  return (
    <>
      {NAMES.map((name) => (
        <span
          key={`${suffix}-${name}`}
          className="inline-flex shrink-0 items-center whitespace-nowrap"
        >
          <span className="px-8 text-5xl font-bold tracking-tight text-black/15 md:text-7xl lg:text-8xl">
            {name}
          </span>
          <span
            className="text-5xl font-bold tracking-tight text-[#1464F0] md:text-7xl lg:text-8xl"
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
      className="overflow-hidden bg-white py-20 md:py-28"
      aria-label="Proyectos destacados"
    >
      <p className="mb-12 text-center text-xs uppercase tracking-[0.2em] text-gray-500 md:text-sm">
        Algunos proyectos que hemos construido
      </p>
      <div className="group">
        <div className="flex w-max animate-marquee whitespace-nowrap group-hover:[animation-play-state:paused]">
          <div className="flex shrink-0 items-center">
            <MarqueeSequence suffix="a" />
          </div>
          <div className="flex shrink-0 items-center" aria-hidden>
            <MarqueeSequence suffix="b" />
          </div>
        </div>
      </div>
    </section>
  );
}
