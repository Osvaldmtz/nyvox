import Image from "next/image";
import Link from "next/link";

export function About() {
  return (
    <section
      id="nosotros"
      className="border-b border-black/[0.06] bg-white py-32 md:py-48"
    >
      <div className="mx-auto grid max-w-[1400px] items-center gap-14 px-6 md:gap-20 md:px-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-24 lg:px-14">
        <div className="order-2 lg:order-1">
          <h2
            className="font-medium tracking-[-0.035em] text-nyvox-black"
            style={{ fontSize: "clamp(40px, 5vw, 72px)" }}
          >
            Un estudio. Pocos clientes. Productos serios.
          </h2>
          <p className="mt-10 max-w-xl text-black/65">
            Somos un equipo pequeño basado en Colombia. Trabajamos con marcas y
            founders que valoran la calidad sobre la velocidad. Cada proyecto que
            tomamos lo tratamos como si fuera nuestro.
          </p>
          <Link
            href="#contacto"
            className="mt-12 inline-flex rounded-full bg-nyvox-blue px-7 py-3 text-[15px] font-medium tracking-tight text-white transition-opacity duration-300 hover:opacity-90"
          >
            Trabajar con Nyvox
          </Link>
        </div>
        <div className="relative order-1 aspect-[3/2] w-full overflow-hidden bg-nyvox-cream lg:order-2">
          <Image
            src="/about.jpg"
            alt="Equipo Nyvox"
            fill
            sizes="(min-width: 1024px) 45vw, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
