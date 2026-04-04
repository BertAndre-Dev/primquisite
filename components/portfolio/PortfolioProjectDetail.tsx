import Image from "next/image";
import Link from "next/link";

export const DEFAULT_PORTFOLIO_FEATURES = [
  "Well-designed maisonette layouts",
  "High-quality finishing and fittings",
  "Secure and serene environment",
  "Proximity to key roads and commercial hubs",
  "Modern kitchens and living spaces",
] as const;

export type PortfolioProjectDetailProps = {
  serifClassName: string;
  nameSerif: string;
  locationSans: string;
  intro: string;
  imageSrc: string;
  imageAlt: string;
  badges?: string[];
  features?: readonly string[];
};

const DEFAULT_BADGES = ["Residential", "Luxury Homes", "Active"];

export function PortfolioProjectDetail({
  serifClassName,
  nameSerif,
  locationSans,
  intro,
  imageSrc,
  imageAlt,
  badges = DEFAULT_BADGES,
  features = DEFAULT_PORTFOLIO_FEATURES,
}: PortfolioProjectDetailProps) {
  return (
    <section className="bg-white px-4 py-14 md:px-6 md:py-20 lg:px-8">
      <div className="mx-auto grid w-full max-w-7xl gap-10 md:grid-cols-2 md:items-start md:gap-12 lg:gap-16">
        {/* Image — order-1 on mobile (top), order-1 on desktop (left) */}
        <div className="group relative order-1 overflow-hidden rounded-lg">
          <div className="relative h-[500px] w-full">
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.02] motion-reduce:group-hover:scale-100"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
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

        {/* Text — order-2 on mobile (below), order-2 on desktop (right) */}
        <div className="order-2 flex flex-col justify-center">
          <h2 className="text-3xl font-bold uppercase leading-tight md:text-4xl lg:text-[2.75rem]">
            <span
              className={`${serifClassName} bg-gradient-to-r from-[#D0AA63] via-[#F0E0A0] to-[#D0AA63] bg-clip-text text-transparent`}
            >
              {nameSerif}
            </span>
            <span className="font-sans font-semibold text-[#4C4C4C]">
              {" "}
              {locationSans}
            </span>
          </h2>
          <p className="mt-5 text-base leading-relaxed text-neutral-700 md:text-lg">
            {intro}
          </p>
          <ul className="mt-8 space-y-3 text-base text-neutral-700 md:text-lg">
            {features.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-black" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <Link
            href="#"
            className="mt-10 inline-flex w-fit items-center gap-2 rounded-md bg-[#CBA668] px-8 py-3.5 text-sm font-semibold text-white transition-all duration-200 ease-out hover:opacity-95 active:scale-[0.97] motion-reduce:active:scale-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#CBA668]/70 focus-visible:ring-offset-2"
          >
            Read Project Brochure
            <Image
              src="/arrow_outward.svg"
              alt="Arrow outward"
              width={24}
              height={24}
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
