import { projects } from "@/lib/content/projects";
import type { MetadataRoute } from "next";

const base = "https://nyvox.io";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const home: MetadataRoute.Sitemap[number] = {
    url: base,
    lastModified,
    changeFrequency: "monthly",
    priority: 1,
  };

  const projectPages: MetadataRoute.Sitemap = projects.map((project) => ({
    url: `${base}/proyectos/${project.slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [home, ...projectPages];
}
