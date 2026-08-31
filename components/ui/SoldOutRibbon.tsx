/**
 * Diagonal "Sold Out" ribbon for the top-right corner of a project image.
 * Drop it inside a `relative overflow-hidden` container — the parent clips the
 * rotated band into a corner ribbon.
 */
export function SoldOutRibbon() {
  return (
    <span className="pointer-events-none absolute right-[-56px] top-[36px] z-20 w-[230px] rotate-45 bg-[#D4A35A] py-2 text-center text-sm font-extrabold uppercase tracking-[0.18em] text-white shadow-lg ring-1 ring-white/30 [text-shadow:0_1px_2px_rgba(0,0,0,0.35)]">
      Sold Out
    </span>
  );
}
