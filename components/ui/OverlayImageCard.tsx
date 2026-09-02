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
      className={`group relative h-[360px] w-full shrink-0 overflow-hidden rounded-lg sm:h-[400px] md:h-[420px] md:flex-1 md:transition-[flex] md:duration-500 md:ease-in-out md:hover:flex-[2] ${className ?? ""}`}
    >
      <Image
        src={backgroundImage}
        alt={alt}
        fill
        className="object-cover transition duration-700 ease-in-out md:group-hover:scale-[1.06]"
        sizes="(max-width: 768px) 100vw, 33vw"
      />

      <div className="absolute inset-0 bg-black/40 transition duration-500 md:group-hover:bg-black/55" />

      {/* Mobile & tablet: content always visible (no hover) */}
      <div className="absolute inset-x-0 bottom-0 md:hidden">
        <div className="bg-[#231F20]/95 p-5">
          <h3 className="text-lg font-bold text-white">{title}</h3>
          {description ? (
            <p className="mt-2 text-sm leading-relaxed text-white/90">
              {description}
            </p>
          ) : null}
        </div>
        <div className="h-[6px] w-full bg-[linear-gradient(180deg,#D0AA63_0%,#F0E0A0_45%,#D0AA63_100%)]" />
      </div>

      {/* Desktop: title + hover-reveal description */}
      <div className="absolute inset-0 hidden items-end justify-center p-6 pb-28 transition-all duration-500 md:flex md:group-hover:pb-36">
        <h3 className="text-center text-xl font-bold text-white lg:text-2xl">
          {title}
        </h3>
      </div>

      {description ? (
        <div className="absolute bottom-0 left-0 right-0 hidden translate-y-full opacity-0 transition-all duration-500 ease-in-out md:block md:group-hover:translate-y-0 md:group-hover:opacity-100">
          <div className="bg-[#231F20] p-6">
            <p className="text-base text-white">{description}</p>
          </div>
          <div className="h-[6px] w-full bg-[linear-gradient(180deg,#D0AA63_0%,#F0E0A0_45%,#D0AA63_100%)]" />
        </div>
      ) : null}
    </div>
  );
}
