import { CaseCard } from "@/components/CaseCard";
import { projects } from "@/lib/content/projects";
import Link from "next/link";

export function Work() {
  return (
    <section
      id="trabajo"
      className="border-b border-black/[0.06] bg-white py-32 md:py-48"
    >
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 lg:px-14">
        <div className="mb-16 flex flex-col gap-6 md:mb-24 md:flex-row md:items-end md:justify-between">
          <h2
            className="max-w-[12ch] font-medium tracking-[-0.035em] text-nyvox-black"
            style={{ fontSize: "clamp(40px, 5vw, 72px)" }}
          >
            Trabajo seleccionado
          </h2>
          <Link
            href="#contacto"
            className="inline-flex w-fit rounded-full bg-nyvox-blue px-7 py-3 text-[15px] font-medium tracking-tight text-white transition-opacity duration-300 hover:opacity-90"
          >
            Hablemos de tu producto
          </Link>
        </div>
        <div className="grid gap-16 md:gap-20 lg:grid-cols-2">
          {projects.map((project) => (
            <CaseCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
