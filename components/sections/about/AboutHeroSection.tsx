import Image from "next/image";
import { HERO_FIRST_SLIDE_IMAGE } from "@/constants/heroSlides";

export function AboutHeroSection() {
  return (
    <section className="relative isolate min-h-[min(520px,90svh)] w-full overflow-hidden md:min-h-[min(640px,88svh)]">
      <div className="absolute inset-0 z-0">
        <Image
          src={HERO_FIRST_SLIDE_IMAGE}
          alt=""
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
      </div>
      <div
        className="absolute inset-0 z-[1] bg-[#0c1f33]/70"
        aria-hidden
      />

      <div className="relative z-[2] mx-auto grid min-h-[min(480px,88svh)] max-w-7xl items-center gap-10 px-6 pb-16 pt-28 md:min-h-[min(560px,85svh)] md:grid-cols-2 md:gap-12 md:px-10 md:pb-20 md:pt-32 lg:px-12">
        <div className="max-w-xl">
          <h1 className="text-3xl font-bold uppercase tracking-[0.12em] text-white md:text-5xl lg:text-6xl">
            ABOUT US
          </h1>
          <p className="mt-4 text-sm font-semibold uppercase tracking-[0.2em] text-white/90 md:text-base">
            WHO ARE WE
          </p>
          <p className="mt-6 text-base leading-relaxed text-white/95 md:text-lg">
            Primquisite Real Estate is setting a new standard for real estate in
            Nigeria where{" "}
            <span className="relative inline-block px-1">
              <span
                className="pointer-events-none absolute inset-[-2px_-6px] rounded-[999px] border border-[#C5A059] md:inset-[-3px_-10px]"
                aria-hidden
              />
              <span className="relative font-semibold text-[#E8D5A8]">
                PREMIUM DEVELOPMENT
              </span>
            </span>{" "}
            meets intelligent estate technology.
          </p>
        </div>

        <div className="relative mx-auto flex h-[280px] w-full max-w-[420px] items-center justify-center md:h-[340px] lg:h-[380px]">
          <div className="absolute right-0 top-0 z-[1] h-[200px] w-[200px] overflow-hidden rounded-full border-2 border-[#C5A059] shadow-lg md:h-[240px] md:w-[240px] lg:h-[260px] lg:w-[260px]">
            <Image
              src="/about/Ellipse1.svg"
              alt="Interior preview"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 200px, 260px"
            />
          </div>
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
