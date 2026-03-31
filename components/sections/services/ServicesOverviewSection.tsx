import Image from "next/image";
import Link from "next/link";

export function ServicesOverviewSection() {
  return (
    <div className="bg-white">
      <div className="mx-auto w-full max-w-7xl px-4 py-14 md:px-6 md:py-20 lg:px-8">
        <div className="space-y-16">
          <ServiceBlock
            title="Property Development & Investment"
            imageSrc="/services/property.svg"
            description="We develop and co-develop premium residential and commercial properties across prime locations. Scope includes:"
            bullets={[
              "Site identification",
              "Feasibility analysis",
              "Land acquisition",
              "Design & construction",
              "Project delivery",
            ]}
          />

          <ServiceBlock
            title="PropTech & Digital Property Management"
            description="We deployed Berta Hub to transform estate operations and resident experience."
            imageSrc="/services/proptech.svg"
            imageAlt="Residential building with clear compliance details"
          />

          <ServiceBlock
            title="Operations & Asset Management"
            description="We manage estates post-handover to ensure efficiency, performance, and long-term value retention."
            imageSrc="/services/operations.svg"
            imageAlt="Residential development with data analytics overlay"
          />

          <ServiceBlock
            title="Risk, Transparency & Compliance"
            description="We ensure structured processes, clear documentation, and full visibility across all stakeholders."
            imageSrc="/services/risk.svg"
            imageAlt="Estate operations and asset management overview"
          />

          <ServiceBlock
            title="Enterprise Data & Intelligence"
            description="We provide actionable insights across properties, operations, and residents to support better decision-making."
            imageSrc="/services/enterprise.svg"
            imageAlt="Digital estate management platform interface"
          />
        </div>
      </div>

      <WhoWeServeSection />
    </div>
  );
}

function ServiceBlock(props: {
  title: string;
  description: string;
  bullets?: string[];
  imageSrc?: string;
  imageAlt?: string;
}) {
  const { title, description, bullets, imageSrc, imageAlt } = props;

  return (
    <section className="w-full">
      <h3 className="text-2xl font-bold text-black md:text-3xl">{title}</h3>
      <p className="mt-4 max-w-3xl text-base leading-7 text-neutral-800 md:text-lg">
        {description}
      </p>

      {bullets ? (
        <ul className="mt-6 list-disc space-y-2 pl-6 text-base text-neutral-800 md:text-lg">
          {bullets.map((b) => (
            <li key={b}>{b}</li>
          ))}
        </ul>
      ) : null}

      {imageSrc ? (
        <div className="mt-6 w-full overflow-hidden rounded-lg border border-black/5 bg-white/70">
          <div className="relative h-[260px] w-full md:h-[300px]">
            <Image
              src={imageSrc}
              alt={imageAlt ?? title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 80vw"
            />
          </div>
        </div>
      ) : null}
    </section>
  );
}

function WhoWeServeSection() {
  const cards = [
    {
      title: "Property Developers & Landowners",
      text: "We help you make confident property decisions by providing access to quality developments, transparent processes, and opportunities designed for long-term value and financial growth.",
    },
    {
      title: "Homebuyers & Investors",
      text: "We help you make confident property decisions by providing access to quality developments, transparent processes, and opportunities designed for long-term value and financial growth.",
    },
    {
      title: "Estate Managers & Operators",
      text: "We support seamless estate operations through smart systems, reliable infrastructure, and tools that enhance efficiency, improve resident satisfaction, and simplify day-to-day management.",
    },
    {
      title: "Institutional Investors",
      text: "We deliver structured, data-driven real estate opportunities backed by strong governance, risk management, and scalable investment strategies tailored for sustainable portfolio growth.",
    },
  ];

  return (
    <section className="bg-[#231F20] px-4 py-16 md:px-6 md:py-20 lg:px-8">
      <div className="mx-auto w-full max-w-7xl">
        <h2 className="text-2xl font-bold text-white md:text-3xl">
          Who We Serve
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {cards.map((card) => (
            <div
              key={card.title}
              className="rounded-md px-4 py-6 text-white/90 backdrop-blur"
            >
              <div className="flex items-start gap-3">
                <WhoServeIcon />
                <div>
                  <h3 className="text-[18px] font-normal uppercase tracking-wide text-white">
                    {card.title}
                  </h3>
                </div>
              </div>
              <p className="mt-4 text-[14px] md:text-base leading-6 text-white/70">{card.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Link
            href="/contact"
            className="inline-flex items-center rounded-md bg-[#D0AA63] px-10 py-3 text-sm font-semibold text-white hover:opacity-95"
          >
            Get in touch <span aria-hidden className="ml-2 cursor-pointer"><Image src="/arrow_outward.svg" alt="Arrow right" width={24} height={24} /></span>
          </Link>
        </div>
      </div>
    </section>
  );
}

function WhoServeIcon() {
  // Simple gold icon block approximating the icon in the screenshot.
  return (
    <span
      className="mt-1"
      aria-hidden
    >
      <Image src="/house.svg" alt="Building" width={24} height={24} />
    </span>
  );
}
