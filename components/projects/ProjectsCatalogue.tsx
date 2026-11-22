"use client";

import { useMemo, useState } from "react";
import { BriefcaseBusiness } from "lucide-react";
import { Reveal } from "@/components/home/Reveal";
import { Button } from "@/components/ui/Button";
import { filterProjects } from "@/lib/projects";
import type { Project, ProjectCategory, ProjectCategoryOption } from "@/types/portfolio";
import { ProjectCard } from "./ProjectCard";
import styles from "./ProjectsCatalogue.module.css";

type ProjectsCatalogueProps = { projects: Project[]; categories: readonly ProjectCategoryOption[] };

export function ProjectsCatalogue({ projects, categories }: ProjectsCatalogueProps) {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory | "all">("all");
  const visibleProjects = useMemo(
    () => filterProjects(projects, activeCategory),
    [activeCategory, projects],
  );
  const activeCategoryLabel = categories.find(category => category.id === activeCategory)?.label;

  return <>
    <div className={styles.filters}>
      <p className={styles.filterLabel} id="project-filters-label">Filter by product type</p>
      <div className={styles.filterList} role="group" aria-labelledby="project-filters-label">
        <Button type="button" variant="secondary" className={`${styles.filterButton} ${activeCategory === "all" ? styles.selected : ""}`} aria-pressed={activeCategory === "all"} onClick={() => setActiveCategory("all")}>
          All projects <span className={styles.count}>{projects.length}</span>
        </Button>
        {categories.map(category => {
          const count = projects.filter(project => project.category === category.id).length;
          const selected = activeCategory === category.id;
          return <Button key={category.id} type="button" variant="secondary" className={`${styles.filterButton} ${selected ? styles.selected : ""}`} aria-pressed={selected} aria-label={`${category.label}, ${count} ${count === 1 ? "project" : "projects"}`} onClick={() => setActiveCategory(category.id)}>
            {category.label} <span className={styles.count} aria-hidden="true">{count}</span>
          </Button>;
        })}
      </div>
      <p className={styles.filterHint}>Choose a type to narrow the catalogue. Every project includes confirmed scope and contribution details.</p>
    </div>

    <p className={styles.results} aria-live="polite" aria-atomic="true">
      <span className={styles.resultCount}>{visibleProjects.length}</span> {visibleProjects.length === 1 ? "project" : "projects"}
      {activeCategoryLabel ? ` in ${activeCategoryLabel}` : " across all product types"}
    </p>

    {visibleProjects.length > 0 ? <div className={styles.projectGrid} aria-label="Projects">
      {visibleProjects.map(project => <Reveal key={project.slug}><ProjectCard project={project} categories={categories} /></Reveal>)}
    </div> : <div className={styles.emptyState} role="status">
      <span className={styles.emptyIcon}><BriefcaseBusiness aria-hidden="true" /></span>
      <div>
        <p className={styles.emptyEyebrow}>{activeCategoryLabel ? `No ${activeCategoryLabel} projects listed` : "The catalogue is getting ready"}</p>
        <h3>{activeCategoryLabel ? "No matches in this category yet." : "Project stories are being prepared."}</h3>
        <p>{activeCategoryLabel
          ? "Try another product type or browse all projects. Catalogue entries will be added when their scope, contribution, and status are confirmed."
          : "There are no verified project entries to publish yet. Work will appear here once project scope, contribution, technologies, and status are confirmed."}</p>
        {activeCategoryLabel && <Button type="button" variant="quiet" className={styles.resetButton} onClick={() => setActiveCategory("all")}>Browse all projects</Button>}
      </div>
    </div>}
  </>;
}
