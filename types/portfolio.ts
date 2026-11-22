export type ProjectStatus = "completed" | "in-progress" | "planned";
export type ProjectCategory = "saas" | "enterprise" | "dashboard" | "e-commerce" | "web-platform";

export type Project = {
  slug: string;
  name: string;
  summary: string;
  category: ProjectCategory;
  status: ProjectStatus;
  role?: string;
  problem?: string;
  contribution?: string;
  outcome?: string;
  technologies: string[];
  href?: string;
  featured: boolean;
};

export type ProjectCategoryOption = { id: ProjectCategory; label: string; description: string };

export type ExperienceHighlight = {
  organization: string;
  role: string;
  period?: string;
  summary: string;
};

export type Service = { title: string; description: string };
export type Capability = { title: string; description: string };
