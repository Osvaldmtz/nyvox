import type { Project } from "@/lib/content/projects";
import Image from "next/image";

type CaseCardProps = {
  project: Project;
};

export function CaseCard({ project }: CaseCardProps) {
  const statusLabel = project.status === "live" ? "Live" : "Concept";

  return (
    <article className="group">
      <div className="relative aspect-[3/2] overflow-hidden bg-nyvox-cream">
        <Image
          src={project.image}
          alt={project.name}
          fill
          sizes="(min-width: 1024px) 42vw, 100vw"
          className="object-cover transition-[transform] duration-500 ease-out group-hover:scale-[1.02]"
        />
        <div className="pointer-events-none absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/[0.08]" />
      </div>
      <div className="mt-8 flex flex-wrap items-baseline justify-between gap-4">
        <div>
          <h3 className="text-2xl font-medium tracking-tight text-nyvox-black md:text-[26px]">
            {project.name}
          </h3>
          <p className="mt-2 max-w-md text-black/55">{project.description}</p>
        </div>
        <div className="flex flex-col items-end gap-1 text-right text-sm tracking-tight text-black/45 md:flex-row md:items-center md:gap-6 md:text-left">
          <span>{project.category}</span>
          <span className="tabular-nums">{project.year}</span>
          <span className="uppercase tracking-[0.14em] text-black/40">
            {statusLabel}
          </span>
        </div>
      </div>
    </article>
  );
}
