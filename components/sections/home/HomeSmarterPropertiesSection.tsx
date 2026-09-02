import Image from "next/image";
import Link from "next/link";

export function HomeSmarterPropertiesSection() {
  return (
    <section className="relative overflow-hidden border-y border-[#D7B980]/30">
      <div className="relative min-h-[420px] w-full md:min-h-[500px] lg:min-h-[560px]">
        <Image
          src="/images/landing/berta-hub.png"
          alt=""
          fill
          className="object-cover object-right"
          sizes="100vw"
          priority={false}
          aria-hidden
        />

        <div
          className="absolute inset-0 bg-gradient-to-r from-[#0c0c0c]/95 via-[#0c0c0c]/75 to-[#0c0c0c]/20 md:via-[#0c0c0c]/55"
          aria-hidden
        />

        <div className="relative mx-auto flex h-full min-h-[420px] w-full max-w-7xl items-center px-6 py-16 md:min-h-[500px] md:px-8 md:py-20 lg:min-h-[560px]">
          <div className="max-w-lg">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#DDA74F]">
              PropTech
            </p>
            <h2 className="mt-4 text-2xl font-bold uppercase leading-[1.08] tracking-[-0.02em] text-[#DDA74F] md:text-4xl md:leading-[1.05]">
              Smarter properties start here
            </h2>
            <p className="mt-5 text-base leading-relaxed text-[#E8E2D9] md:text-lg md:leading-8">
              Berta Hub transforms how estates operate — energy intelligence,
              centralized billing, communication, utilities, and resident
              engagement in one platform.
            </p>
            <Link
              href="/services"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#DDA74F] transition-[color,transform] duration-100 ease-out hover:text-[#F0E0A0] active:scale-[0.97] motion-reduce:active:scale-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#DDA74F]/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0c0c0c] md:text-base"
            >
              Explore our services
              <span aria-hidden>{"\u2192"}</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
