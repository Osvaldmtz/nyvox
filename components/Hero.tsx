"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const headingSegments = ["Software", "hecho con", "visión."];

const easeEditorial = [0.22, 1, 0.36, 1] as const;

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.08 },
  },
};

const wordMotion = {
  hidden: { opacity: 0, y: "0.35em" },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: easeEditorial },
  },
};

export function Hero() {
  return (
    <section className="border-b border-black/[0.06] bg-white pt-14 md:pt-[4.5rem]">
      <div className="mx-auto grid max-w-[1400px] gap-12 px-6 pt-16 pb-16 md:gap-16 md:px-10 md:pt-16 md:pb-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-20 lg:px-14 lg:pt-24 lg:pb-24">
        <div className="flex flex-col justify-center gap-10">
          <motion.h1
            variants={container}
            initial="hidden"
            animate="visible"
            className="max-w-[14ch] font-medium leading-[0.95] tracking-[-0.04em] text-nyvox-black"
            style={{ fontSize: "clamp(56px, 10vw, 140px)" }}
          >
            {headingSegments.map((segment, i) => (
              <motion.span
                key={`${segment}-${i}`}
                variants={wordMotion}
                className={`inline-block mr-[0.2em] last:mr-0 ${segment === "hecho con" ? "whitespace-nowrap" : ""}`}
              >
                {segment}
              </motion.span>
            ))}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.6, ease: easeEditorial }}
            className="max-w-xl text-lg leading-relaxed text-black/70 md:text-xl"
          >
            Diseñamos y construimos productos digitales para empresas que quieren
            crecer. Apps, SaaS, ecommerce y software a la medida — desde Colombia
            para el mundo.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.72, duration: 0.55, ease: easeEditorial }}
            className="flex flex-col gap-4 sm:flex-row sm:items-center"
          >
            <Link
              href="/#contacto"
              className="inline-flex h-14 items-center justify-center rounded-full bg-nyvox-blue px-8 text-[15px] font-medium tracking-tight text-white transition-opacity duration-300 hover:opacity-90"
            >
              Iniciar proyecto
            </Link>
            <Link
              href="/#trabajo"
              className="inline-flex h-14 w-full items-center justify-center rounded-full border border-black/10 px-8 text-base font-medium text-black transition-colors hover:bg-black hover:text-white sm:w-auto sm:border-0 sm:hover:bg-transparent sm:hover:text-[#1464F0]"
            >
              Ver trabajo →
            </Link>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.985 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: easeEditorial, delay: 0.15 }}
          className="relative aspect-video w-full overflow-hidden bg-nyvox-cream"
        >
          <Image
            src="/hero.jpg"
            alt="Nyvox — desarrollo de software"
            fill
            priority
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}
