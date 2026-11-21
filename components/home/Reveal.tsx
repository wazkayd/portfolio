"use client";
import { motion } from "framer-motion";
import { useFadeUpMotion } from "@/lib/motion/variants";
import styles from "./Reveal.module.css";

export function Reveal({ children, className }: { children: React.ReactNode; className?: string }) {
  const motionProps = useFadeUpMotion();
  return <motion.div className={[styles.reveal, className].filter(Boolean).join(" ")} {...motionProps}>{children}</motion.div>;
}
