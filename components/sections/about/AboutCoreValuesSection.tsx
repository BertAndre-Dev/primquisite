"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { CORE_VALUES } from "@/constants/about";
import { EASE_OUT, staggerDelaySeconds } from "@/lib/motion";

export function AboutCoreValuesSection() {
  const reduce = useReducedMotion();

  return (
    <section className="bg-[#F8F8F8] py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-12">
        {/* Title */}
        <h2 className="text-center text-3xl font-bold text-black md:text-4xl">
          Our Core Values
        </h2>

        {/* Grid */}
        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {CORE_VALUES.map((item, i) => (
            <motion.article
              key={item.title}
              className="group flex cursor-pointer flex-col overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-[0px_4px_4px_0px_#000000] transition-[transform,box-shadow] duration-200 ease-out hover:-translate-y-1 hover:shadow-[0px_8px_12px_0px_rgba(0,0,0,0.2)] motion-reduce:transition-none motion-reduce:hover:translate-y-0"
              initial={reduce ? false : { opacity: 0, y: 14 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.42,
                ease: EASE_OUT,
                delay: reduce ? 0 : staggerDelaySeconds(i),
              }}
            >
              {/* Image */}
              <div className="relative h-[280px] w-full overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-105 motion-reduce:group-hover:scale-100"
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
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
