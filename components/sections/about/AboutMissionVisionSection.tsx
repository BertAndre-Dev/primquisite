"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import {
  ABOUT_CAROUSEL_SLIDES,
  type AboutCarouselSlide,
} from "@/constants/about";

const AUTOPLAY_MS = 6000;

function MissionVisionIcon() {
  return (
    <div className="relative h-10 w-10 shrink-0 md:h-12 md:w-12">
      <Image src="/icons/vission.svg" alt="" fill className="object-contain" />
    </div>
  );
}

function SlideContent({ slide }: Readonly<{ slide: AboutCarouselSlide }>) {
  if (slide.layout === "mission-vision") {
    return (
      <div className="flex max-w-xl flex-col gap-10 md:gap-12">
        <div>
          <div className="mb-4 flex items-center gap-3 md:mb-5">
            <MissionVisionIcon />
            <h2 className="text-xl font-bold uppercase tracking-[0.15em] text-white md:text-2xl">
              MISSION
            </h2>
          </div>
          <p className="text-base leading-relaxed text-[#CCCCCC] md:text-lg">
            {slide.mission.body}
          </p>
        </div>
        <div>
          <div className="mb-4 flex items-center gap-3 md:mb-5">
            <MissionVisionIcon />
            <h2 className="text-xl font-bold uppercase tracking-[0.15em] text-white md:text-2xl">
              VISION
            </h2>
          </div>
          <p className="text-base leading-relaxed text-[#CCCCCC] md:text-lg">
            {slide.vision.body}
          </p>
        </div>
      </div>
    );
  }

  return (
    <>
      <h2 className="text-xl font-bold uppercase tracking-[0.12em] text-white md:text-2xl">
        {slide.title}
      </h2>
      <p className="mt-4 text-base leading-relaxed text-[#CCCCCC] md:text-lg">
        {slide.intro}
      </p>
      <ul className="mt-6 space-y-3 text-[#CCCCCC] md:text-lg">
        {slide.bullets.map((item) => (
          <li key={item} className="flex gap-3 leading-relaxed">
            <span
              className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-white"
              aria-hidden
            />
            <span>{item}</span>
          </li>
        ))}
      </ul>
      {slide.closing ? (
        <p className="mt-8 max-w-xl text-base leading-relaxed text-[#CCCCCC] md:text-lg">
          {slide.closing}
        </p>
      ) : null}
    </>
  );
}

export function AboutMissionVisionSection() {
  const [index, setIndex] = useState(0);
  const total = ABOUT_CAROUSEL_SLIDES.length;
  const autoplayRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const clearAutoplay = useCallback(() => {
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current);
      autoplayRef.current = null;
    }
  }, []);

  const startAutoplay = useCallback(() => {
    clearAutoplay();
    autoplayRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % total);
    }, AUTOPLAY_MS);
  }, [clearAutoplay, total]);

  useEffect(() => {
    startAutoplay();
    return () => clearAutoplay();
  }, [startAutoplay, clearAutoplay]);

  const go = useCallback(
    (delta: number) => {
      setIndex((i) => (i + delta + total) % total);
      startAutoplay();
    },
    [total, startAutoplay],
  );

  const prev = useCallback(() => go(-1), [go]);
  const next = useCallback(() => go(1), [go]);

  return (
    <section
      className="bg-[#1A1A1A]"
      aria-roledescription="carousel"
      aria-label="Mission, vision, and approach"
    >
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-out motion-reduce:transition-none"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {ABOUT_CAROUSEL_SLIDES.map((slide, slideIndex) => (
            <div
              key={slide.id}
              className="grid min-h-[420px] w-full shrink-0 grid-cols-1 md:min-h-[480px] md:grid-cols-2"
              aria-hidden={slideIndex !== index}
            >
              <div className="relative min-h-[280px] w-full md:min-h-full">
                <Image
                  src={slide.leftImage}
                  alt={slide.leftImageAlt}
                  fill
                  className="object-contain"
                  // sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              <div className="flex flex-col justify-center px-8 py-12 md:px-12 md:py-16 lg:px-16 lg:py-20">
                <div className="min-h-[200px]">
                  <SlideContent slide={slide} />
                </div>

                  <div className="flex gap-4 py-4">
        <button
          type="button"
          onClick={prev}
          className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border-2 border-[#D9A85F] bg-white text-[#D9A85F] transition-all duration-200 ease-out hover:bg-[#D9A85F]/10 active:scale-[0.96] motion-reduce:active:scale-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D9A85F]/50"
          aria-label="Previous slide"
        >
          <Image src="/icons/arrow-left.svg" alt="" width={24} height={24} />
        </button>
        <button
          type="button"
          onClick={next}
          className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border-2 border-[#D9A85F] bg-[#D9A85F] text-white transition-all duration-200 ease-out hover:opacity-95 active:scale-[0.96] motion-reduce:active:scale-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D9A85F]/60"
          aria-label="Next slide"
        >
          <Image src="/icons/arrow-right.svg" alt="" width={24} height={24} />
        </button>
      </div>
              </div>
            </div>
          ))}
          
        </div>
      </div>
    </section>
  );
}
