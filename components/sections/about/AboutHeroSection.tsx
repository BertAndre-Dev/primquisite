"use client";

import Image from "next/image";
import { HERO_FIRST_SLIDE_IMAGE } from "@/constants/heroSlides";

export function AboutHeroSection() {
  return (
    <section className="relative isolate min-h-[min(520px,90svh)] w-full overflow-hidden md:min-h-[min(640px,88svh)]">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={HERO_FIRST_SLIDE_IMAGE}
          alt="About Primquisite Real Estate — building background"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 z-[1] bg-[#0c1f33]/70" aria-hidden />

      {/* Content */}
      <div className="relative z-[2] mx-auto grid min-h-[min(480px,88svh)] max-w-7xl items-center gap-10 md:gap-2 px-6 pb-16 pt-28 md:min-h-[min(560px,85svh)] md:grid-cols-2 md:px-10 md:pb-20 md:pt-32 lg:px-12">
        {/* LEFT TEXT */}
        <div className="max-w-xl">
          <h1 className="text-3xl font-bold uppercase tracking-[0.12em] text-white md:text-5xl lg:text-6xl">
            ABOUT US
          </h1>

          <p className="mt-4 text-sm font-semibold uppercase tracking-[0.2em] text-white/90 md:text-base">
            WHO ARE WE
          </p>

          <p className="mt-6 text-base leading-relaxed text-white/95 md:text-lg">
            Primquisite Real Estate is setting a new standard for real estate in
            Nigeria where {/* PREMIUM DEVELOPMENT WITH SVG OVAL */}
            <span className="relative inline-block px-2">
              {/* SVG Oval */}
              <svg
                className="pointer-events-none absolute left-1/2 top-1/2 h-[140%] w-[120%] -translate-x-1/2 -translate-y-1/2"
                viewBox="0 0 300 100"
                fill="none"
              >
                <ellipse
                  cx="150"
                  cy="45"
                  rx="300"
                  ry="50"
                  stroke="#C5A059"
                  strokeWidth="4"
                />
              </svg>

              {/* Text */}
              <span className="relative font-semibold text-[#E8D5A8]">
                PREMIUM DEVELOPMENT
              </span>
            </span>{" "}
            meets intelligent estate technology.
          </p>
        </div>

        {/* RIGHT IMAGES */}
        <div className="relative mx-auto flex h-[280px] w-full max-w-[420px] items-center justify-center md:h-[340px] lg:h-[380px]">
          {/* Top Circle */}
          <div className="absolute right-0 top-0 z-[1] h-[200px] w-[200px] overflow-hidden rounded-full border-2 border-[#C5A059] shadow-lg md:h-[240px] md:w-[240px] lg:h-[260px] lg:w-[260px]">
            <Image
              src="/about/Ellipse1.svg"
              alt="Interior preview"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 200px, 260px"
            />
          </div>

          {/* Bottom Circle */}
          <div className="absolute bottom-0 left-0 z-[2] h-[220px] w-[220px] overflow-hidden rounded-full border-2 border-[#C5A059] shadow-lg md:h-[260px] md:w-[260px] lg:h-[280px] lg:w-[280px]">
            <Image
              src="/about/Ellipse.svg"
              alt="Building exterior"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 220px, 280px"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
