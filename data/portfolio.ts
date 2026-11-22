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
  {
    title: "Product engineering",
    description: "Translate user and business needs into focused, maintainable software.",
    focusAreas: ["Understand the problem and its users", "Shape a useful, achievable product scope", "Build software that can evolve with the product"],
  },
  {
    title: "Full-stack development",
    description: "Build cohesive web experiences across interfaces, services, and data.",
    focusAreas: ["Responsive, accessible user interfaces", "Application logic and service integration", "Data flows across the product experience"],
  },
  {
    title: "Technical direction",
    description: "Make clear architecture and delivery decisions that support a product’s next stage.",
    focusAreas: ["Architecture and implementation trade-offs", "Technical planning aligned with product goals", "Maintainability and delivery considerations"],
  },
  {
    title: "Product collaboration",
    description: "Work closely with founders and teams to shape scope, priorities, and useful outcomes.",
    focusAreas: ["Shared understanding of goals and constraints", "Clear communication through implementation", "Practical decisions as needs evolve"],
  },
];

export const services: Service[] = [
  {
    title: "Product discovery",
    description: "Clarify the problem, audience, and smallest useful product direction.",
    goodFit: "An early idea or a product decision that needs clearer problem and scope definition.",
    workIncludes: ["Understand the audience, need, and constraints", "Explore product and technical options", "Define a focused next step for the product"],
  },
  {
    title: "Web application development",
    description: "Design and build responsive applications with a maintainable technical foundation.",
    goodFit: "A new web product or a defined feature that needs thoughtful implementation.",
    workIncludes: ["Shape the interface around user needs", "Implement application behavior and integrations", "Consider accessibility, responsiveness, and maintainability"],
  },
  {
    title: "Product improvement",
    description: "Improve existing software through focused engineering and thoughtful iteration.",
    goodFit: "An existing product with a specific workflow, experience, or technical area to improve.",
    workIncludes: ["Understand the current product and constraints", "Prioritize a useful, manageable improvement", "Implement and review the change with the team"],
  },
];
