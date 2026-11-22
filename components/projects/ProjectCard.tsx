import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import type { Project, ProjectCategoryOption } from "@/types/portfolio";
import styles from "./ProjectCard.module.css";

const statusLabels = { completed: "Completed", "in-progress": "In progress", planned: "Planned" } as const;

export function ProjectCard({ project, categories }: { project: Project; categories: readonly ProjectCategoryOption[] }) {
  const category = categories.find(item => item.id === project.category);

  return <article className={styles.card} aria-labelledby={`project-${project.slug}`}>
    <div className={styles.meta}>
      <Badge tone="accent">{category?.label ?? "Digital product"}</Badge>
      <span className={styles.status}>{statusLabels[project.status]}</span>
    </div>
    <h3 id={`project-${project.slug}`}>{project.name}</h3>
    <p className={styles.summary}>{project.summary}</p>
    {(project.problem || project.contribution || project.outcome || project.role) && <dl className={styles.details}>
      {project.problem && <div><dt>Challenge</dt><dd>{project.problem}</dd></div>}
      {project.role && <div><dt>Role</dt><dd>{project.role}</dd></div>}
      {project.contribution && <div><dt>Contribution</dt><dd>{project.contribution}</dd></div>}
      {project.outcome && <div><dt>Outcome</dt><dd>{project.outcome}</dd></div>}
    </dl>}
    <div className={styles.cardFooter}>
      {project.technologies.length > 0 && <ul className={styles.technologies} aria-label={`${project.name} technologies`}>
        {project.technologies.map(technology => <li key={technology}>{technology}</li>)}
      </ul>}
      {project.href && <Link className={styles.projectLink} href={project.href}>View project <ArrowUpRight size={16} aria-hidden="true" /></Link>}
    </div>
  </article>;
}
