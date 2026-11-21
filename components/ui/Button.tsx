import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import styles from "./Button.module.css";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & { variant?: "primary" | "secondary" | "quiet"; children: ReactNode };
type LinkButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & { variant?: "primary" | "secondary" | "quiet"; href: string; children: ReactNode };
const classNames = (variant: NonNullable<ButtonProps["variant"]>, className?: string) => [styles.button, styles[variant], className].filter(Boolean).join(" ");
export function Button({ variant = "primary", className, ...props }: ButtonProps) {
  return <button className={classNames(variant, className)} {...props} />;
}
export function LinkButton({ variant = "primary", className, ...props }: LinkButtonProps) {
  return <a className={classNames(variant, className)} {...props} />;
}
