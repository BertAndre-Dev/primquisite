"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { Button } from "@/components/ui/Button";

const MotionButton = motion(Button);

type MotionSubmitButtonProps = {
  pending?: boolean;
  children: ReactNode;
};

export function MotionSubmitButton({
  pending = false,
  children,
}: MotionSubmitButtonProps) {
  const reduce = useReducedMotion();

  return (
    <MotionButton
      type="submit"
      disabled={pending}
      whileTap={reduce ? undefined : { scale: 0.97 }}
      transition={{ type: "tween", duration: 0.1, ease: [0, 0, 0.2, 1] }}
    >
      {pending ? "Sending..." : children}
    </MotionButton>
  );
}
