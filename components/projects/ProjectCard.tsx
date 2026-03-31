import Image from "next/image";
import Link from "next/link";

const DEFAULT_BADGES = ["Residential", "Luxury Homes"];

type ProjectCardProps = {
  title: string;
  location: string;
  imageSrc: string;
  imageAlt?: string;
  href?: string;
  badges?: string[];
};

export function ProjectCard({
  title,
  location,
  imageSrc,
  imageAlt,
  href = "/portfolio",
  badges = DEFAULT_BADGES,
}: ProjectCardProps) {
  return (
    <Link
      href={href}
      className="group block focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D4A35A]"
    >
      <article>
        <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-neutral-200 shadow-sm transition-shadow duration-300 group-hover:shadow-xl">
          <Image
            src={imageSrc}
            alt={imageAlt ?? `${title} — ${location}`}
            fill
            className="object-cover transition duration-300 group-hover:scale-[1.02]"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute left-3 top-3 flex flex-wrap gap-2">
            {badges.map((label) => (
              <span
                key={label}
                className="rounded bg-black/55 px-2 py-1 text-[10px] font-semibold uppercase tracking-wide text-white"
              >
                {label}
              </span>
            ))}
          </div>
        </div>
        <div className="mt-4 text-left">
          <h3 className="text-lg font-bold text-black transition group-hover:text-black/80">
            {title}
          </h3>
          <p className="mt-1 text-sm font-normal text-black/65">{location}</p>
        </div>
      </article>
    </Link>
  );
}
