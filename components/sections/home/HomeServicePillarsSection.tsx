"use client";

import { SERVICE_PILLAR_CARDS } from "@/constants/servicePillars";
import { OverlayImageCard } from "@/components/ui/OverlayImageCard";

export function HomeServicePillarsSection() {
  return (
    <section className="bg-[#f7f7f7] px-4 py-14 md:px-6 md:py-16 lg:px-8">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-4 md:flex-row md:gap-6">
        {SERVICE_PILLAR_CARDS.map((card) => (
          <OverlayImageCard key={card.title} {...card} />
        ))}
      </div>
    </section>
  );
}