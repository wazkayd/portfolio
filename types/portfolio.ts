export type ProjectStatus = "completed" | "in-progress" | "planned";

export type Project = {
  slug: string;
  name: string;
  summary: string;
  status: ProjectStatus;
  role?: string;
  technologies: string[];
  href?: string;
  featured: boolean;
};

export type ExperienceHighlight = {
  organization: string;
  role: string;
  period?: string;
  summary: string;
};

export type Service = { title: string; description: string };
export type Capability = { title: string; description: string };
