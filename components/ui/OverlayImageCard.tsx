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
      className={`group relative aspect-[3/4] w-full overflow-hidden rounded-lg bg-neutral-300 md:aspect-[4/5] ${className ?? ""}`}
    >
      {/* Background image — expands on hover */}
      <Image
        src={backgroundImage}
        alt={alt}
        fill
        className="object-cover transition duration-700 ease-in-out group-hover:scale-[1.06]"
        sizes="(max-width: 768px) 100vw, 33vw"
      />

      {/* Overlay — darkens more on hover */}
      <div
        className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/45 to-black/35 transition-all duration-500 group-hover:from-black/90 group-hover:via-black/60 group-hover:to-black/50"
        aria-hidden
      />

      {/* Content — title slides up, description fades in */}
      <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
        <h3 className="max-w-[95%] text-left text-lg font-bold leading-snug text-white transition-transform duration-500 ease-in-out md:text-xl lg:text-2xl group-hover:-translate-y-2">
          {title}
        </h3>

        {description && (
          <p className="mt-3 max-w-[95%] text-left text-sm leading-relaxed text-white/80 opacity-0 translate-y-4 transition-all duration-500 ease-in-out group-hover:opacity-100 group-hover:translate-y-0">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}