"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const ease = [0.22, 1, 0.36, 1] as const;

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

function ArrowRightIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0"
      aria-hidden
    >
      <path
        d="M5 12h14M13 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-white px-8 text-center">
      <motion.span
        className="text-[180px] font-bold leading-none tracking-tighter text-[#1464F0] sm:text-[240px] md:text-[320px]"
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease }}
      >
        404
      </motion.span>

      <motion.h1
        className="mt-4 max-w-2xl text-3xl font-bold tracking-tight text-black md:text-5xl"
        {...fadeUp}
        transition={{ duration: 0.5, delay: 0.2, ease }}
      >
        Esta página no existe.
      </motion.h1>

      <motion.p
        className="mt-4 text-lg text-gray-500"
        {...fadeUp}
        transition={{ duration: 0.5, delay: 0.3, ease }}
      >
        Pero hay muchas otras que sí.
      </motion.p>

      <motion.div
        className="mt-12"
        {...fadeUp}
        transition={{ duration: 0.5, delay: 0.4, ease }}
      >
        <Link
          href="/"
          className="inline-flex h-14 items-center justify-center gap-2 rounded-full bg-black px-8 text-base font-medium text-white transition-colors hover:bg-[#1464F0]"
        >
          Volver al inicio
          <ArrowRightIcon />
        </Link>
      </motion.div>
    </main>
  );
}
