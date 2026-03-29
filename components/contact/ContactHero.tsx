import Image from "next/image";
import { HERO_FIRST_SLIDE_IMAGE } from "@/constants/heroSlides";

export function ContactHero() {
  return (
    <section className="relative isolate min-h-[min(380px,55svh)] w-full overflow-hidden md:min-h-[420px]">
      <div className="absolute inset-0 z-0">
        <Image
          src={HERO_FIRST_SLIDE_IMAGE}
          alt=""
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
      </div>
      <div
        className="absolute inset-0 z-[1] bg-[#1a2d42]/65"
        aria-hidden
      />
      <div className="relative z-[2] mx-auto flex min-h-[min(320px,48svh)] max-w-7xl flex-col justify-center px-6 pb-14 pt-28 md:min-h-[360px] md:px-10 md:pb-20 md:pt-32 lg:px-12">
        <h1 className="text-4xl font-bold uppercase tracking-wide text-white md:text-5xl lg:text-6xl">
          Contact
        </h1>
        <p className="mt-3 text-lg font-normal text-white md:text-xl">
          Reach out to us
        </p>
      </div>
    </section>
  );
}
