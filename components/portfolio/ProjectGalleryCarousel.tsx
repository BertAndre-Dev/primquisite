// "use client";

// import Image from "next/image";
// import { useCallback, useEffect, useState } from "react";

// export type GalleryImage = { src: string; alt: string };

// const DEFAULT_IMAGES: GalleryImage[] = [
//   { src: "/hero/nacre.svg", alt: "Interior living space" },
//   { src: "/images/landing/why.svg", alt: "Residential community" },
//   { src: "/images/landing/partner.svg", alt: "Development view" },
// ];

// type ProjectGalleryCarouselProps = {
//   images?: GalleryImage[];
//   /** Auto-advance interval in ms; omit or 0 to disable */
//   autoplayMs?: number;
// };

// export function ProjectGalleryCarousel({
//   images = DEFAULT_IMAGES,
//   autoplayMs = 6000,
// }: ProjectGalleryCarouselProps) {
//   const slides = images.length > 0 ? images : DEFAULT_IMAGES;
//   const [index, setIndex] = useState(0);
//   const total = slides.length;

//   const prev = useCallback(() => {
//     setIndex((i) => (i - 1 + total) % total);
//   }, [total]);

//   const next = useCallback(() => {
//     setIndex((i) => (i + 1) % total);
//   }, [total]);

//   useEffect(() => {
//     if (!autoplayMs || total <= 1) return;
//     const id = window.setInterval(() => next(), autoplayMs);
//     return () => window.clearInterval(id);
//   }, [autoplayMs, next, total]);

//   return (
//     <section className="bg-[#FAF9F6] px-4 pb-16 pt-4 md:px-6 md:pb-24 lg:px-8">
//       <div className="mx-auto w-full max-w-7xl">
//         <div className="hidden gap-4 md:grid md:grid-cols-3">
//           {slides.map((img) => (
//             <div
//               key={img.src}
//               className="relative aspect-[4/3] overflow-hidden rounded-xl bg-neutral-200"
//             >
//               <Image
//                 src={img.src}
//                 alt={img.alt}
//                 fill
//                 className="object-cover"
//                 sizes="33vw"
//               />
//             </div>
//           ))}
//         </div>

//         <div className="relative md:hidden">
//           <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-neutral-200">
//             <Image
//               key={slides[index]?.src}
//               src={slides[index]!.src}
//               alt={slides[index]!.alt}
//               fill
//               className="object-cover"
//               sizes="100vw"
//             />
//           </div>
//         </div>

//         <div className="mt-6 flex justify-start gap-3 md:mt-8">
//           <button
//             type="button"
//             onClick={prev}
//             className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-[#D9A85F] bg-white text-[#D9A85F] transition hover:bg-[#D9A85F]/10"
//             aria-label="Previous image"
//           >
//             ←
//           </button>
//           <button
//             type="button"
//             onClick={next}
//             className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-[#D9A85F] bg-[#D9A85F] text-white transition hover:opacity-95"
//             aria-label="Next image"
//           >
//             →
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }
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

const GAP = 16; // px gap between slides

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

  // Measure container to calculate exact slide width accounting for gaps
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
    <section className="bg-[#FAF9F6] px-4 pb-16 pt-4 md:px-6 md:pb-24 lg:px-8">
      <div className="mx-auto w-full max-w-7xl">
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
              <div
                key={`${img.src}-${i}`}
                className="relative aspect-[4/3] flex-shrink-0 overflow-hidden rounded-lg bg-neutral-200"
                style={{
                  width: slideWidth > 0 ? `${slideWidth}px` : "calc(33.333% - 11px)",
                }}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Controls */}
        <div className="mt-6 flex items-center gap-3 md:mt-8">
          <button
            type="button"
            onClick={prev}
            disabled={animating}
            className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-[#D9A85F] bg-white text-[#D9A85F] transition hover:bg-[#D9A85F]/10 disabled:opacity-50"
            aria-label="Previous image"
          >
            ←
          </button>
          <button
            type="button"
            onClick={next}
            disabled={animating}
            className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-[#D9A85F] bg-[#D9A85F] text-white transition hover:opacity-95 disabled:opacity-50"
            aria-label="Next image"
          >
            →
          </button>

          <div className="ml-2 flex gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => goTo(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === index ? "w-6 bg-[#D9A85F]" : "w-1.5 bg-neutral-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}