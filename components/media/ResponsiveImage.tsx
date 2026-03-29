import Image, { type ImageProps } from "next/image";

type ResponsiveImageProps = ImageProps & {
  alt: string;
};

export function ResponsiveImage(props: ResponsiveImageProps) {
  const { alt, ...rest } = props;
  return (
    <Image sizes="(max-width: 768px) 100vw, 50vw" alt={alt} {...rest} />
  );
}
