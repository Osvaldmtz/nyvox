"use client";

import type { Project } from "@/lib/content/projects";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const ease = [0.22, 1, 0.36, 1] as const;

const inView = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-40px" },
  transition: { duration: 0.6, ease },
};

type ProjectDetailClientProps = {
  project: Project;
  nextProject: Project;
};

function ParagraphBlock({ text, className }: { text: string; className?: string }) {
  const parts = text.split(/\n\n+/).filter(Boolean);
  return (
    <div className={className}>
      {parts.map((para, i) => (
        <p
          key={i}
          className="text-xl leading-relaxed text-gray-700 [&+&]:mt-6"
        >
          {para}
        </p>
      ))}
    </div>
  );
}

export function ProjectDetailClient({
  project,
  nextProject,
}: ProjectDetailClientProps) {
  return (
    <main className="bg-white font-sans text-black">
      <Link
        href="/#trabajo"
        className="fixed left-8 top-8 z-[60] inline-flex items-center rounded-full border border-black/10 bg-white/80 px-4 py-2 text-sm font-medium tracking-tight text-black backdrop-blur-md transition-colors hover:bg-white md:left-16"
      >
        ← Volver
      </Link>

      <section className="relative h-screen min-h-[600px] w-full overflow-hidden">
        <Image
          src={project.image}
          alt={project.name}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/30 to-transparent"
          aria-hidden
        />

        <div className="absolute left-8 top-24 z-10 md:left-16 md:top-28">
          <div className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm tracking-tight text-white backdrop-blur-md">
            <span className="tabular-nums">{project.year}</span>
            <span className="mx-2 opacity-70">·</span>
            <span>{project.category}</span>
          </div>
        </div>

        <motion.h1
          className="absolute bottom-8 left-8 right-8 max-w-[20ch] text-6xl font-bold tracking-tight text-white md:bottom-16 md:left-16 md:right-16 md:text-8xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
        >
          {project.name}
        </motion.h1>
      </section>

      <motion.section
        className="mx-auto max-w-6xl border-b border-gray-200 px-8 py-24 md:px-16"
        {...inView}
      >
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <p className="text-sm text-gray-500">Cliente</p>
            <p className="mt-2 text-xl font-medium text-black">{project.name}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Año</p>
            <p className="mt-2 text-xl font-medium tabular-nums text-black">
              {project.year}
            </p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Categoría</p>
            <p className="mt-2 text-xl font-medium text-black">{project.category}</p>
          </div>
        </div>
      </motion.section>

      <motion.section
        className="mx-auto max-w-4xl px-8 py-24 md:px-16"
        {...inView}
      >
        <h2 className="text-5xl font-bold tracking-tight text-black">
          El desafío
        </h2>
        <ParagraphBlock text={project.challenge} className="mt-8" />
      </motion.section>

      <motion.section
        className="mx-auto max-w-4xl border-t border-gray-200 px-8 py-24 md:px-16"
        {...inView}
      >
        <h2 className="text-5xl font-bold tracking-tight text-black">
          La solución
        </h2>
        <ParagraphBlock text={project.solution} className="mt-8" />
        <div className="mt-10 flex flex-wrap gap-3">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-gray-100 px-4 py-2 text-sm text-gray-800"
            >
              {tech}
            </span>
          ))}
        </div>
      </motion.section>

      <section className="mx-auto max-w-3xl px-8 py-32 text-center">
        <motion.h3
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
          className="text-4xl font-bold tracking-tight text-black md:text-5xl"
        >
          ¿Tienes un proyecto similar?
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1, ease }}
          className="mt-4 text-lg text-gray-500"
        >
          Conversemos sobre cómo podemos ayudarte a construirlo.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2, ease }}
          className="mt-8"
        >
          <MagneticButton href="/#contacto">
            Iniciar proyecto →
          </MagneticButton>
        </motion.div>
      </section>

      {project.liveUrl ? (
        <motion.section className="py-16 text-center" {...inView}>
          <Link
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[#1464F0] px-10 py-4 text-[15px] font-medium tracking-tight text-white transition-opacity hover:opacity-90"
          >
            Ver sitio en vivo →
          </Link>
        </motion.section>
      ) : null}

      <motion.section
        className="border-t border-gray-200 py-32"
        {...inView}
      >
        <div className="mx-auto max-w-[1400px] px-8 md:px-16">
          <p className="text-sm font-medium uppercase tracking-widest text-gray-500">
            Próximo proyecto →
          </p>
          <Link
            href={`/proyectos/${nextProject.slug}`}
            className="group mt-8 block max-w-4xl"
          >
            <div className="relative aspect-[3/2] overflow-hidden bg-gray-100">
              <Image
                src={nextProject.image}
                alt={nextProject.name}
                fill
                className="object-cover transition-[transform] duration-500 ease-out group-hover:scale-[1.02]"
                sizes="(min-width: 768px) 896px, 100vw"
              />
              <div className="pointer-events-none absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/[0.08]" />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/40 to-transparent p-8 md:p-10">
                <p className="text-3xl font-bold tracking-tight text-white md:text-4xl">
                  {nextProject.name}
                </p>
                <p className="mt-2 text-sm text-white/80">{nextProject.category}</p>
              </div>
            </div>
          </Link>
        </div>
      </motion.section>
    </main>
  );
}
