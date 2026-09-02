"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

export type GalleryImage = { src: string; alt: string };

const DEFAULT_IMAGES: GalleryImage[] = [
  { src: "/hero/nacre.svg", alt: "Interior living space" },
  { src: "/images/landing/why.svg", alt: "Residential community" },
  { src: "/images/landing/partner.svg", alt: "Development view" },
];

type ProjectGalleryCarouselProps = {
  images?: GalleryImage[];
  autoplayMs?: number;
};

const GAP = 16;

type GallerySlideProps = {
  image: GalleryImage;
  width: number | undefined;
  index: number;
};

function GallerySlide({ image, width, index }: GallerySlideProps) {
  return (
    <div
      className="group relative aspect-[4/4] shrink-0 overflow-hidden rounded-lg bg-neutral-200 transition-[box-shadow,transform] duration-300 ease-out hover:z-10 hover:-translate-y-1 hover:shadow-[0_20px_40px_-12px_rgba(0,0,0,0.35)] motion-reduce:transition-none motion-reduce:hover:translate-y-0"
      style={{
        width: width && width > 0 ? `${width}px` : "calc(33.333% - 11px)",
      }}
    >
      <Image
        src={image.src}
        alt={image.alt}
        fill
        className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.06] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
        sizes="(max-width: 768px) 100vw, 33vw"
        priority={index < 3}
      />
    </div>
  );
}

export function ProjectGalleryCarousel({
  images = DEFAULT_IMAGES,
  autoplayMs = 6000,
}: ProjectGalleryCarouselProps) {
  const slides = images.length > 0 ? images : DEFAULT_IMAGES;
  const total = slides.length;
  const [index, setIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [slideWidth, setSlideWidth] = useState(0);

  useEffect(() => {
    const measure = () => {
      if (trackRef.current) {
        const containerWidth = trackRef.current.offsetWidth;
        const cols = window.innerWidth >= 768 ? 3 : 1;
        setSlideWidth((containerWidth - GAP * (cols - 1)) / cols);
      }
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  const goTo = useCallback(
    (nextIndex: number) => {
      if (animating) return;
      setAnimating(true);
      timeoutRef.current = setTimeout(() => {
        setIndex(nextIndex);
        setAnimating(false);
      }, 700);
    },
    [animating],
  );

  const prev = useCallback(() => {
    goTo((index - 1 + total) % total);
  }, [goTo, index, total]);

  const next = useCallback(() => {
    goTo((index + 1) % total);
  }, [goTo, index, total]);

  useEffect(() => {
    if (!autoplayMs || total <= 1) return;
    const id = window.setInterval(() => next(), autoplayMs);
    return () => window.clearInterval(id);
  }, [autoplayMs, next, total]);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const offset = slideWidth > 0 ? index * (slideWidth + GAP) : 0;

  return (
    <section className="bg-[#FAF9F6] px-4 py-8 md:pl-8 md:px-0 xl:pl-20">
      <div ref={trackRef} className="overflow-hidden rounded-xl">
        <div
          className="flex"
          style={{
            gap: `${GAP}px`,
            transform: `translateX(-${offset}px)`,
            transition: "transform 700ms cubic-bezier(0.4, 0, 0.2, 1)",
          }}
        >
          {[...slides, ...slides, ...slides].map((img, i) => (
            <GallerySlide
              key={`${img.src}-${i}`}
              image={img}
              width={slideWidth}
              index={i}
            />
          ))}
        </div>
      </div>

      <div className="mt-6 flex items-center gap-3 md:mt-8">
        <button
          type="button"
          onClick={prev}
          disabled={animating}
          className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border-2 border-[#D9A85F] bg-white text-[#D9A85F] transition-all duration-200 ease-out hover:bg-[#D9A85F]/10 active:scale-[0.96] motion-reduce:active:scale-100 disabled:cursor-not-allowed disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D9A85F]/50"
          aria-label="Previous image"
        >
          <Image src="/icons/arrow-left.svg" alt="" width={24} height={24} aria-hidden />
        </button>
        <button
          type="button"
          onClick={next}
          disabled={animating}
          className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border-2 border-[#D9A85F] bg-[#D9A85F] text-white transition-all duration-200 ease-out hover:opacity-95 active:scale-[0.96] motion-reduce:active:scale-100 disabled:cursor-not-allowed disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D9A85F]/60"
          aria-label="Next image"
        >
          <Image src="/icons/arrow-right.svg" alt="" width={24} height={24} aria-hidden />
        </button>
      </div>
    </section>
  );
}
