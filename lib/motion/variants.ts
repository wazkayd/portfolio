import { useReducedMotion, type Variants } from "framer-motion";

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.42, ease: [0.2, 0.7, 0.2, 1] } },
};

export function useFadeUpMotion() {
  const shouldReduceMotion = useReducedMotion();
  return {
    variants: shouldReduceMotion ? undefined : fadeUp,
    initial: shouldReduceMotion ? false : "hidden",
    whileInView: shouldReduceMotion ? undefined : "visible",
    viewport: { once: true, amount: 0.2 },
  } as const;
}
