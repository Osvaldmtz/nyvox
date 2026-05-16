"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { SplineHero } from "./ui/SplineHero";

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
    <section className="relative min-h-screen overflow-hidden border-b border-black/[0.06] bg-white pt-14 md:pt-[4.5rem]">
      {/* Modelo 3D de Spline como fondo */}
      <SplineHero />

      {/* Contenido del Hero encima */}
      <div className="relative z-10 mx-auto flex min-h-[calc(100svh-3.5rem)] w-full max-w-[1400px] flex-col items-start justify-end px-8 pb-32 pt-16 md:min-h-[calc(100svh-4.5rem)] md:px-16 md:pt-32">
        <div className="flex max-w-3xl flex-col gap-10">
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
          >
            <Link
              href="#contacto"
              className="inline-flex rounded-full bg-nyvox-blue px-8 py-3.5 text-[15px] font-medium tracking-tight text-white transition-opacity duration-300 hover:opacity-90"
            >
              Iniciar proyecto
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
