"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const ease = [0.22, 1, 0.36, 1] as const;

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-white px-8 text-center">
      <motion.span
        className="text-[180px] font-bold leading-none tracking-tighter text-[#1464F0] md:text-[280px]"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease }}
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
          className="inline-flex h-14 items-center justify-center rounded-full bg-black px-8 text-base font-medium text-white transition-colors duration-300 hover:bg-[#1464F0]"
        >
          Volver al inicio
        </Link>
      </motion.div>
    </div>
  );
}
