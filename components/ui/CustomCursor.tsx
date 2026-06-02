"use client";

import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { useEffect, useState } from "react";

const springConfig = { stiffness: 280, damping: 28, mass: 0.4 };

export function CustomCursor() {
  const [active, setActive] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);
  const size = useSpring(8, springConfig);

  const left = useTransform([smoothX, size], ([x, s]) => (x as number) - (s as number) / 2);
  const top = useTransform([smoothY, size], ([y, s]) => (y as number) - (s as number) / 2);
  const backgroundColor = useTransform(size, (s) =>
    s > 20 ? "transparent" : "rgba(255, 255, 255, 0.95)",
  );

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!mq.matches || reducedMotion.matches) {
      return undefined;
    }

    const root = document.documentElement;
    root.classList.add("custom-cursor-ready");
    setActive(true);

    const onMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const onOver = (e: MouseEvent) => {
      const t = e.target as HTMLElement | null;
      const el = t?.closest?.(
        'a, button, [role="button"], input, textarea, select, .cursor-pointer',
      );
      size.set(el ? 48 : 8);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseover", onOver, true);

    return () => {
      root.classList.remove("custom-cursor-ready");
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver, true);
    };
  }, [mouseX, mouseY, size]);

  if (!active) {
    return null;
  }

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-[9999] rounded-full border-2 border-black shadow-[0_0_0_1px_rgba(255,255,255,0.85)]"
      style={{ left, top, width: size, height: size, backgroundColor }}
      aria-hidden
    />
  );
}
