import type { ButtonHTMLAttributes } from "react";
import styles from "./IconButton.module.css";

type IconButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & { label: string; children: React.ReactNode };
export function IconButton({ label, className, children, ...props }: IconButtonProps) {
  return <button aria-label={label} className={[styles.button, className].filter(Boolean).join(" ")} {...props}>{children}</button>;
}
