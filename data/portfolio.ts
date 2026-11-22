import type { Capability, ExperienceHighlight, Project, ProjectCategoryOption, Service } from "@/types/portfolio";

// Add only projects whose name, scope, contribution, category, and status have been confirmed.
export const projects: Project[] = [];
export const featuredProjects = projects.filter(project => project.featured);

export const projectCategories: readonly ProjectCategoryOption[] = [
  { id: "saas", label: "SaaS", description: "Subscription software and multi-tenant products." },
  { id: "enterprise", label: "Enterprise applications", description: "Internal systems and software for complex organizations." },
  { id: "dashboard", label: "Dashboards & analytics", description: "Tools that make operational data easier to understand." },
  { id: "e-commerce", label: "E-commerce", description: "Digital storefronts and commerce experiences." },
  { id: "web-platform", label: "Web apps & platforms", description: "Other web products, platforms, and marketplaces." },
];

// Experience and client history are intentionally empty until verified details are supplied.
export const experienceHighlights: ExperienceHighlight[] = [];

export const capabilities: Capability[] = [
  { title: "Product engineering", description: "Translate user and business needs into focused, maintainable software." },
  { title: "Full-stack development", description: "Build cohesive web experiences across interfaces, services, and data." },
  { title: "Technical direction", description: "Make clear architecture and delivery decisions that support a product’s next stage." },
  { title: "Product collaboration", description: "Work closely with founders and teams to shape scope, priorities, and useful outcomes." },
];

export const services: Service[] = [
  { title: "Product discovery", description: "Clarify the problem, audience, and smallest useful product direction." },
  { title: "Web application development", description: "Design and build responsive applications with a maintainable technical foundation." },
  { title: "Product improvement", description: "Improve existing software through focused engineering and thoughtful iteration." },
];
