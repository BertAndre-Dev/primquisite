"use client";

import Image from "next/image";
import { CORE_VALUES } from "@/constants/about";

export function AboutCoreValuesSection() {
  return (
    <section className="bg-[#F8F8F8] py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-12">
        {/* Title */}
        <h2 className="text-center text-3xl font-bold text-black md:text-4xl">
          Our Core Values
        </h2>

        {/* Grid */}
        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {CORE_VALUES.map((item) => (
            <article
              key={item.title}
              className="group flex flex-col overflow-hidden rounded-xl border border-neutral-200 bg-white transition-all duration-300 cursor-pointer shadow-[0px_4px_4px_0px_#000000] hover:-translate-y-1 hover:shadow-[0px_8px_12px_0px_rgba(0,0,0,0.2)]"
            >
              {/* Image */}
              <div className="relative h-[280px] w-full overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col items-center justify-center bg-[#F4F4F4] p-4 text-center">
                <h3 className="text-[17px] font-semibold text-[#2B2B2B]">
                  {item.title}
                </h3>

                <p className="mt-3 max-w-[260px] text-sm leading-relaxed text-neutral-500">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
