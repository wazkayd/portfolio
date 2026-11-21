import Link from "next/link";
import { ArrowRight, Blocks, Sparkles } from "lucide-react";
import { Container, Section } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { LinkButton } from "@/components/ui/Button";
import { Display, Eyebrow } from "@/components/ui/Text";
import styles from "./page.module.css";

export default function HomePage() {
  return <>
    <Section className={styles.hero} id="approach"><Container className={styles.heroGrid}>
      <div className={styles.copy}><Badge tone="accent">Engineering · Product · Impact</Badge><Eyebrow className={styles.eyebrow}>Independent software engineer</Eyebrow><Display className={styles.title}>I build digital products that solve real business problems<span>.</span></Display><p className={styles.intro}>I partner with ambitious teams to turn complex challenges into thoughtful, dependable software.</p><div className={styles.ctas}><LinkButton href="#capabilities">Explore my approach <ArrowRight size={17} aria-hidden="true" /></LinkButton><Link className={styles.textLink} href="#capabilities">How I contribute <ArrowRight size={16} aria-hidden="true" /></Link></div></div>
      <aside className={styles.note} aria-label="Approach"><div className={styles.noteIcon}><Blocks aria-hidden="true" /></div><p className={styles.noteLabel}>A considered approach</p><p>Clear thinking. Careful engineering. Products made to move businesses forward.</p><div className={styles.noteFooter}><Sparkles size={15} aria-hidden="true" /> Thoughtful by design</div></aside>
    </Container></Section>
    <Section className={styles.next} id="capabilities"><Container className={styles.nextInner}><div><Eyebrow>How I contribute</Eyebrow><h2>Good software starts with the right problem.</h2></div><p>From product direction to reliable delivery, I bring the technical judgment and product perspective needed to make meaningful progress.</p></Container></Section>
  </>;
}
