import type { Capability, ExperienceHighlight, Project, Service } from "@/types/portfolio";

// Add only projects whose names, scope, contribution, and status have been confirmed.
export const featuredProjects: Project[] = [];

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
