import { createElement, type HTMLAttributes, type ReactNode } from "react";
import styles from "./Text.module.css";

type TextProps = HTMLAttributes<HTMLElement> & { children: ReactNode };
export function Display({ children, className, ...props }: TextProps) { return createElement("h1", { className: [styles.display, className].filter(Boolean).join(" "), ...props }, children); }
export function Eyebrow({ children, className, ...props }: TextProps) { return createElement("p", { className: [styles.eyebrow, className].filter(Boolean).join(" "), ...props }, children); }
