"use client";

import Image from "next/image";
import { useCallback, useState } from "react";
import { HERO_FIRST_SLIDE_IMAGE } from "@/constants/heroSlides";
import { MISSION_VISION_SLIDES } from "@/constants/about";

export function AboutMissionVisionSection() {
  const [index, setIndex] = useState(0);
  const total = MISSION_VISION_SLIDES.length;
  const slide =
    MISSION_VISION_SLIDES.at(index) ?? MISSION_VISION_SLIDES[0];

  const prev = useCallback(() => {
    setIndex((i) => (i - 1 + total) % total);
  }, [total]);

  const next = useCallback(() => {
    setIndex((i) => (i + 1) % total);
  }, [total]);

  if (!slide) {
    return null;
  }

  return (
    <section className="bg-[#1A1714] grid min-h-[420px] w-full md:grid-cols-2">
      <div className="relative min-h-[320px] w-full md:min-h-[480px]">
        <Image
          src="/about/community.svg"
          alt="Community"
          fill
          className="object-contain"
          sizes="(max-width: 768px) 100vw, 60vw"
        />
      </div>

     <div className="flex flex-col justify-center px-8 py-12 md:px-12 md:py-16 lg:px-16 lg:py-20">
  <div className="space-y-10">
    {MISSION_VISION_SLIDES.map((slide) => (
      <div key={slide.id} className="min-h-[160px]">
        <div className="mb-5 flex items-center gap-3">
        
            <div className="relative h-10 w-10 shrink-0 md:h-12 md:w-12">
              <Image
                src="/icons/vission.svg"
                alt="Mission"
                fill
                className="object-contain"
              />
            </div>
          
          <h2 className="text-xl font-bold uppercase tracking-[0.15em] text-white md:text-2xl">
            {slide.title}
          </h2>
        </div>

        <p className="max-w-xl text-base leading-relaxed text-[#CCCCCC] md:text-lg">
          {slide.body}
        </p>
      </div>
    ))}
  </div>
</div>
    </section>
  );
}
