import Image from "next/image";
import Link from "next/link";

export function HomeValueSection() {
  return (
    <section className="bg-[#231F20] text-[#EDE6DA]">
      <div className="mx-auto w-full max-w-7xl px-6 md:px-8 xl:px-0 py-16 md:py-20">
        {/* Heading spans full width above the grid */}
        <h2 className="text-2xl font-regular leading-tight md:text-3xl md:leading-snug">
          Primquisite Real Estate Combines High-Quality Development With
          Intelligent Estate Systems To Deliver Long-Term Value For Residents,
          Investors, And Partners.
        </h2>

        {/* Two-column grid below */}
        <div className="grid w-full items-center gap-10 md:grid-cols-2">
          <div>
            <p className="text-base xl:text-[18px] leading-8 text-[#D5CFC7] md:leading-normal">
              We operate across the full real estate lifecycle, from land
              acquisition and development to digital estate management and
              long-term asset performance.
            </p>

            <ul className="mt-8 list-disc space-y-3 pl-6 text-[14px] leading-8 text-[#E6E0D8] md:text-base md:leading-[1.45]">
              <li>Premium Property Development</li>
              <li>Intelligent Estate Technology (PropTech)</li>
              <li>Integrated Estate Operations</li>
            </ul>

            <Link
              href="/about"
              className="mt-10 inline-flex items-center gap-2 rounded-md bg-[#D0AA63] border border-[#DDA74F] px-6 py-2 text-base font-semibold text-white hover:opacity-90"
            >
              Learn More {"\u2197"}
            </Link>
          </div>

          <div className="flex justify-center md:justify-end">
            <Image
              src="/logo.svg"
              alt="Primquisite mark"
              width={340}
              height={400}
              className="h-auto w-[220px] md:w-[340px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
