import type { ReactNode } from "react";
import { ResponsiveImage } from "@/components/media/ResponsiveImage";

type ImageCardProps = {
  src: string;
  alt: string;
  children?: ReactNode;
};

export function ImageCard({ src, alt, children }: ImageCardProps) {
  return (
    <article className="relative overflow-hidden rounded-lg border border-black/10">
      <div className="relative h-56">
        <ResponsiveImage src={src} alt={alt} fill className="object-cover" />
      </div>
      {children ? <div className="p-4">{children}</div> : null}
    </article>
  );
}
