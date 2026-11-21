import type { ButtonHTMLAttributes, Ref } from "react";
import styles from "./IconButton.module.css";

type IconButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & { label: string; children: React.ReactNode; ref?: Ref<HTMLButtonElement> };
export function IconButton({ label, className, children, ref, ...props }: IconButtonProps) {
  return <button ref={ref} aria-label={label} className={[styles.button, className].filter(Boolean).join(" ")} {...props}>{children}</button>;
}
