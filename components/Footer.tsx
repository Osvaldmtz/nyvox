import { Logo } from "@/components/ui/Logo";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-white py-24 md:py-32">
      <div className="mx-auto flex max-w-[1400px] flex-col gap-16 px-6 md:flex-row md:items-end md:justify-between md:gap-10 md:px-10 lg:px-14">
        <Link href="/" className="inline-block">
          <Logo className="h-14 w-auto md:h-[72px]" />
        </Link>
        <div className="flex flex-col gap-6 text-[15px] tracking-tight text-black/55 md:items-end md:text-right">
          <a
            href="mailto:hola@nyvox.co"
            className="transition-colors duration-300 hover:text-nyvox-blue"
          >
            hola@nyvox.co
          </a>
          <span>Colombia</span>
          <p className="max-w-xs text-black/45 md:text-right">
            Software hecho con visión.
          </p>
        </div>
      </div>
    </footer>
  );
}
