import { AnimatePresence, motion } from "framer-motion";
import type { ReactNode } from "react";

const easing = [0.25, 0.46, 0.45, 0.94] as const;

interface RevealProps {
  show: boolean;
  children: ReactNode;
  id?: string;
  duration?: number;
}

// Folds content open and closed instead of popping it in and out,
// so whatever is below glides rather than jumps
const Reveal = ({ show, children, id, duration = 0.35 }: RevealProps) => (
  <AnimatePresence initial={false}>
    {show && (
      <motion.div
        id={id}
        initial={{ height: 0, opacity: 0, overflow: "hidden" }}
        // Overflow back to visible once open, so focus rings and shadows aren't clipped
        animate={{ height: "auto", opacity: 1, transitionEnd: { overflow: "visible" } }}
        exit={{ height: 0, opacity: 0, overflow: "hidden" }}
        transition={{ duration, ease: easing }}
      >
        {children}
      </motion.div>
    )}
  </AnimatePresence>
);

export default Reveal;
