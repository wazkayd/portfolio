import type { Project, ProjectCategory } from "@/types/portfolio";

export function filterProjects(projects: readonly Project[], category: ProjectCategory | "all"): readonly Project[] {
  return category === "all" ? projects : projects.filter(project => project.category === category);
}
