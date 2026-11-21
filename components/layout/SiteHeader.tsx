"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
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
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);
  useEffect(() => {
    if (open) firstLinkRef.current?.focus();
  }, [open]);
  useEffect(() => {
    if (!open) return;
    const dismissOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    document.addEventListener("keydown", dismissOnEscape);
    return () => document.removeEventListener("keydown", dismissOnEscape);
  }, [open]);
  const closeMenu = () => {
    setOpen(false);
    menuButtonRef.current?.focus();
  };
  return <header className={styles.header}>
    <Container className={styles.inner}>
      <Link className={styles.brand} href="/" aria-label="Portfolio home"><span className={styles.mark} aria-hidden="true">W</span><span>Wazka<span className={styles.brandDot}>.</span></span></Link>
      <nav id="primary-navigation" className={`${styles.nav} ${open ? styles.navOpen : ""}`} aria-label="Main navigation">
        {links.map((link, index) => {
          const active = link.href === "/" ? pathname === "/" : false;
          return <Link ref={index === 0 ? firstLinkRef : undefined} key={link.href} className={active ? styles.active : undefined} aria-current={active ? "page" : undefined} href={link.href} onClick={closeMenu}>{link.label}</Link>;
        })}
        <div className={styles.mobileTheme}><ThemeToggle /></div>
      </nav>
      <div className={styles.actions}><div className={styles.desktopTheme}><ThemeToggle /></div><div className={styles.mobileMenu}><IconButton ref={menuButtonRef} label={open ? "Close navigation menu" : "Open navigation menu"} aria-expanded={open} aria-controls="primary-navigation" onClick={() => setOpen(!open)}>{open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}</IconButton></div></div>
    </Container>
  </header>;
}
