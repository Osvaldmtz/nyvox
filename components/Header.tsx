"use client";

import { Logo } from "@/components/ui/Logo";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import Link from "next/link";
import {
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
} from "react";
import { createPortal } from "react-dom";

const easeEditorial = [0.22, 1, 0.36, 1] as const;

const links = [
  { href: "#manifesto", label: "Manifiesto" },
  { href: "#servicios", label: "Servicios" },
  { href: "#trabajo", label: "Trabajo" },
  { href: "#proceso", label: "Proceso" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#contacto", label: "Contacto" },
] as const;

const overlayMotion = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.95 },
  transition: { duration: 0.28, ease: easeEditorial },
} as const;

const linkListVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.05, delayChildren: 0.06 },
  },
} as const;

const linkItemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.32, ease: easeEditorial },
  },
} as const;

function HamburgerIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
      className="text-black"
    >
      <line
        x1="3"
        y1="6"
        x2="21"
        y2="6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <line
        x1="3"
        y1="12"
        x2="21"
        y2="12"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <line
        x1="3"
        y1="18"
        x2="21"
        y2="18"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
      className="text-black"
    >
      <path
        d="M6 6l12 12M18 6L6 18"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function Header() {
  const dialogId = useId();
  const titleId = `${dialogId}-title`;
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);

  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
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

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen || !dialogRef.current) return;

    const root = dialogRef.current;
    const selector =
      'a[href]:not([tabindex="-1"]), button:not([disabled]):not([tabindex="-1"])';

    const getFocusables = (): HTMLElement[] =>
      Array.from(root.querySelectorAll<HTMLElement>(selector));

    const focusTimeout = window.setTimeout(() => {
      closeButtonRef.current?.focus();
    }, 0);

    const handleTab = (e: KeyboardEvent) => {
      if (e.key !== "Tab") return;
      const focusables = getFocusables();
      if (focusables.length === 0) return;

      const first = focusables[0];
      const last = focusables[focusables.length - 1];

      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault();
          last.focus();
        }
      } else if (document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    root.addEventListener("keydown", handleTab);
    return () => {
      window.clearTimeout(focusTimeout);
      root.removeEventListener("keydown", handleTab);
    };
  }, [menuOpen]);

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  const mobileMenu =
    mounted &&
    createPortal(
      <AnimatePresence>
        {menuOpen ? (
          <motion.div
            key="mobile-menu-overlay"
            ref={dialogRef}
            id={dialogId}
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            {...overlayMotion}
            className="fixed inset-0 z-50 flex flex-col bg-white md:hidden"
          >
            <h2 id={titleId} className="sr-only">
              Menú de navegación
            </h2>

            <div className="flex shrink-0 justify-end px-6 pb-2 pt-6 md:px-10">
              <button
                ref={closeButtonRef}
                type="button"
                onClick={closeMenu}
                aria-label="Cerrar menú"
                className="flex size-6 shrink-0 items-center justify-center rounded-sm bg-transparent text-black outline-none ring-offset-2 focus-visible:ring-2 focus-visible:ring-black"
              >
                <CloseIcon />
              </button>
            </div>

            <div className="flex min-h-0 flex-1 flex-col justify-center px-6">
              <motion.nav
                variants={linkListVariants}
                initial="hidden"
                animate="visible"
                className="flex flex-col items-center gap-8"
                aria-label="Secciones"
              >
                {links.map((item) => (
                  <motion.div key={item.href} variants={linkItemVariants}>
                    <Link
                      href={item.href}
                      onClick={closeMenu}
                      className="block text-center text-5xl font-medium tracking-tight text-black transition-colors duration-300 hover:text-nyvox-blue"
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </motion.nav>
            </div>

            <div className="shrink-0 px-6 pb-10 pt-8">
              <Link
                href="#contacto"
                onClick={closeMenu}
                className="mx-auto flex max-w-sm justify-center rounded-full bg-nyvox-blue px-8 py-4 text-center text-[17px] font-medium tracking-tight text-white transition-opacity duration-300 hover:opacity-90"
              >
                Iniciar proyecto
              </Link>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>,
      document.body,
    );

  return (
    <>
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
          <nav
            className="hidden items-center gap-10 text-[15px] font-medium tracking-tight text-nyvox-black md:flex"
            aria-label="Principal"
          >
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
            className="hidden shrink-0 rounded-full bg-nyvox-blue px-5 py-2.5 text-[14px] font-medium tracking-tight text-white transition-opacity duration-300 hover:opacity-90 md:inline-flex"
          >
            Iniciar proyecto
          </Link>
          <button
            type="button"
            className="flex size-6 shrink-0 items-center justify-center rounded-sm bg-transparent text-black outline-none ring-offset-2 focus-visible:ring-2 focus-visible:ring-black md:hidden"
            aria-label="Abrir menú"
            aria-expanded={menuOpen}
            aria-controls={dialogId}
            onClick={() => setMenuOpen(true)}
          >
            <HamburgerIcon />
          </button>
        </div>
      </motion.header>
      {mobileMenu}
    </>
  );
}
