import type { Variants } from "framer-motion";

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.42, ease: [0.2, 0.7, 0.2, 1] } },
};

export const reducedMotion = { initial: "hidden", whileInView: "visible", viewport: { once: true, amount: 0.2 } } as const;
