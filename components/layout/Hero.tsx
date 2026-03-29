"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { HERO_SLIDES } from "@/constants/heroSlides";

export function Hero() {
  const [index, setIndex] = useState(0);
  const total = HERO_SLIDES.length;

  const go = useCallback(
    (dir: -1 | 1) => {
      setIndex((i) => (i + dir + total) % total);
    },
    [total],
  );

  useEffect(() => {
    const id = window.setInterval(() => go(1), 8000);
    return () => window.clearInterval(id);
  }, [go]);

  const slide = HERO_SLIDES[index];

  return (
    <section className="relative min-h-[80svh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Image
          key={slide.image}
          src={slide.image}
          alt=""
          fill
          className="object-cover transition-opacity duration-700"
          priority={index === 0}
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[#0a1628]/60" />
      </div>

      <div className="relative z-10 flex min-h-[70svh] flex-col justify-end px-6 pb-24 pt-20 md:px-12 md:pb-28 lg:px-20 lg:pb-32">
        <div className="mx-auto w-full max-w-7xl">
          {slide.titleVariant === "beyond-brick" ? (
            <h1 className="max-w-4xl text-4xl font-black uppercase leading-[1.05] tracking-[0.06em] text-white md:text-6xl lg:text-7xl">
              BUILDING BEYOND BRICK
            </h1>
          ) : (
            <h1 className="max-w-4xl text-3xl font-bold uppercase leading-[1.05] tracking-[0.1em] text-white md:text-5xl lg:text-6xl">
              {slide.title}
            </h1>
          )}

          <p className="mt-5 max-w-xl font-normal text-base leading-relaxed text-white md:text-[20px]">
            {slide.subtitle}
          </p>

          <Link
            href={slide.ctaHref}
            className="mt-8 inline-flex rounded-md border-2 border-[#C8A168] px-8 py-3.5 text-[11px] font-bold uppercase tracking-[0.25em] text-white transition-colors duration-200 hover:bg-[#C8A168]/20"
          >
            {slide.cta}
          </Link>
        </div>
      </div>

      <div className="absolute bottom-1 right-6 z-20 flex items-center gap-4 md:bottom-10 md:right-12">
        <button
          type="button"
          onClick={() => go(-1)}
          className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border-2 border-white/70 text-white/80 transition hover:border-white hover:bg-white/10"
          aria-label="Previous slide"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            aria-hidden
          >
            <path
              d="M11 3L5 9l6 6"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <button
          type="button"
          onClick={() => go(1)}
          className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border-2 border-[#C8A168] text-[#C8A168] transition hover:bg-[#C8A168]/15"
          aria-label="Next slide"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            aria-hidden
          >
            <path
              d="M7 3l6 6-6 6"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      <div className="absolute bottom-10 left-1/2 z-20 flex -translate-x-1/2 gap-2">
        {HERO_SLIDES.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setIndex(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-1 rounded-full transition-all duration-300 ${
              i === index
                ? "w-6 bg-[#C8A168]"
                : "w-2 bg-white/40 hover:bg-white/60"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
