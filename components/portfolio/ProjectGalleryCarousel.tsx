"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

export type GalleryImage = { src: string; alt: string };

const DEFAULT_IMAGES: GalleryImage[] = [
  { src: "/hero/nacre.svg", alt: "Interior living space" },
  { src: "/images/landing/why.svg", alt: "Residential community" },
  { src: "/images/landing/partner.svg", alt: "Development view" },
];

type ProjectGalleryCarouselProps = {
  images?: GalleryImage[];
  /** Auto-advance interval in ms; omit or 0 to disable */
  autoplayMs?: number;
};

export function ProjectGalleryCarousel({
  images = DEFAULT_IMAGES,
  autoplayMs = 6000,
}: ProjectGalleryCarouselProps) {
  const slides = images.length > 0 ? images : DEFAULT_IMAGES;
  const [index, setIndex] = useState(0);
  const total = slides.length;

  const prev = useCallback(() => {
    setIndex((i) => (i - 1 + total) % total);
  }, [total]);

  const next = useCallback(() => {
    setIndex((i) => (i + 1) % total);
  }, [total]);

  useEffect(() => {
    if (!autoplayMs || total <= 1) return;
    const id = window.setInterval(() => next(), autoplayMs);
    return () => window.clearInterval(id);
  }, [autoplayMs, next, total]);

  return (
    <section className="bg-[#FAF9F6] px-4 pb-16 pt-4 md:px-6 md:pb-24 lg:px-8">
      <div className="mx-auto w-full max-w-7xl">
        <div className="hidden gap-4 md:grid md:grid-cols-3">
          {slides.map((img) => (
            <div
              key={img.src}
              className="relative aspect-[4/3] overflow-hidden rounded-xl bg-neutral-200"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover"
                sizes="33vw"
              />
            </div>
          ))}
        </div>

        <div className="relative md:hidden">
          <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-neutral-200">
            <Image
              key={slides[index]?.src}
              src={slides[index]!.src}
              alt={slides[index]!.alt}
              fill
              className="object-cover"
              sizes="100vw"
            />
          </div>
        </div>

        <div className="mt-6 flex justify-start gap-3 md:mt-8">
          <button
            type="button"
            onClick={prev}
            className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-[#D9A85F] bg-white text-[#D9A85F] transition hover:bg-[#D9A85F]/10"
            aria-label="Previous image"
          >
            ←
          </button>
          <button
            type="button"
            onClick={next}
            className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-[#D9A85F] bg-[#D9A85F] text-white transition hover:opacity-95"
            aria-label="Next image"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}
