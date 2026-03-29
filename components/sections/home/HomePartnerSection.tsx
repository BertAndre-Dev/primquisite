import Image from "next/image";
import Link from "next/link";

export function HomePartnerSection() {
  return (
    <section className="bg-[#231F20]">
      <div className="relative w-full my-20 overflow-hidden">
        <div className="flex items-stretch h-[400px] md:h-[450px] xl:h-[500px]">
          {/* Engineer image — hidden on mobile */}
          <div className="relative w-0 md:w-[45%] hidden md:block overflow-hidden">
            <Image
              src="/images/landing/engineer.svg"
              alt="Engineer holding documents"
              fill
              className="object-cover scale-105 object-center"
              priority={false}
            />
          </div>

          {/* Right half on desktop, full width on mobile */}
          <div className="relative w-full md:w-[55%]">
            <Image
              src="/images/landing/partner.svg"
              alt="Partner background"
              fill
              className="object-cover"
              priority={false}
            />

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/50" />

            {/* Text content */}
            <div className="absolute inset-0 flex items-center justify-center px-8 md:px-12">
              <div className="relative z-10 w-full max-w-lg text-center">
                <h2 className="text-[20px] font-bold uppercase leading-[1.2] text-[#DDA74F] md:text-[32px]">
                  Partner with a developer that
                  <br />
                  delivers
                </h2>
                <p className="mt-4 text-[13px] leading-6 text-white/90 md:text-[17px] md:leading-8">
                  Whether you&apos;re an investor, landowner, or homebuyer,
                  Primquisite provides the structure, transparency, and execution
                  to bring your real estate goals to life.
                </p>

                <Link
                  href="/contact"
                  className="mt-6 flex w-full items-center justify-center rounded-md bg-[#D0AA63] py-3 text-sm font-semibold text-white hover:opacity-90 md:text-base"
                >
                  Partner with us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}