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
      className={`group relative h-[420px] flex-1 overflow-hidden rounded-lg transition-all duration-500 ease-in-out hover:flex-[2] ${className ?? ""}`}
    >
      {/* Background */}
      <Image
        src={backgroundImage}
        alt={alt}
        fill
        className="object-cover transition duration-700 ease-in-out group-hover:scale-[1.06]"
      />

      {/* Overlay — darkens on hover */}
      <div className="absolute inset-0 bg-black/40 transition duration-500 group-hover:bg-black/55" />

      {/* Title — slides up on hover */}
      <div className="absolute inset-0 flex items-end justify-center p-6 pb-28 transition-all duration-500 group-hover:pb-36">
        <h3 className="text-center text-lg font-bold text-white md:text-xl lg:text-2xl">
          {title}
        </h3>
      </div>

      {/* Description — slides up from bottom on hover */}
      {description && (
        <div className="absolute bottom-0 left-0 right-0 translate-y-full opacity-0 transition-all duration-500 ease-in-out group-hover:translate-y-0 group-hover:opacity-100">
          <div className="bg-[#231F20] p-6">
            <p className="text-sm text-white md:text-base">{description}</p>
          </div>
          <div className="h-[6px] w-full bg-[linear-gradient(180deg,#D0AA63_0%,#F0E0A0_45%,#D0AA63_100%)]" />
        </div>
      )}
    </div>
  );
}
