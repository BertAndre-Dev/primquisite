"use client";

import { Children, type ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { EASE_OUT, staggerDelaySeconds } from "@/lib/motion";

type StaggerMountProps = {
  children: ReactNode;
};

/**
 * Staggers opacity for each direct child on mount (max 50ms step, 300ms cap).
 */
export function StaggerMount({ children }: StaggerMountProps) {
  const reduce = useReducedMotion();
  const items = Children.toArray(children);

  return (
    <>
      {items.map((child, i) => (
        <motion.div
          key={i}
          initial={reduce ? false : { opacity: 0 }}
          animate={reduce ? false : { opacity: 1 }}
          transition={{
            duration: 0.4,
            ease: EASE_OUT,
            delay: reduce ? 0 : staggerDelaySeconds(i),
          }}
        >
          {child}
        </motion.div>
      ))}
    </>
  );
}
