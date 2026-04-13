export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID!;

function canUseGtag(): boolean {
  return (
    typeof window !== "undefined" &&
    typeof window.gtag === "function" &&
    !!GA_MEASUREMENT_ID
  );
}

// Log page views
export function pageview(url: string) {
  if (!canUseGtag()) return;
  window.gtag("config", GA_MEASUREMENT_ID, { page_path: url });
}

// Log custom events
export function event({
  action,
  category,
  label,
  value,
}: {
  action: string;
  category: string;
  label?: string;
  value?: number;
}) {
  if (!canUseGtag()) return;
  window.gtag("event", action, {
    event_category: category,
    event_label: label,
    value,
  });
}

