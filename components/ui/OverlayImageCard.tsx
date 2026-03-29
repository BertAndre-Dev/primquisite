import Image from "next/image";
import type { OverlayImageCardData } from "@/types";

export type OverlayImageCardProps = OverlayImageCardData & {
  className?: string;
};

/**
 * Portrait-style card: full-bleed background image, dark overlay, title inset.
 */
export function OverlayImageCard({
  backgroundImage,
  title,
  alt,
  className,
}: OverlayImageCardProps) {
  return (
    <div
      className={`group relative aspect-[3/4] w-full overflow-hidden rounded-lg bg-neutral-300 md:aspect-[4/5] ${className ?? ""}`}
    >
      <Image
        src={backgroundImage}
        alt={alt}
        fill
        className="object-cover transition duration-500 group-hover:scale-[1.03]"
        sizes="(max-width: 768px) 100vw, 33vw"
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/45 to-black/35"
        aria-hidden
      />
      <div className="absolute inset-0 flex items-center p-6 md:p-8">
        <h3 className="max-w-[95%] text-left text-lg font-bold leading-snug text-white md:text-xl lg:text-2xl">
          {title}
        </h3>
      </div>
    </div>
  );
}
