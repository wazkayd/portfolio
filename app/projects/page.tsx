import Link from "next/link";
import { ArrowRight, Compass } from "lucide-react";
import { ProjectsCatalogue } from "@/components/projects/ProjectsCatalogue";
import { Container, Section } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Text";
import { projectCategories, projects } from "@/data/portfolio";
import { createPageMetadata } from "@/lib/seo";
import styles from "./page.module.css";

export const metadata = createPageMetadata("Projects", "Explore software projects by product type, including SaaS, enterprise applications, dashboards, e-commerce, and web platforms.", "/projects");

export default function ProjectsPage() {
  return <>
    <Section className={styles.hero} aria-labelledby="projects-title">
      <Container>
        <nav className={styles.breadcrumb} aria-label="Breadcrumb"><Link href="/">Home</Link><span aria-hidden="true">/</span><span aria-current="page">Projects</span></nav>
        <div className={styles.heroContent}>
          <div className={styles.intro}>
            <Eyebrow>Selected work</Eyebrow>
            <h1 id="projects-title">Projects shaped around real needs<span>.</span></h1>
            <p className={styles.lede}>A catalogue of digital products and the engineering behind them. Browse by product type to find work that fits your team, challenge, or idea.</p>
            <Link className={styles.approachLink} href="/capabilities">Explore how I contribute <ArrowRight size={16} aria-hidden="true" /></Link>
          </div>
          <aside className={styles.principle}>
            <span className={styles.principleIcon}><Compass aria-hidden="true" /></span>
            <p className={styles.principleTitle}>Useful software starts with context.</p>
            <p>Project details are published only when scope, contribution, and status can be described accurately.</p>
          </aside>
        </div>
      </Container>
    </Section>

    <Section className={styles.catalogue} aria-labelledby="catalogue-heading">
      <Container>
        <header className={styles.catalogueHeader}>
          <div><Eyebrow>Project catalogue</Eyebrow><h2 id="catalogue-heading">Explore the work</h2></div>
          <p>Browse {projectCategories.length} product types. Project scope, role, and outcomes are shown where details have been confirmed.</p>
        </header>
        <ProjectsCatalogue projects={projects} categories={projectCategories} />
      </Container>
    </Section>

    <Section className={styles.nextStep} aria-labelledby="next-step-title">
      <Container className={styles.nextStepInner}>
        <div><Eyebrow>Looking for a particular capability?</Eyebrow><h2 id="next-step-title">See how the work gets done.</h2></div>
        <Link className={styles.approachLink} href="/capabilities">View engineering capabilities <ArrowRight size={16} aria-hidden="true" /></Link>
      </Container>
    </Section>
  </>;
}
