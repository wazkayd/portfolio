import styles from "./Badge.module.css";
export function Badge({ children, tone = "neutral" }: { children: React.ReactNode; tone?: "neutral" | "accent" }) {
  return <span className={[styles.badge, styles[tone]].join(" ")}>{children}</span>;
}
