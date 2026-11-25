import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { ThemeProvider } from "@/components/ui/ThemeProvider";
import styles from "./SiteShell.module.css";

export function SiteShell({ children }: Readonly<{ children: React.ReactNode }>) {
  return <ThemeProvider><SiteHeader /><main id="main-content" className={styles.main}>{children}</main><SiteFooter /></ThemeProvider>;
}
