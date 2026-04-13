import Image from "next/image";

export function HomeIntroSection() {
  return (
    <section className="bg-[#f2f2f2] my-30">
      <div className="mx-auto grid w-full items-stretch lg:grid-cols-2">
        {/* Image — flush left, full height */}
        <div className="relative w-full overflow-hidden min-h-[550px]">
          <Image
            src="/frame.svg"
            alt="Modern residential building exterior"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
            loading="lazy"
          />

          {/* Logo overlay — top left */}
          <div className="bg-[#231F20] absolute top-0 left-0">
            <Image
              src="/logo.svg"
              alt="Primquisite Real Estate logo"
              width={136}
              height={136}
              className="h-34 w-34 object-contain mx-auto"
              loading="lazy"
            />
          </div>
        </div>

        {/* Text */}
        <div className="px-8 py-16 md:px-12 md:py-20">
          <p className="text-base font-semibold uppercase tracking-wide text-black">
            Here is why you should choose
          </p>
          <h2 className="mt-1 text-2xl font-bold uppercase leading-tight text-black md:text-3xl">
            Primquisite Real Estate
          </h2>
          <p className="mt-6 text-[14px] leading-8 text-black/80 md:text-base md:leading-[1.55]">
            Nigeria&apos;s real estate market often falls short on delivery,
            transparency, and long-term value. We close that gap by:
          </p>
          <ul className="mt-7 list-disc space-y-3 pl-6 text-[14px] leading-8 text-black/85 md:text-base md:leading-[1.45]">
            <li>Embedding transparency into every stage</li>
            <li>Managing estates beyond handover</li>
            <li>Using technology to improve operations</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
