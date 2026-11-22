import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Compass, Layers3, UsersRound } from "lucide-react";
import { Container, Section } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Text";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "About",
  description: "A product-minded approach to software engineering, collaboration, and building useful digital products.",
};

const principles = [
  { title: "Start with the need", description: "Understand the people, problem, and constraints before settling on a product or technical direction.", icon: Compass },
  { title: "Build across the product", description: "Connect interface, application behavior, and service integration into a coherent software experience.", icon: Layers3 },
  { title: "Work in shared context", description: "Keep decisions understandable and collaborate with the people shaping product priorities.", icon: UsersRound },
];

export default function AboutPage() {
  return <>
    <Section className={styles.hero} aria-labelledby="about-title">
      <Container>
        <nav className={styles.breadcrumb} aria-label="Breadcrumb"><Link href="/">Home</Link><span aria-hidden="true">/</span><span aria-current="page">About</span></nav>
        <div className={styles.heroContent}>
          <div>
            <Eyebrow>About</Eyebrow>
            <h1 id="about-title">Software engineering grounded in real product needs<span>.</span></h1>
            <p className={styles.lede}>I’m an independent software engineer who works with teams to turn real needs into thoughtful, dependable software. I build digital products that solve real business problems.</p>
          </div>
          <p className={styles.principle}>Good engineering connects what a product needs to do with the people and businesses it serves.</p>
        </div>
      </Container>
    </Section>

    <Section className={styles.approach} aria-labelledby="approach-title">
      <Container>
        <header className={styles.sectionHeader}>
          <div><Eyebrow>How I approach the work</Eyebrow><h2 id="approach-title">Keep the problem, product, and implementation connected.</h2></div>
          <p>Product decisions and technical decisions work best when they reflect the same context.</p>
        </header>
        <div className={styles.principleGrid}>
          {principles.map(({ title, description, icon: Icon }, index) => <article className={styles.principleCard} key={title}>
            <span className={styles.index}>0{index + 1}</span>
            <Icon aria-hidden="true" />
            <h3>{title}</h3>
            <p>{description}</p>
          </article>)}
        </div>
      </Container>
    </Section>

    <Section className={styles.collaboration} aria-labelledby="collaboration-title">
      <Container className={styles.collaborationGrid}>
        <div>
          <Eyebrow>Product-minded engineering</Eyebrow>
          <h2 id="collaboration-title">A practical partner from early decisions through delivery.</h2>
        </div>
        <div className={styles.collaborationCopy}>
          <p>I work with founders, businesses, product teams, and technical collaborators to clarify priorities and build useful software. The right scope depends on the audience, product goals, and constraints in front of us.</p>
          <p>My areas of focus include product engineering, full-stack web development, technical direction, and close product collaboration. I aim to make the work clear, maintainable, and responsive to what the product needs next.</p>
          <Link className={styles.textLink} href="/capabilities">Explore engineering capabilities <ArrowRight size={16} aria-hidden="true" /></Link>
        </div>
      </Container>
    </Section>

    <Section className={styles.nextStep} aria-labelledby="next-step-title">
      <Container className={styles.nextStepInner}>
        <div><Eyebrow>Continue exploring</Eyebrow><h2 id="next-step-title">See the work and ways to collaborate.</h2></div>
        <div className={styles.links}><Link href="/projects">Projects <ArrowRight size={16} aria-hidden="true" /></Link><Link href="/services">Services <ArrowRight size={16} aria-hidden="true" /></Link><Link href="/contact">Contact <ArrowRight size={16} aria-hidden="true" /></Link></div>
      </Container>
    </Section>
  </>;
}
