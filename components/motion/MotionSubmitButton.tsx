"use client";

import type { ReactNode } from "react";
import { Button } from "@/components/ui/Button";

type MotionSubmitButtonProps = {
  pending?: boolean;
  children: ReactNode;
};

export function MotionSubmitButton({ pending = false, children }: MotionSubmitButtonProps) {
  return <Button type="submit">{pending ? "Sending..." : children}</Button>;
}
