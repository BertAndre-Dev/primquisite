import Image from "next/image";
import Link from "next/link";

export function HomePartnerSection() {
  return (
    <section className="bg-[#231F20] text-[#EDE6DA] mt-24">
      <div className="mx-auto w-full max-w-7xl px-6 py-16 md:px-8 md:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="order-2 lg:order-1">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#DDA74F]">
              Partnership
            </p>
            <h2 className="mt-4 max-w-xl text-2xl font-bold uppercase leading-[1.08] tracking-[-0.02em] text-white md:text-4xl md:leading-[1.05]">
              Partner with a developer that delivers
            </h2>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-[#D5CFC7] md:text-lg md:leading-8">
              Whether you&apos;re an investor, landowner, or homebuyer,
              Primquisite provides the structure, transparency, and execution
              to bring your real estate goals to life.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-md border border-[#DDA74F] bg-[#D0AA63] px-6 py-3 text-sm font-semibold text-white transition-[transform,opacity] duration-100 ease-out hover:opacity-95 active:scale-[0.97] motion-reduce:active:scale-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F0E0A0]/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#231F20] md:text-base"
            >
              Partner with us
              <span aria-hidden>{"\u2197"}</span>
            </Link>
          </div>

          <div className="relative order-1 lg:order-2">
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-[#2a2627] ring-1 ring-white/10">
              <Image
                src="/images/landing/partner.svg"
                alt="Primquisite Real Estate development partnership"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#231F20]/80 via-[#231F20]/20 to-transparent"
                aria-hidden
              />
            </div>

            <div className="absolute -bottom-6 -left-4 hidden w-[42%] overflow-hidden rounded-lg bg-[#231F20] p-1.5 ring-1 ring-[#DDA74F]/40 shadow-xl md:block lg:-left-8">
              <div className="relative aspect-[3/4] overflow-hidden rounded-md">
                <Image
                  src="/images/landing/engineer.svg"
                  alt="Engineer reviewing project documents"
                  fill
                  className="object-cover object-center"
                  sizes="200px"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
