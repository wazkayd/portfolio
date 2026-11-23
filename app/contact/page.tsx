import Link from "next/link";
import { ArrowRight, Github, MessageCircle } from "lucide-react";
import { LinkButton } from "@/components/ui/Button";
import { Container, Section } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Text";
import { publicContact } from "@/data/portfolio";
import { createPageMetadata } from "@/lib/seo";
import styles from "./page.module.css";

export const metadata = createPageMetadata("Contact", "Start a conversation about a product challenge, engineering opportunity, or collaboration.", "/contact");

export default function ContactPage() {
  return <>
    <Section className={styles.hero} aria-labelledby="contact-title">
      <Container>
        <nav className={styles.breadcrumb} aria-label="Breadcrumb"><Link href="/">Home</Link><span aria-hidden="true">/</span><span aria-current="page">Contact</span></nav>
        <div className={styles.heroContent}>
          <div>
            <Eyebrow>Contact</Eyebrow>
            <h1 id="contact-title">Let’s talk about what you’re building<span>.</span></h1>
            <p className={styles.lede}>Whether you’re shaping an idea, improving a product, or exploring an engineering opportunity, start with the problem and the people it needs to serve.</p>
          </div>
          <aside className={styles.invitation}><MessageCircle aria-hidden="true" /><p>A useful first conversation can begin with what you’re working on, what feels difficult, and what you hope to make possible.</p></aside>
        </div>
      </Container>
    </Section>

    <Section className={styles.contactSection} aria-labelledby="contact-path-title">
      <Container className={styles.contactLayout}>
        <div className={styles.contactIntro}>
          <Eyebrow>Start a conversation</Eyebrow>
          <h2 id="contact-path-title">Connect through a public profile.</h2>
          <p>GitHub is the public contact destination already linked from this portfolio.</p>
          <LinkButton href={publicContact.github} target="_blank" rel="noreferrer"><Github size={17} aria-hidden="true" /> Visit GitHub profile <ArrowRight size={16} aria-hidden="true" /></LinkButton>
        </div>
        <aside className={styles.note}>
          <h3>About direct contact</h3>
          <p>No public email address or message-delivery service is configured in this repository, so this page does not include a form that could imply a message was sent.</p>
          <p>A direct email link or working form can be added when a public address or receiving endpoint is confirmed.</p>
        </aside>
      </Container>
    </Section>

    <Section className={styles.nextStep} aria-labelledby="next-step-title">
      <Container className={styles.nextStepInner}>
        <div><Eyebrow>Explore before reaching out</Eyebrow><h2 id="next-step-title">Learn more about the work and ways to engage.</h2></div>
        <div className={styles.links}><Link href="/projects">Projects <ArrowRight size={16} aria-hidden="true" /></Link><Link href="/services">Services <ArrowRight size={16} aria-hidden="true" /></Link><Link href="/about">About <ArrowRight size={16} aria-hidden="true" /></Link></div>
      </Container>
    </Section>
  </>;
}
