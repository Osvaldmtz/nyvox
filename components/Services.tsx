import { services } from "@/lib/content/services";
import Link from "next/link";

export function Services() {
  return (
    <section
      id="servicios"
      className="border-b border-black/[0.06] bg-white py-16 md:py-24"
    >
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 lg:px-14">
        <div className="mb-8 flex flex-col gap-6 md:mb-12 md:flex-row md:items-end md:justify-between">
          <h2
            className="max-w-[14ch] font-medium tracking-[-0.035em] text-nyvox-black"
            style={{ fontSize: "clamp(40px, 5vw, 72px)" }}
          >
            Lo que hacemos
          </h2>
          <Link
            href="/#contacto"
            className="inline-flex w-fit rounded-full bg-nyvox-blue px-7 py-3 text-[15px] font-medium tracking-tight text-white transition-opacity duration-300 hover:opacity-90"
          >
            Platiquemos tu idea
          </Link>
        </div>
        <div className="grid gap-px bg-black/[0.08] md:grid-cols-2">
          {services.map((service) => (
            <article
              key={service.title}
              className="bg-white p-10 md:p-14 lg:p-16"
            >
              <h3 className="mb-5 text-2xl font-medium tracking-tight text-nyvox-black md:text-[26px]">
                {service.title}
              </h3>
              <p className="mb-8 max-w-md text-black/65">{service.description}</p>
              <p className="text-sm tracking-tight text-black/45">{service.tech}</p>
            </article>
          ))}
        </div>

        <div className="mt-16 border-t border-gray-200 py-16 text-center">
          <p className="text-2xl font-medium tracking-tight text-nyvox-black md:text-3xl">
            ¿Listos para construir algo juntos?
          </p>
          <Link
            href="/#contacto"
            className="mt-6 inline-flex h-14 items-center gap-2 rounded-full bg-[#1464F0] px-8 font-medium text-white transition-colors hover:bg-black"
          >
            Hablemos →
          </Link>
        </div>
      </div>
    </section>
  );
}
