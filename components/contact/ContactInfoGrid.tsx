"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { CONTACT_INFO_ITEMS } from "@/constants/contact";
import { EASE_OUT, staggerDelaySeconds } from "@/lib/motion";

function ClockIcon({ className }: Readonly<{ className?: string }>) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M12 7V12L15 15"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function ContactInfoGrid() {
  const reduce = useReducedMotion();

  return (
    <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-x-12 md:gap-y-12">
      {CONTACT_INFO_ITEMS.map((item, i) => (
        <motion.div
          key={item.id}
          className="flex gap-4"
          initial={reduce ? false : { opacity: 0, y: 12 }}
          whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{
            duration: 0.4,
            ease: EASE_OUT,
            delay: reduce ? 0 : staggerDelaySeconds(i),
          }}
        >
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded bg-[#c5a367] text-white transition-transform duration-200 ease-out motion-reduce:transition-none">
            {item.icon === "clock" ? (
              <ClockIcon className="h-7 w-7" />
            ) : (
              <Image
                src={item.icon}
                alt={`${item.label} icon`}
                width={28}
                height={28}
                className="h-7 w-7 brightness-0 invert"
                loading="lazy"
              />
            )}
          </div>
          <div className="min-w-0 pt-0.5">
            <p className="text-sm font-bold uppercase tracking-wide text-[#c5a367]">
              {item.label}
            </p>
            <p className="mt-1 text-base font-normal text-black">{item.value}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
