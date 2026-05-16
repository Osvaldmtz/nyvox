"use client";

const TECH_ITEMS = [
  "NEXT.JS",
  "REACT",
  "TYPESCRIPT",
  "TAILWIND",
  "SUPABASE",
  "POSTGRESQL",
  "STRIPE",
  "VERCEL",
  "NODE.JS",
  "PYTHON",
  "OPENAI",
  "RESEND",
  "TWILIO",
  "DAILY",
  "FRAMER MOTION",
  "REACT NATIVE",
] as const;

function TechMarqueeSequence({ suffix }: { suffix: string }) {
  return (
    <>
      {TECH_ITEMS.map((name) => (
        <span
          key={`${suffix}-${name}`}
          className="inline-flex shrink-0 items-center whitespace-nowrap"
        >
          <span className="px-6 text-3xl font-bold tracking-tight text-black/15 md:px-10 md:text-5xl lg:text-6xl">
            {name}
          </span>
          <span
            className="text-3xl font-bold tracking-tight text-[#1464F0] md:text-5xl lg:text-6xl"
            aria-hidden
          >
            ·
          </span>
        </span>
      ))}
    </>
  );
}

export function TechMarquee() {
  return (
    <section
      className="overflow-hidden border-y border-black/[0.06] py-20 md:py-28"
      aria-label="Stack tecnológico"
    >
      <p className="mb-12 text-center text-xs uppercase tracking-[0.2em] text-gray-500 md:text-sm">
        Stack que dominamos
      </p>
      <div className="group">
        <div className="flex w-max animate-tech-marquee whitespace-nowrap group-hover:[animation-play-state:paused]">
          <div className="flex shrink-0 items-center">
            <TechMarqueeSequence suffix="a" />
          </div>
          <div className="flex shrink-0 items-center" aria-hidden>
            <TechMarqueeSequence suffix="b" />
          </div>
        </div>
      </div>
    </section>
  );
}
