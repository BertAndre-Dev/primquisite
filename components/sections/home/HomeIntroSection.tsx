import Image from "next/image";
import Link from "next/link";

const REASONS = [
  "Embedding transparency into every stage",
  "Managing estates beyond handover",
  "Using technology to improve operations",
] as const;

export function HomeIntroSection() {
  return (
    <section className="bg-[#FAF9F6]">
      <div className="mx-auto w-full max-w-7xl px-6 py-16 md:px-8 md:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="relative order-2 lg:order-1">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-neutral-200 ring-1 ring-black/5 shadow-[0_24px_48px_-24px_rgba(0,0,0,0.25)] lg:aspect-auto lg:min-h-[520px]">
              <Image
                src="/frame.svg"
                alt="Modern Primquisite Real Estate residential building exterior"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
                loading="lazy"
              />

              <div className="absolute left-0 top-0 bg-[#231F20] p-3 md:p-4">
                <Image
                  src="/logo.svg"
                  alt="Primquisite Real Estate logo"
                  width={100}
                  height={100}
                  className="h-20 w-20 object-contain md:h-[80px] md:w-[80px]"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C5A059]">
              Why choose us
            </p>
            <h2 className="mt-4  text-2xl font-bold uppercase leading-[1.08] tracking-[-0.02em] text-black md:text-4xl md:leading-[1.05]">
              Primquisite Real Estate
            </h2>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-neutral-700 md:text-lg md:leading-8">
              Nigeria&apos;s real estate market often falls short on delivery,
              transparency, and long-term value. We close that gap by building
              with clarity, care, and systems that last.
            </p>

            <ul className="mt-8 space-y-4">
              {REASONS.map((item) => (
                <li key={item} className="flex gap-3 text-base leading-relaxed text-neutral-800 md:text-lg">
                  <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#C5A059]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <Link
              href="/about"
              className="mt-10 inline-flex items-center gap-2 rounded-md border border-[#DDA74F] bg-[#D0AA63] px-6 py-3 text-sm font-semibold text-white transition-[transform,opacity] duration-100 ease-out hover:opacity-95 active:scale-[0.97] motion-reduce:active:scale-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#CBA668]/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#FAF9F6] md:text-base"
            >
              Learn more
              <span aria-hidden>{"\u2197"}</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
