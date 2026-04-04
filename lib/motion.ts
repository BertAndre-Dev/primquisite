/** Shared easing — cubic-bezier approximating ease-out */
export const EASE_OUT = [0, 0, 0.2, 1] as const;

export const PAGE_ENTER = {
  duration: 0.4,
  ease: EASE_OUT,
} as const;

/** Stagger delay per item (seconds), capped for lists */
export function staggerDelaySeconds(
  index: number,
  stepMs = 50,
  capMs = 300,
): number {
  return Math.min(index * (stepMs / 1000), capMs / 1000);
}
