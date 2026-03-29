import type { ReactNode } from "react";
import { ResponsiveImage } from "@/components/media/ResponsiveImage";

type BackgroundImageProps = {
  src: string;
  alt: string;
  children: ReactNode;
};

export function BackgroundImage({ src, alt, children }: BackgroundImageProps) {
  return (
    <div className="relative overflow-hidden">
      <ResponsiveImage src={src} alt={alt} fill className="object-cover opacity-30" />
      <div className="relative">{children}</div>
    </div>
  );
}
