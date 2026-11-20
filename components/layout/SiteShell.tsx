import { SiteHeader } from "@/components/layout/SiteHeader";
import styles from "./SiteShell.module.css";

export function SiteShell({ children }: Readonly<{ children: React.ReactNode }>) {
  return <><SiteHeader /><main id="main-content" className={styles.main}>{children}</main></>;
}
