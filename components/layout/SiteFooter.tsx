import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import styles from "./SiteFooter.module.css";

const links = [
  { href: "/projects", label: "Projects" },
  { href: "/capabilities", label: "Capabilities" },
  { href: "/services", label: "Services" },
  { href: "/experience", label: "Experience" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function SiteFooter() {
  return <footer className={styles.footer}>
    <Container className={styles.inner}>
      <div className={styles.intro}>
        <Link className={styles.brand} href="/#top">Wazka<span aria-hidden="true">.</span></Link>
        <p>I build digital products that solve real business problems.</p>
        <Link className={styles.contactLink} href="/contact">Start a conversation <ArrowRight size={15} aria-hidden="true" /></Link>
      </div>
      <nav className={styles.navigation} aria-label="Footer navigation">
        {links.map(link => <Link key={link.href} href={link.href}>{link.label}</Link>)}
      </nav>
      <p className={styles.note}>Product-minded software engineering</p>
    </Container>
  </footer>;
}
