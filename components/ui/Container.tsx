import { createElement, type HTMLAttributes, type ReactNode } from "react";
import styles from "./Container.module.css";

export function Container({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={[styles.container, className].filter(Boolean).join(" ")} {...props} />;
}

export function Section({ children, className, ...props }: HTMLAttributes<HTMLElement> & { children: ReactNode }) {
  return createElement("section", { className: [styles.section, className].filter(Boolean).join(" "), ...props }, children);
}
