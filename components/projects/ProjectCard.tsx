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
      className="group block rounded-lg transition-transform duration-200 ease-out hover:-translate-y-0.5 motion-reduce:transition-none motion-reduce:hover:translate-y-0 focus-visible:ring-2 focus-visible:ring-[#D4A35A] focus-visible:ring-offset-2 focus-visible:outline-none"
    >
      <article>
        <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-neutral-200 shadow-sm transition-shadow duration-200 ease-out group-hover:shadow-xl">
          <Image
            src={imageSrc}
            alt={imageAlt ?? `${title} — ${location}`}
            fill
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03] motion-reduce:group-hover:scale-100"
            sizes="(max-width: 768px) 100vw, 50vw"
          />

          {/* Badges */}
          <div className="absolute left-3 top-3 flex flex-wrap gap-2 z-10">
            {badges.map((label) => (
              <span
                key={label}
                className="rounded bg-black/55 px-2 py-1 text-[10px] font-semibold uppercase tracking-wide text-white"
              >
                {label}
              </span>
            ))}
          </div>

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

          {/* Arrow button */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-black/60 text-white">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="7" y1="17" x2="17" y2="7" />
                <polyline points="7 7 17 7 17 17" />
              </svg>
            </div>
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