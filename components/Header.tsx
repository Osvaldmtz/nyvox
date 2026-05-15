"use client";

import { Logo } from "@/components/ui/Logo";
import {
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import Link from "next/link";
import { useRef, useState } from "react";

const easeEditorial = [0.22, 1, 0.36, 1] as const;

const links = [
  { href: "#manifesto", label: "Manifiesto" },
  { href: "#servicios", label: "Servicios" },
  { href: "#trabajo", label: "Trabajo" },
  { href: "#proceso", label: "Proceso" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#contacto", label: "Contacto" },
];

export function Header() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const lastY = useRef(0);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const prev = lastY.current;
    if (latest > prev && latest > 96) {
      setHidden(true);
    } else {
      setHidden(false);
    }
    lastY.current = latest;
  });

  return (
    <motion.header
      initial={{ y: 0 }}
      animate={{ y: hidden ? "-100%" : 0 }}
      transition={{ duration: 0.35, ease: easeEditorial }}
      className="fixed inset-x-0 top-0 z-50 border-b border-black/[0.06] bg-white/80 backdrop-blur-md"
    >
      <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-8 px-6 py-5 md:px-10 lg:px-14">
        <Link href="/" className="shrink-0">
          <Logo priority />
        </Link>
        <nav className="hidden items-center gap-10 text-[15px] font-medium tracking-tight text-nyvox-black md:flex">
          {links.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition-colors duration-300 hover:text-nyvox-blue"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          href="#contacto"
          className="inline-flex shrink-0 rounded-full bg-nyvox-blue px-5 py-2.5 text-[13px] font-medium tracking-tight text-white transition-opacity duration-300 hover:opacity-90 md:text-[14px]"
        >
          Iniciar proyecto
        </Link>
      </div>
    </motion.header>
  );
}
