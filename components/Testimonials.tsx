"use client";

import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

const testimonials = [
  {
    quote:
      "Nyvox entendió nuestro problema en una sola llamada. En tres meses tuvimos algo mejor de lo que habíamos imaginado.",
    author: "Samuel Chin",
    role: "Director, Coloris México",
  },
  {
    quote:
      "Como psicóloga, valoro que el equipo de Nyvox haya estudiado mi trabajo antes de proponer soluciones. Es raro encontrar eso.",
    author: "Regina M.",
    role: "Psicóloga clínica, beta Kalyo",
  },
  {
    quote:
      "Su proceso es claro y sin sorpresas. Saben lo que hacen y lo demuestran iteración tras iteración.",
    author: "Ilse Vieyra",
    role: "Frisa Consultoría",
  },
] as const;

export function Testimonials() {
  return (
    <section
      id="testimonios"
      className="border-b border-black/[0.06] bg-white px-8 py-32 md:px-16"
    >
      <div className="mx-auto max-w-7xl">
        <header className="mb-20 text-center">
          <p className="text-sm uppercase tracking-[0.2em] text-gray-500">
            Testimonios
          </p>
          <h2 className="mx-auto mt-6 max-w-3xl text-4xl font-bold tracking-tight text-nyvox-black md:text-6xl">
            Lo que dicen quienes ya trabajaron con nosotros.
          </h2>
        </header>

        <div className="grid grid-cols-1 gap-16 md:grid-cols-3 md:gap-12 lg:gap-16">
          {testimonials.map((item, index) => (
            <motion.article
              key={item.author}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: index * 0.15, ease }}
            >
              <p className="text-xl font-medium leading-relaxed tracking-tight text-black md:text-2xl">
                {item.quote}
              </p>
              <div className="my-8 h-px w-12 bg-gray-300" />
              <p className="text-base font-semibold text-black">{item.author}</p>
              <p className="mt-1 text-sm text-gray-500">{item.role}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
