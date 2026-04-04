import type { ReactNode } from "react";

type BadgeProps = {
  children: ReactNode;
};

export function Badge({ children }: BadgeProps) {
  return (
    <span className="inline-flex rounded-full bg-black px-3 py-1 text-xs font-medium text-white transition-colors duration-200 ease-out">
      {children}
    </span>
  );
}
