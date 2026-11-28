import Link from "next/link";
import { ArrowRight, BriefcaseBusiness } from "lucide-react";
import { Container, Section } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Text";
import { experienceHighlights } from "@/data/portfolio";
import { createPageMetadata } from "@/lib/seo";
import styles from "./page.module.css";

export const metadata = createPageMetadata("Experience", "Professional experience and engineering contributions, shared only where the role, the period, and the contribution are verified.", "/experience");

export default function ExperiencePage() {
  return <>
    <Section className={styles.hero} aria-labelledby="experience-title">
      <Container>
        <nav className={styles.breadcrumb} aria-label="Breadcrumb"><Link href="/">Home</Link><span aria-hidden="true">/</span><span aria-current="page">Experience</span></nav>
        <div className={styles.heroContent}>
          <div>
            <Eyebrow>Professional background</Eyebrow>
            <h1 id="experience-title">Experience, described with context<span>.</span></h1>
            <p className={styles.lede}>A useful account of engineering work connects the role, the product, and the contribution. This page is structured to share that context accurately.</p>
          </div>
          <p className={styles.principle}>Employment history and independent project work are kept distinct.</p>
        </div>
      </Container>
    </Section>

    <Section className={styles.history} aria-labelledby="history-title">
      <Container>
        <header className={styles.sectionHeader}>
          <div><Eyebrow>Roles and contributions</Eyebrow><h2 id="history-title">Professional experience</h2></div>
          <p>Entries belong here when the role, organization, time period, and contribution can be confirmed.</p>
        </header>
        {experienceHighlights.length ? <ol className={styles.timeline}>
          {experienceHighlights.map((item, index) => <li className={styles.timelineItem} key={`${item.organization}-${item.role}-${index}`}>
            <span className={styles.marker} aria-hidden="true" />
            <article className={styles.entry}>
              <p className={styles.period}>{item.period || "Professional experience"}</p>
              <h3>{item.role}</h3>
              <p className={styles.organization}>{item.organization}</p>
              <p>{item.summary}</p>
            </article>
          </li>)}
        </ol> : <div className={styles.emptyState}>
          <BriefcaseBusiness aria-hidden="true" />
          <div>
            <h3>Verified role details are not published yet.</h3>
            <p>The portfolio does not currently include confirmed employers, role dates, or employment contributions. Independent project work will not be presented as employment history.</p>
          </div>
        </div>}
      </Container>
    </Section>

    <Section className={styles.nextStep} aria-labelledby="next-step-title">
      <Container className={styles.nextStepInner}>
        <div><Eyebrow>Explore the work</Eyebrow><h2 id="next-step-title">See the capabilities and product work presented elsewhere.</h2></div>
        <div className={styles.links}><Link href="/projects">Projects <ArrowRight size={16} aria-hidden="true" /></Link><Link href="/capabilities">Capabilities <ArrowRight size={16} aria-hidden="true" /></Link></div>
      </Container>
    </Section>
  </>;
}
