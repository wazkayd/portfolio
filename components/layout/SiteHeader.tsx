"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { IconButton } from "@/components/ui/IconButton";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import styles from "./SiteHeader.module.css";

const links = [
  { href: "/", label: "Home" },
  { href: "/#approach", label: "Approach" },
  { href: "/#capabilities", label: "Capabilities" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  return <header className={styles.header}>
    <Container className={styles.inner}>
      <Link className={styles.brand} href="/" aria-label="Portfolio home"><span className={styles.mark} aria-hidden="true">W</span><span>Wazka<span className={styles.brandDot}>.</span></span></Link>
      <nav id="primary-navigation" className={`${styles.nav} ${open ? styles.navOpen : ""}`} aria-label="Main navigation">
        {links.map(link => {
          const active = link.href === "/" ? pathname === "/" : pathname === "/" && typeof window !== "undefined" && window.location.hash === link.href.slice(1);
          return <Link key={link.href} className={active ? styles.active : undefined} aria-current={active ? "page" : undefined} href={link.href} onClick={() => setOpen(false)}>{link.label}</Link>;
        })}
        <div className={styles.mobileTheme}><ThemeToggle /></div>
      </nav>
      <div className={styles.actions}><ThemeToggle /><div className={styles.mobileMenu}><IconButton label={open ? "Close navigation menu" : "Open navigation menu"} aria-expanded={open} aria-controls="primary-navigation" onClick={() => setOpen(!open)}>{open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}</IconButton></div></div>
    </Container>
  </header>;
}
