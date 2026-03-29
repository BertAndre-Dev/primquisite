import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";

type PortfolioProjectHeroProps = {
  heading: string;
  subtitle: string;
  backgroundImage: string;
  breadcrumbs: { label: string; href: string }[];
};

export function PortfolioProjectHero({
  heading,
  subtitle,
  backgroundImage,
  breadcrumbs,
}: PortfolioProjectHeroProps) {
  return (
    <section className="relative isolate min-h-[72svh] w-full overflow-hidden md:min-h-[78svh]">
      <div className="absolute inset-0 z-0">
        <Image
          src={backgroundImage}
          alt=""
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
      </div>
      <div
        className="absolute inset-0 z-[1] bg-[#0a2438]/65"
        aria-hidden
      />

      <div className="relative z-[2] flex min-h-[72svh] flex-col justify-center px-6 pb-16 pt-28 md:min-h-[78svh] md:px-12 md:pb-20 md:pt-32 lg:px-16">
        <div className="mx-auto w-full max-w-7xl">
          <h1 className="max-w-4xl text-3xl font-bold uppercase leading-tight tracking-[0.12em] text-white md:text-5xl lg:text-6xl">
            {heading}
          </h1>
          <p className="mt-6 max-w-2xl text-base font-normal leading-relaxed text-white/95 md:text-lg">
            {subtitle}
          </p>
          <nav
            className="mt-10 flex flex-wrap items-center text-xs font-medium uppercase tracking-[0.2em] text-white/90 md:text-sm"
            aria-label="Breadcrumb"
          >
            {breadcrumbs.map((crumb, i) => (
              <Fragment key={crumb.href}>
                {i > 0 ? (
                  <span className="mx-2 text-white/45" aria-hidden>
                    -
                  </span>
                ) : null}
                {i < breadcrumbs.length - 1 ? (
                  <Link href={crumb.href} className="hover:text-white">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-[#C5A059]">{crumb.label}</span>
                )}
              </Fragment>
            ))}
          </nav>
        </div>
      </div>
    </section>
  );
}
