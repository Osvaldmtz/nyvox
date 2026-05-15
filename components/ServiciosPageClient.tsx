"use client";

import { serviciosDetalle } from "@/lib/content/servicios-detalle";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const ease = [0.22, 1, 0.36, 1] as const;

const inView = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.7, ease },
};

const heroTitle = "Servicios";
const heroLetters = heroTitle.split("");

const letterContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.045, delayChildren: 0.06 },
  },
};

const letterChild = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease },
  },
};

export function ServiciosPageClient() {
  return (
    <main className="bg-white text-black">
      <section className="px-8 py-32 md:px-16 md:py-48">
        <div className="mx-auto max-w-7xl">
          <motion.h1
            className="text-6xl font-bold tracking-tighter text-nyvox-black md:text-9xl"
            variants={letterContainer}
            initial="hidden"
            animate="visible"
          >
            {heroLetters.map((char, i) => (
              <motion.span
                key={`${char}-${i}`}
                variants={letterChild}
                className="inline-block"
                style={{ whiteSpace: char === " " ? "pre" : undefined }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.55, ease }}
            className="mt-8 max-w-2xl text-xl text-gray-500 md:text-2xl"
          >
            Cuatro maneras de construir productos digitales serios.
          </motion.p>
        </div>
      </section>

      {serviciosDetalle.map((svc, i) => {
        const isOdd = i % 2 === 0;
        return (
          <motion.section
            key={svc.index}
            className="border-b border-gray-100 px-8 py-24 md:px-16 md:py-32"
            {...inView}
          >
            <div className="mx-auto max-w-7xl">
              <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-24">
                <div className={isOdd ? "" : "lg:order-2"}>
                  <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#1464F0]">
                    {svc.index}
                  </p>
                  <h2 className="mt-4 text-4xl font-bold tracking-tight text-nyvox-black md:text-6xl">
                    {svc.title}
                  </h2>
                  <p className="mt-6 text-lg leading-relaxed text-gray-700 md:text-xl">
                    {svc.description}
                  </p>
                  <p className="mt-6 text-lg leading-relaxed text-gray-700 md:text-xl">
                    {svc.description2}
                  </p>

                  <p className="mt-12 text-sm uppercase tracking-[0.15em] text-gray-500">
                    Qué incluye:
                  </p>
                  <ul className="mt-4 space-y-2">
                    {svc.incluye.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-base text-gray-700"
                      >
                        <span className="mt-1 shrink-0 text-[#1464F0]">→</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <p className="mt-10 text-sm uppercase tracking-[0.15em] text-gray-500">
                    Stack típico:
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {svc.stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full bg-gray-100 px-4 py-1.5 text-sm font-medium text-gray-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <Link
                    href="/#contacto"
                    className="mt-10 inline-flex h-14 items-center gap-2 rounded-full bg-[#1464F0] px-8 font-medium text-white transition-colors hover:bg-black"
                  >
                    Iniciar proyecto →
                  </Link>
                </div>

                <div
                  className={`relative aspect-[3/4] w-full overflow-hidden rounded-lg border border-gray-100 bg-gray-50 ${
                    isOdd ? "" : "lg:order-1"
                  }`}
                >
                  <Image
                    src={svc.image}
                    alt={svc.title}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 40vw, 100vw"
                  />
                </div>
              </div>
            </div>
          </motion.section>
        );
      })}

      <section className="mx-auto max-w-3xl border-t border-gray-200 px-8 py-32 text-center">
        <motion.h3
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65, ease }}
          className="text-4xl font-bold tracking-tight text-nyvox-black md:text-6xl"
        >
          ¿No estás seguro qué necesitas?
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, delay: 0.1, ease }}
          className="mt-6 text-lg text-gray-500 md:text-xl"
        >
          Cuéntanos tu proyecto. Te decimos qué encaja mejor.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.18, ease }}
          className="mt-10 flex justify-center"
        >
          <Link
            href="/#contacto"
            className="inline-flex h-14 items-center gap-2 rounded-full bg-[#1464F0] px-8 font-medium text-white transition-colors hover:bg-black"
          >
            Hablemos →
          </Link>
        </motion.div>
      </section>
    </main>
  );
}
