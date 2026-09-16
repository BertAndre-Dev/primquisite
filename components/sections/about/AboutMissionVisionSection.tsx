"use client";

import {
  animate,
  motion,
  useMotionValue,
  useReducedMotion,
} from "framer-motion";
import Image from "next/image";
import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import {
  ABOUT_CAROUSEL_SLIDES,
  type AboutCarouselSlide,
} from "@/constants/about";

const AUTOPLAY_MS = 7000;
const DRAG_THRESHOLD_PX = 10;
/** Apple-style momentum projection (Designing Fluid Interfaces). */
const DECEL = 0.998;

function project(velocityPxPerSec: number, decelerationRate = DECEL) {
  return ((velocityPxPerSec / 1000) * decelerationRate) / (1 - decelerationRate);
}

function MissionVisionIcon() {
  return (
    <div className="relative h-9 w-9 shrink-0 md:h-10 md:w-10">
      <Image
        src="/icons/vission.svg"
        alt=""
        fill
        className="object-contain"
        loading="lazy"
        aria-hidden
      />
    </div>
  );
}

function SlideContent({ slide }: Readonly<{ slide: AboutCarouselSlide }>) {
  if (slide.layout === "mission-vision") {
    return (
      <div className="flex max-w-xl flex-col gap-10 md:gap-12">
        <div>
          <div className="mb-3 flex items-center gap-3 md:mb-4">
            <MissionVisionIcon />
            <h2 className="text-lg font-bold uppercase tracking-[0.14em] text-white md:text-xl">
              Mission
            </h2>
          </div>
          <p className="text-base leading-relaxed text-white/75 md:text-lg md:leading-8">
            {slide.mission.body}
          </p>
        </div>
        <div>
          <div className="mb-3 flex items-center gap-3 md:mb-4">
            <MissionVisionIcon />
            <h2 className="text-lg font-bold uppercase tracking-[0.14em] text-white md:text-xl">
              Vision
            </h2>
          </div>
          <p className="text-base leading-relaxed text-white/75 md:text-lg md:leading-8">
            {slide.vision.body}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-xl">
      <h2 className="text-lg font-bold uppercase tracking-[0.12em] text-white md:text-xl">
        {slide.title}
      </h2>
      <p className="mt-4 text-base leading-relaxed text-white/75 md:text-lg md:leading-8">
        {slide.intro}
      </p>
      <ul className="mt-6 space-y-3.5 text-white/75 md:text-lg md:leading-8">
        {slide.bullets.map((item) => (
          <li key={item} className="flex gap-3 leading-relaxed">
            <span
              className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#C5A059]"
              aria-hidden
            />
            <span>{item}</span>
          </li>
        ))}
      </ul>
      {slide.closing ? (
        <p className="mt-8 text-base leading-relaxed text-white/65 md:text-lg md:leading-8">
          {slide.closing}
        </p>
      ) : null}
    </div>
  );
}

export function AboutMissionVisionSection() {
  const total = ABOUT_CAROUSEL_SLIDES.length;
  const [index, setIndex] = useState(0);
  const [slideWidth, setSlideWidth] = useState(0);
  const [paused, setPaused] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);
  const autoplayRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const reduce = useReducedMotion();
  const x = useMotionValue(0);

  const measure = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    setSlideWidth(el.offsetWidth);
  }, []);

  useLayoutEffect(() => {
    measure();
    const el = trackRef.current;
    if (!el) return;
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, [measure]);

  const springToIndex = useCallback(
    (next: number, velocity = 0) => {
      const clamped = ((next % total) + total) % total;
      setIndex(clamped);
      if (!slideWidth) return;
      if (reduce) {
        x.set(-clamped * slideWidth);
        return;
      }
      animate(x, -clamped * slideWidth, {
        type: "spring",
        bounce: Math.abs(velocity) > 400 ? 0.12 : 0,
        duration: 0.4,
        velocity,
      });
    },
    [reduce, slideWidth, total, x],
  );

  useEffect(() => {
    if (!slideWidth) return;
    if (reduce) {
      x.set(-index * slideWidth);
      return;
    }
    animate(x, -index * slideWidth, {
      type: "spring",
      bounce: 0,
      duration: 0.4,
    });
  }, [index, slideWidth, reduce, x]);

  const clearAutoplay = useCallback(() => {
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current);
      autoplayRef.current = null;
    }
  }, []);

  useEffect(() => {
    clearAutoplay();
    if (paused || reduce) return;
    autoplayRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % total);
    }, AUTOPLAY_MS);
    return clearAutoplay;
  }, [paused, reduce, total, clearAutoplay, index]);

  const go = useCallback(
    (delta: number) => {
      springToIndex(index + delta);
    },
    [index, springToIndex],
  );

  const onDragEnd = (
    _: unknown,
    info: { offset: { x: number }; velocity: { x: number } },
  ) => {
    if (!slideWidth) return;
    const current = x.get();
    const projected = current + project(info.velocity.x);
    let next = Math.round(-projected / slideWidth);

    // Prefer velocity sign when near a midpoint (Apple: decide reverse vs commit by velocity)
    if (
      Math.abs(info.offset.x) < DRAG_THRESHOLD_PX &&
      Math.abs(info.velocity.x) < 200
    ) {
      next = index;
    } else if (Math.abs(info.velocity.x) > 500) {
      next = info.velocity.x < 0 ? index + 1 : index - 1;
    }

    next = Math.max(0, Math.min(total - 1, next));
    springToIndex(next, info.velocity.x);
  };

  return (
    <section
      className="bg-[#141414]"
      aria-roledescription="carousel"
      aria-label="Mission, vision, and approach"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node)) {
          setPaused(false);
        }
      }}
    >
      <div ref={trackRef} className="relative overflow-hidden">
        <motion.div
          className="flex touch-pan-y"
          style={{ x }}
          drag={reduce || !slideWidth ? false : "x"}
          dragConstraints={
            slideWidth
              ? { left: -((total - 1) * slideWidth), right: 0 }
              : undefined
          }
          dragElastic={0.14}
          dragMomentum={false}
          onDragStart={() => setPaused(true)}
          onDragEnd={onDragEnd}
        >
          {ABOUT_CAROUSEL_SLIDES.map((slide, i) => (
            <div
              key={slide.id}
              className="grid w-full shrink-0 grid-cols-1 md:min-h-[520px] md:grid-cols-2"
              aria-hidden={i !== index}
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden md:aspect-auto md:min-h-full">
                <Image
                  src={slide.leftImage}
                  alt={slide.leftImageAlt}
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority={i === 0}
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:via-transparent md:to-[#141414]/90"
                  aria-hidden
                />
              </div>

              <div className="flex flex-col justify-center px-6 py-10 md:px-12 md:py-16 lg:px-16 lg:py-20">
                <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#C5A059] md:mb-6 md:text-xs">
                  {String(i + 1).padStart(2, "0")} — {slide.navLabel}
                </p>
                <SlideContent slide={slide} />
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 pb-10 pt-2 md:flex-row md:items-center md:justify-between md:px-12 md:pb-12 lg:px-16">
        {/* Segmented wayfinding — agency + familiarity */}
        <div
          className="flex flex-wrap gap-2"
          role="tablist"
          aria-label="About topics"
        >
          {ABOUT_CAROUSEL_SLIDES.map((slide, i) => {
            const active = i === index;
            return (
              <button
                key={slide.id}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => springToIndex(i)}
                className={`rounded-full px-3.5 py-2 text-[11px] font-semibold uppercase tracking-[0.14em] transition-[transform,background-color,color] duration-100 ease-out active:scale-[0.97] motion-reduce:active:scale-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A059]/60 cursor-pointer ${
                  active
                    ? "bg-white/12 text-white backdrop-blur-md"
                    : "bg-transparent text-white/45 hover:text-white/75"
                }`}
              >
                {slide.navLabel}
              </button>
            );
          })}
        </div>

        <div className="flex items-center gap-3">
          <div className="mr-2 flex gap-1.5" aria-hidden>
            {ABOUT_CAROUSEL_SLIDES.map((slide, i) => (
              <span
                key={slide.id}
                className={`h-1 rounded-full transition-[width,background-color] duration-300 ease-out ${
                  i === index
                    ? "w-6 bg-[#C5A059]"
                    : "w-1.5 bg-white/25"
                }`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={() => go(-1)}
            className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-white/20 bg-white/5 text-white backdrop-blur-md transition-[transform,background-color] duration-100 ease-out hover:bg-white/10 active:scale-[0.96] motion-reduce:active:scale-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A059]/50"
            aria-label="Previous slide"
          >
            <Image
              src="/icons/arrow-left.svg"
              alt=""
              width={20}
              height={20}
              loading="lazy"
              aria-hidden
              className="brightness-0 invert opacity-90"
            />
          </button>
          <button
            type="button"
            onClick={() => go(1)}
            className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-[#C5A059]/50 bg-[#C5A059] text-white transition-[transform,opacity] duration-100 ease-out hover:opacity-95 active:scale-[0.96] motion-reduce:active:scale-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A059]/60"
            aria-label="Next slide"
          >
            <Image
              src="/icons/arrow-right.svg"
              alt=""
              width={20}
              height={20}
              loading="lazy"
              aria-hidden
            />
          </button>
        </div>
      </div>
    </section>
  );
}
