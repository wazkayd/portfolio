import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { OfferingCard } from "@/components/offerings/OfferingCard";
import { Reveal } from "@/components/home/Reveal";
import { Container, Section } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Text";
import { services } from "@/data/portfolio";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Services",
  description: "Practical product discovery, web application development, and product improvement support.",
};

export default function ServicesPage() {
  return <>
    <Section className={styles.hero} aria-labelledby="services-title">
      <Container>
        <nav className={styles.breadcrumb} aria-label="Breadcrumb"><Link href="/">Home</Link><span aria-hidden="true">/</span><span aria-current="page">Services</span></nav>
        <div className={styles.heroContent}>
          <div>
            <Eyebrow>Ways to work together</Eyebrow>
            <h1 id="services-title">Practical support for your product’s next step<span>.</span></h1>
            <p className={styles.lede}>Engage around the challenge you need to solve, from early direction to hands-on delivery and improvement.</p>
          </div>
          <p className={styles.principle}>The work is shaped around your product context, priorities, and constraints.</p>
        </div>
      </Container>
    </Section>

    <Section className={styles.serviceSection} aria-labelledby="service-list-title">
      <Container>
        <header className={styles.sectionHeader}>
          <div><Eyebrow>Services</Eyebrow><h2 id="service-list-title">Start with the problem to solve.</h2></div>
          <p>Each service is a starting point. The useful scope depends on where your product and team are today.</p>
        </header>
        <div className={styles.grid}>
          {services.map((service, index) => <Reveal key={service.title}>
            <OfferingCard
              index={index + 1}
              title={service.title}
              description={service.description}
              contextLabel="A good fit when"
              context={service.goodFit}
              detailsLabel="Work can include"
              details={service.workIncludes}
            />
          </Reveal>)}
        </div>
      </Container>
    </Section>

    <Section className={styles.nextStep} aria-labelledby="next-step-title">
      <Container className={styles.nextStepInner}>
        <div><Eyebrow>Need a particular skill set?</Eyebrow><h2 id="next-step-title">See the engineering capabilities behind the work.</h2></div>
        <div className={styles.nextLinks}>
          <Link className={styles.nextLink} href="/capabilities">Explore capabilities <ArrowRight size={16} aria-hidden="true" /></Link>
          <Link className={styles.nextLink} href="/#contact">Start a conversation <ArrowRight size={16} aria-hidden="true" /></Link>
        </div>
      </Container>
    </Section>
  </>;
}
