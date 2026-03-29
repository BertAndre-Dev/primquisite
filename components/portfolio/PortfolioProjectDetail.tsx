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
        <div className="relative order-2 overflow-hidden rounded-lg md:order-1">
          <div className="relative aspect-[4/5] w-full md:aspect-[3/4]">
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              className="object-cover"
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

        <div className="order-1 flex flex-col justify-center md:order-2">
          <h2 className="text-3xl font-bold uppercase leading-tight md:text-4xl lg:text-[2.75rem]">
            <span className={`${serifClassName} text-[#CBA668]`}>{nameSerif}</span>
            <span className="font-sans font-bold text-neutral-900">
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
            className="mt-10 inline-flex w-fit items-center gap-2 rounded-md bg-[#CBA668] px-8 py-3.5 text-sm font-semibold text-white transition hover:opacity-95"
          >
            Read Project Brochure
            <span aria-hidden>↗</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
