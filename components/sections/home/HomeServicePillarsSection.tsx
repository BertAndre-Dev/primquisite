// import { SERVICE_PILLAR_CARDS } from "@/constants/servicePillars";
// import { OverlayImageCard } from "@/components/ui/OverlayImageCard";

// export function HomeServicePillarsSection() {
//   return (
//     <section className="bg-[#f7f7f7] px-4 py-14 md:px-6 md:py-16 lg:px-8">
//       <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-4 md:grid-cols-3 md:gap-6">
//         {SERVICE_PILLAR_CARDS.map((card) => (
//           <OverlayImageCard key={card.title} {...card} />
//         ))}
//       </div>
//     </section>
//   );
// }


"use client";

import { SERVICE_PILLAR_CARDS } from "@/constants/servicePillars";
import { OverlayImageCard } from "@/components/ui/OverlayImageCard";

export function HomeServicePillarsSection() {
  return (
    <section className="bg-[#f7f7f7] px-4 py-14 md:px-6 md:py-16 lg:px-8">
      <div className="group mx-auto flex flex-col md:flex-row w-full max-w-7xl gap-4 md:gap-6">
        {SERVICE_PILLAR_CARDS.map((card) => (
          <OverlayImageCard key={card.title} {...card} />
        ))}
      </div>
    </section>
  );
}