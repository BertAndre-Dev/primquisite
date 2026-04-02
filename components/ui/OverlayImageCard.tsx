"use client";

import Image from "next/image";
import type { OverlayImageCardData } from "@/types";

export type OverlayImageCardProps = OverlayImageCardData & {
  className?: string;
};

export function OverlayImageCard({
  backgroundImage,
  title,
  description,
  alt,
  className,
}: OverlayImageCardProps) {
  return (
    <div
      className={`group relative aspect-[3/4] w-full overflow-hidden rounded-lg bg-neutral-300 md:aspect-[4/5] ${
        className ?? ""
      }`}
    >
      {/* Background image — zoom on hover */}
      <Image
        src={backgroundImage}
        alt={alt}
        fill
        className="object-cover transition duration-700 ease-in-out group-hover:scale-[1.06]"
        sizes="(max-width: 768px) 100vw, 33vw"
      />

      {/* Dark overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/45 to-black/35 transition-all duration-500 group-hover:from-black/90 group-hover:via-black/60 group-hover:to-black/50"
        aria-hidden
      />

      {/* Title */}
      <div className="absolute inset-0 flex flex-col justify-center p-6 md:p-8">
        <h3 className="max-w-[95%] text-left text-lg font-bold leading-snug text-white transition-transform duration-500 ease-in-out md:text-xl lg:text-2xl group-hover:-translate-y-2">
          {title}
        </h3>
      </div>

      {/* Description (shows on hover) */}
      {description && (
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 translate-y-6 opacity-0 transition-all duration-500 ease-in-out group-hover:translate-y-0 group-hover:opacity-100">
          {/* Content */}
          <div className="bg-[#231F20] p-6 md:p-8 flex justify-end">
            <p className="text-white text-sm md:text-base leading-relaxed">
              {description}
            </p>
          </div>
          {/* Gradient bottom border */}
          <div className="h-[6px] w-full bg-[linear-gradient(180deg,#D0AA63_0%,#F0E0A0_45%,#D0AA63_100%)]" />
        </div>
      )}
    </div>
  );
}
