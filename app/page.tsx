import Link from "next/link";
import { ArrowDown, ArrowRight, BriefcaseBusiness, Code2, Compass, MessageCircle, MonitorSmartphone, Rocket, UsersRound } from "lucide-react";
import { Container, Section } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { LinkButton } from "@/components/ui/Button";
import { Display, Eyebrow } from "@/components/ui/Text";
import { Reveal } from "@/components/home/Reveal";
import { capabilities, experienceHighlights, featuredProjects, services } from "@/data/portfolio";
import type { ProjectStatus } from "@/types/portfolio";
import styles from "./page.module.css";

const audiences = [
  { title: "For teams hiring", text: "An engineer who connects technical decisions to product outcomes.", icon: UsersRound },
  { title: "For founders & businesses", text: "A practical partner to shape and build software around real needs.", icon: Rocket },
  { title: "For collaborators", text: "A thoughtful teammate for complex problems and ambitious ideas.", icon: MessageCircle },
];
const statusLabels: Record<ProjectStatus, string> = { completed: "Completed", "in-progress": "In progress", planned: "Planned" };

export default function HomePage() {
  const featured = featuredProjects.filter(project => project.featured);

  return <>
    <Section className={styles.hero} id="top"><Container className={styles.heroGrid}>
      <div className={styles.copy}><Badge tone="accent">Engineering · Product · Impact</Badge><Eyebrow className={styles.eyebrow}>Independent software engineer</Eyebrow><Display className={styles.title}>I build digital products that solve real business problems<span>.</span></Display><p className={styles.intro}>I partner with ambitious teams to turn complex challenges into thoughtful, dependable software.</p><div className={styles.ctas}><LinkButton href="#featured-work">Explore featured work <ArrowDown size={17} aria-hidden="true" /></LinkButton><Link className={styles.textLink} href="#contact">Let’s discuss your idea <ArrowRight size={16} aria-hidden="true" /></Link></div></div>
      <aside className={styles.note} aria-label="Engineering approach"><div className={styles.noteIcon}><Code2 aria-hidden="true" /></div><p className={styles.noteLabel}>Product-minded engineering</p><p>Clear thinking. Careful engineering. Software shaped around the people and businesses it serves.</p><div className={styles.noteFooter}><Compass size={15} aria-hidden="true" /> Thoughtful by design</div></aside>
    </Container></Section>

    <Section className={styles.audience} aria-labelledby="audience-title"><Container><div className={styles.sectionHead}><Eyebrow>Who I work with</Eyebrow><h2 id="audience-title">Good work starts with shared context.</h2></div><div className={styles.audienceGrid}>{audiences.map(({ title, text, icon: Icon }) => <Reveal key={title}><article className={styles.audienceCard}><Icon aria-hidden="true" /><h3>{title}</h3><p>{text}</p></article></Reveal>)}</div></Container></Section>

    <Section className={styles.projects} id="featured-work" aria-labelledby="projects-title"><Container><div className={styles.sectionHead}><Eyebrow>Selected work</Eyebrow><h2 id="projects-title">Featured projects</h2><p>Real products, meaningful problems, and the thinking behind the build.</p></div>{featured.length ? <div className={styles.projectGrid}>{featured.map(project => <Reveal key={project.slug}><article className={styles.projectCard}><div className={styles.projectTop}><Badge>{statusLabels[project.status]}</Badge>{project.role && <span>{project.role}</span>}</div><h3>{project.name}</h3><p>{project.summary}</p><ul className={styles.tags}>{project.technologies.map(tech => <li key={tech}>{tech}</li>)}</ul>{project.href && <Link className={styles.textLink} href={project.href}>View project <ArrowRight size={15} aria-hidden="true" /></Link>}</article></Reveal>)}</div> : <div className={styles.emptyProjects}><BriefcaseBusiness aria-hidden="true" /><div><h3>Project stories are being prepared</h3><p>Featured work will appear here as project details and contributions are confirmed.</p><ul className={styles.statusGuide} aria-label="Project status definitions"><li><Badge>Completed</Badge><span>Delivered work</span></li><li><Badge>In progress</Badge><span>Currently being built</span></li><li><Badge>Planned</Badge><span>Intended future work</span></li></ul></div></div>}</Container></Section>

    <Section className={styles.capabilities} id="capabilities" aria-labelledby="capabilities-title"><Container><div className={styles.sectionHead}><Eyebrow>How I contribute</Eyebrow><h2 id="capabilities-title">Engineering that moves products forward.</h2><p>From first product decisions through delivery and iteration.</p></div><div className={styles.capabilityGrid}>{capabilities.map((item, index) => <Reveal key={item.title}><article className={styles.capabilityCard}><span className={styles.index}>0{index + 1}</span><h3>{item.title}</h3><p>{item.description}</p></article></Reveal>)}</div></Container></Section>

    <Section className={styles.services} id="services" aria-labelledby="services-title"><Container className={styles.serviceLayout}><div className={styles.serviceIntro}><Eyebrow>Ways to work together</Eyebrow><h2 id="services-title">Practical support for the next step.</h2><p>Engage around the challenge you need to solve, from early direction to hands-on delivery.</p><Link className={styles.textLink} href="#contact">Start a conversation <ArrowRight size={15} aria-hidden="true" /></Link></div><div className={styles.serviceList}>{services.map((service, index) => <Reveal key={service.title}><article className={styles.serviceItem}><span>0{index + 1}</span><div><h3>{service.title}</h3><p>{service.description}</p></div><MonitorSmartphone aria-hidden="true" /></article></Reveal>)}</div></Container></Section>

    <Section className={styles.experience} id="experience" aria-labelledby="experience-title"><Container><div className={styles.sectionHead}><Eyebrow>Experience</Eyebrow><h2 id="experience-title">Built through meaningful work.</h2></div>{experienceHighlights.length ? <div className={styles.experienceList}>{experienceHighlights.map((item, index) => <article key={`${item.organization}-${item.role}-${index}`} className={styles.experienceItem}><div><h3>{item.role}</h3><p>{item.organization}{item.period ? ` · ${item.period}` : ""}</p></div><p>{item.summary}</p></article>)}</div> : <p className={styles.experienceNote}>Professional experience highlights will be added with verified role and contribution details.</p>}</Container></Section>

    <Section className={styles.contact} id="contact" aria-labelledby="contact-title"><Container className={styles.contactInner}><div><Eyebrow>Have a challenge in mind?</Eyebrow><h2 id="contact-title">Let’s build something useful.</h2><p>Share what you’re working on and what a good outcome looks like.</p></div><LinkButton href="https://github.com/wazkayd" target="_blank" rel="noreferrer">Connect on GitHub <ArrowRight size={17} aria-hidden="true" /></LinkButton></Container></Section>
  </>;
}
