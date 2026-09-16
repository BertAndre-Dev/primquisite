"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { EASE_OUT } from "@/lib/motion";

type ScrollRevealProps = {
  children: ReactNode;
  className?: string;
  /** Delay after element enters view (seconds) */
  delay?: number;
  /** Vertical travel in px. Default 16. Use 0 for opacity-only. */
  distance?: number;
  /** Duration in seconds. Default 0.45. Keep UI under ~0.3. */
  duration?: number;
};

export function ScrollReveal({
  children,
  className,
  delay = 0,
  distance = 16,
  duration = 0.45,
}: ScrollRevealProps) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={
        reduce ? false : { opacity: 0, ...(distance > 0 ? { y: distance } : {}) }
      }
      whileInView={
        reduce ? undefined : { opacity: 1, ...(distance > 0 ? { y: 0 } : {}) }
      }
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration, ease: EASE_OUT, delay }}
    >
      {children}
    </motion.div>
  );
}
