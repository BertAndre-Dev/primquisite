"use client";

import Image from "next/image";

export function AboutWhoWeAreSection() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 md:grid-cols-2 md:px-10 lg:gap-16 lg:px-12">
        
        {/* Image */}
        <div className="relative w-full overflow-hidden rounded-2xl shadow-[0px_8px_20px_rgba(0,0,0,0.08)]">
          <div className="relative h-[420px] md:h-[480px] w-full">
            <Image
              src="/about/who.svg"
              alt="Primquisite residential development"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>
        </div>

        {/* Content */}
        <div className="max-w-[520px]">
          <h2 className="text-lg font-bold uppercase tracking-[0.14em] text-[#1A1714] md:text-xl">
            Who are we
          </h2>

          <p className="mt-6 text-base leading-relaxed text-neutral-700 md:text-lg">
            We were built to address a fundamental problem: the gap between what
            real estate promises and what it delivers.
          </p>

          <p className="mt-5 text-base leading-relaxed text-neutral-700 md:text-lg">
            Backed by the BertAndre Group, we combine development expertise,
            technology, and operational discipline to deliver projects that retain
            value long after completion.
          </p>
        </div>

      </div>
    </section>
  );
}