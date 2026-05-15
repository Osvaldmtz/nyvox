import Image from "next/image";

type LogoProps = {
  variant?: "black" | "white";
  className?: string;
  priority?: boolean;
};

export function Logo({
  variant = "black",
  className = "",
  priority = false,
}: LogoProps) {
  const variantClass = variant === "white" ? "brightness-0 invert" : "";
  const sizeClass =
    className.trim().length > 0 ? className : "h-8 w-auto md:h-10";

  return (
    <Image
      src="/logo/nyvox-logo.svg"
      alt="Nyvox"
      width={160}
      height={48}
      priority={priority}
      className={`${sizeClass} ${variantClass}`}
    />
  );
}
