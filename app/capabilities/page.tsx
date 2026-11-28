import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { OfferingCard } from "@/components/offerings/OfferingCard";
import { Container, Section } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Text";
import { capabilities } from "@/data/portfolio";
import { createPageMetadata } from "@/lib/seo";
import { Reveal } from "@/components/home/Reveal";
import styles from "./page.module.css";

export const metadata = createPageMetadata("Capabilities", "Explore product engineering, full-stack development, technical direction, and collaboration across meaningful product work.", "/capabilities");

export default function CapabilitiesPage() {
  return <>
    <Section className={styles.hero} aria-labelledby="capabilities-title">
      <Container>
        <nav className={styles.breadcrumb} aria-label="Breadcrumb"><Link href="/">Home</Link><span aria-hidden="true">/</span><span aria-current="page">Capabilities</span></nav>
        <div className={styles.heroContent}>
          <div>
            <Eyebrow>How I contribute</Eyebrow>
            <h1 id="capabilities-title">Engineering that moves products forward<span>.</span></h1>
            <p className={styles.lede}>A mix of product thinking, full-stack engineering, and close collaboration to help turn real needs into useful software.</p>
          </div>
          <p className={styles.principle}>The right technical choices depend on the people, product goals, and constraints involved.</p>
        </div>
      </Container>
    </Section>

    <Section className={styles.capabilitySection} aria-labelledby="capability-list-title">
      <Container>
        <header className={styles.sectionHeader}>
          <div><Eyebrow>Areas of focus</Eyebrow><h2 id="capability-list-title">Thoughtful work across the product lifecycle.</h2></div>
          <p>These capabilities can support a product from early problem framing through implementation and iteration.</p>
        </header>
        <div className={styles.grid}>
          {capabilities.map((capability, index) => <Reveal key={capability.title}>
            <OfferingCard
              index={index + 1}
              title={capability.title}
              description={capability.description}
              detailsLabel="Areas of focus"
              details={capability.focusAreas}
            />
          </Reveal>)}
        </div>
      </Container>
    </Section>

    <Section className={styles.nextStep} aria-labelledby="next-step-title">
      <Container className={styles.nextStepInner}>
        <div><Eyebrow>Ways to work together</Eyebrow><h2 id="next-step-title">Looking for a particular kind of support?</h2></div>
        <Link className={styles.nextLink} href="/services">Explore services <ArrowRight size={16} aria-hidden="true" /></Link>
      </Container>
    </Section>
  </>;
}
