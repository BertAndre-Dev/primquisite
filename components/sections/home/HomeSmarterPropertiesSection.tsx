import Image from "next/image";

export function HomeSmarterPropertiesSection() {
  return (
    <section className="relative overflow-hidden border-y border-[#D7B980]">
      <div className="relative mx-auto h-[360px] w-full md:h-[460px] lg:h-[520px]">
        {/* Background photo */}
        <Image
          src="/bg.svg"
          alt="Berta platform and real estate background"
          fill
          className="object-cover object-center"
        />

        {/* Dark left panel with diagonal clip */}
        <div className="absolute inset-y-0 left-0 w-[55%] bg-[#231F20F5] [clip-path:polygon(0_0,85%_0,100%_100%,0_100%)] md:w-[52%]" />

        {/* Content sitting over the dark panel */}
        <div className="absolute inset-y-0 left-0 flex w-[50%] items-center md:w-[46%]">
          <div className="relative px-8 py-10 md:px-14">
            {/* Faint logo watermark */}
            <Image
              src="/logo.svg"
              alt=""
              width={400}
              height={400}
              aria-hidden
              className="absolute left-1/2 top-1/2 z-0 h-auto w-56 -translate-x-1/2 -translate-y-1/2 opacity-[0.07] md:w-80"
            />

            <div className="relative z-10 max-w-lg text-white">
              <h2 className="text-2xl font-bold uppercase leading-tight tracking-wide text-[#DDA74F] md:text-3xl">
                Smarter Properties
                <br />
                Start Here
              </h2>
              <p className="mt-4 text-base font-medium leading-relaxed text-[#F4EEE5] lg:text-[18px] ">
                Berta Hub Transforms How Realty Operate: Energy Intelligence,
                Centralizing Billing, Communication, Utilities, And Resident
                Engagement Into One Platform.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}