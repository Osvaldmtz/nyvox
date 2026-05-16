"use client";

import { useMagneticEffect } from "@/hooks/useMagneticEffect";
import Link from "next/link";
import type { ReactNode, Ref } from "react";

interface MagneticButtonProps {
  href: string;
  children: ReactNode;
  className?: string;
  variant?: "primary" | "secondary";
}

export function MagneticButton({
  href,
  children,
  className = "",
  variant = "primary",
}: MagneticButtonProps) {
  const ref = useMagneticEffect(0.2);

  const baseClasses =
    "inline-flex items-center gap-2 h-14 px-8 rounded-full font-medium transition-colors duration-300";

  const variants = {
    primary: "bg-[#1464F0] text-white hover:bg-black",
    secondary: "bg-black text-white hover:bg-[#1464F0]",
  };

  return (
    <Link
      href={href}
      ref={ref as Ref<HTMLAnchorElement>}
      className={`${baseClasses} ${variants[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
