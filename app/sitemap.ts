import { projects } from "@/lib/content/projects";
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://nyvox.io",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1.0,
    },
    ...projects.map((project) => ({
      url: `https://nyvox.io/proyectos/${project.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
