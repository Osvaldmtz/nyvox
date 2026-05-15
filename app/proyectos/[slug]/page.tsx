import { ProjectDetailClient } from "@/components/ProjectDetailClient";
import {
  getNextProject,
  getProjectBySlug,
  projects,
} from "@/lib/content/projects";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) {
    return { title: "Proyecto | Nyvox" };
  }
  return {
    title: `${project.name} | Nyvox`,
    description: project.description,
    openGraph: {
      title: `${project.name} | Nyvox`,
      description: project.description,
      images: [{ url: project.image, alt: project.name }],
    },
  };
}

export default async function ProyectoPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) {
    notFound();
  }
  const nextProject = getNextProject(slug);
  return (
    <ProjectDetailClient project={project} nextProject={nextProject} />
  );
}
