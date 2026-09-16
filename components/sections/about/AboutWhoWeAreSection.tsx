"use client";

import Image from "next/image";
import { ScrollReveal } from "@/components/motion/ScrollReveal";

export function AboutWhoWeAreSection() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 md:grid-cols-2 md:px-10 lg:gap-16 lg:px-12">
        <ScrollReveal distance={14} duration={0.4}>
          <div className="relative w-full overflow-hidden bg-neutral-100 ring-1 ring-black/5">
            <div className="relative aspect-[4/5] w-full md:aspect-[5/6] md:min-h-[480px]">
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
        </ScrollReveal>

        <ScrollReveal delay={0.06} distance={12} duration={0.35}>
          <div className="max-w-[520px]">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C5A059]">
              Who we are
            </p>
            <h2 className="mt-3 text-2xl font-bold leading-[1.08] tracking-[-0.02em] text-[#1A1714] md:text-3xl">
              Built to close the gap between promise and delivery
            </h2>

            <p className="mt-6 text-base leading-relaxed text-neutral-700 md:text-lg md:leading-8">
              We were built to address a fundamental problem: the gap between
              what real estate promises and what it delivers.
            </p>

            <p className="mt-5 text-base leading-relaxed text-neutral-700 md:text-lg md:leading-8">
              Backed by the BertAndre Group, we combine development expertise,
              technology, and operational discipline to deliver projects that
              retain value long after completion.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
