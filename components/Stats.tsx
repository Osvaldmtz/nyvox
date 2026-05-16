"use client";

import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useMotionValueEvent,
  useTransform,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";

const easeStats = [0.22, 1, 0.36, 1] as const;

function AnimatedCounter({
  from = 0,
  to,
  suffix = "",
}: {
  from?: number;
  to: number;
  suffix?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const count = useMotionValue(from);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const [display, setDisplay] = useState(from);

  useMotionValueEvent(rounded, "change", (latest) => setDisplay(latest));

  useEffect(() => {
    if (!isInView) return;
    const controls = animate(count, to, {
      duration: 2,
      ease: easeStats,
    });
    return () => controls.stop();
  }, [isInView, count, to]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

export function Stats() {
  const stats = [
    { value: 15, suffix: "+", label: "Proyectos entregados" },
    { value: 7, suffix: " años", label: "En desarrollo de software" },
    { value: 3, suffix: " países", label: "Donde operan nuestros clientes" },
    { value: 100, suffix: "%", label: "Código a la medida" },
  ];

  return (
    <section className="border-y border-black/[0.06] px-8 py-32 md:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-gray-500 md:text-sm">
            Por los números
          </p>
        </div>

        <div className="grid grid-cols-2 gap-12 md:grid-cols-4 lg:gap-16">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: easeStats,
              }}
              className="text-center"
            >
              <div className="text-6xl font-bold tracking-tighter text-[#1464F0] md:text-7xl lg:text-8xl">
                <AnimatedCounter to={stat.value} suffix={stat.suffix} />
              </div>
              <p className="mt-4 text-sm tracking-tight text-gray-500 md:text-base">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
