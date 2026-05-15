"use client";

import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { useEffect, useState } from "react";

const springConfig = { stiffness: 200, damping: 25 };

export function CustomCursor() {
  const [active, setActive] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);
  const size = useSpring(12, springConfig);

  const left = useTransform([smoothX, size], ([x, s]) => (x as number) - (s as number) / 2);
  const top = useTransform([smoothY, size], ([y, s]) => (y as number) - (s as number) / 2);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    if (!mq.matches) {
      return undefined;
    }

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
      size.set(el ? 60 : 12);
    };

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseover", onOver, true);

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver, true);
    };
  }, [mouseX, mouseY, size]);

  if (!active) {
    return null;
  }

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-[9999] rounded-full bg-black mix-blend-difference"
      style={{ left, top, width: size, height: size }}
      aria-hidden
    />
  );
}
