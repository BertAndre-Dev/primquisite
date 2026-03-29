import { ResponsiveImage } from "@/components/media/ResponsiveImage";

type ImageCollageProps = {
  images: Array<{ src: string; alt: string }>;
};

export function ImageCollage({ images }: ImageCollageProps) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      {images.slice(0, 3).map((image) => (
        <div key={image.src} className="relative h-48 overflow-hidden rounded-md">
          <ResponsiveImage src={image.src} alt={image.alt} fill className="object-cover" />
        </div>
      ))}
    </div>
  );
}
