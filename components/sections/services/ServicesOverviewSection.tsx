"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { EASE_OUT, staggerDelaySeconds } from "@/lib/motion";

type ServiceItem = {
  id: string;
  label: string;
  title: string;
  description: string;
  bullets?: string[];
  imageSrc: string;
  imageAlt: string;
};

const SERVICES: ServiceItem[] = [
  {
    id: "development",
    label: "01",
    title: "Property Development & Investment",
    description:
      "We develop and co-develop premium residential and commercial properties across prime locations — from land to delivery.",
    bullets: [
      "Site identification",
      "Feasibility analysis",
      "Land acquisition",
      "Design & construction",
      "Project delivery",
    ],
    imageSrc: "/services/property.svg",
    imageAlt: "Premium residential property development",
  },
  {
    id: "proptech",
    label: "02",
    title: "PropTech & Digital Property Management",
    description:
      "We deploy Berta Hub to transform estate operations and resident experience — billing, utilities, communication, and engagement in one platform.",
    bullets: [
      "Centralized estate operations",
      "Resident engagement tools",
      "Energy and utility intelligence",
      "Transparent billing workflows",
    ],
    imageSrc: "/services/proptech.svg",
    imageAlt: "Digital property management with Berta Hub",
  },
  {
    id: "operations",
    label: "03",
    title: "Operations & Asset Management",
    description:
      "We manage estates after handover to protect efficiency, performance, and long-term value for residents and owners.",
    bullets: [
      "Post-handover estate management",
      "Maintenance coordination",
      "Performance monitoring",
      "Long-term asset care",
    ],
    imageSrc: "/services/operations.svg",
    imageAlt: "Estate operations and asset management",
  },
  {
    id: "compliance",
    label: "04",
    title: "Risk, Transparency & Compliance",
    description:
      "Structured processes, clear documentation, and full visibility across stakeholders — so every decision is confident and accountable.",
    bullets: [
      "Documented workflows",
      "Stakeholder visibility",
      "Governance standards",
      "Risk-aware delivery",
    ],
    imageSrc: "/services/risk.svg",
    imageAlt: "Risk, transparency, and compliance in real estate",
  },
  {
    id: "intelligence",
    label: "05",
    title: "Enterprise Data & Intelligence",
    description:
      "Actionable insights across properties, operations, and residents, supporting better decisions for developers, managers, and investors.",
    bullets: [
      "Portfolio performance insights",
      "Operational analytics",
      "Resident experience data",
      "Decision-ready reporting",
    ],
    imageSrc: "/services/enterprise.svg",
    imageAlt: "Enterprise data and intelligence for real estate",
  },
];

const WHO_WE_SERVE = [
  {
    title: "Property Developers & Landowners",
    text: "Partner with us to identify sites, structure projects, and deliver developments built for lasting value.",
    iconSrc: "/icons/audience-developers.svg",
  },
  {
    title: "Homebuyers & Investors",
    text: "Access quality developments with transparent processes and opportunities designed for long-term growth.",
    iconSrc: "/icons/audience-homebuyers.svg",
  },
  {
    title: "Estate Managers & Operators",
    text: "Run estates with smarter systems that improve efficiency, resident satisfaction, and day-to-day operations.",
    iconSrc: "/icons/audience-managers.svg",
  },
  {
    title: "Institutional Investors",
    text: "Invest in structured, data-driven real estate opportunities backed by governance and scalable strategy.",
    iconSrc: "/icons/audience-investors.svg",
  },
];

export function ServicesOverviewSection() {
  return (
    <div className="bg-[#FAF9F6]">
      <section className="border-b border-black/5 bg-white">
        <div className="mx-auto w-full max-w-7xl px-6 py-12 md:px-8 md:py-16">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C5A059]">
            What we offer
          </p>
          <h2 className="mt-4 max-w-3xl text-2xl font-bold uppercase leading-[1.08] tracking-[-0.02em] text-black md:text-4xl md:leading-[1.05]">
            End-to-end real estate services built for lasting value
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-neutral-700 md:text-lg md:leading-8">
            From development and PropTech to operations and compliance,
            Primquisite supports the full property lifecycle with clarity and
            craft.
          </p>

          <nav
            className="mt-10 flex gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            aria-label="Jump to a service"
          >
            {SERVICES.map((service) => (
              <a
                key={service.id}
                href={`#${service.id}`}
                className="shrink-0 rounded-full border border-black/10 bg-[#FAF9F6] px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-neutral-800 transition-[transform,background-color,border-color] duration-100 ease-out hover:border-[#C5A059]/50 hover:bg-white active:scale-[0.97] motion-reduce:active:scale-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A059]/60"
              >
                {service.label} · {shortNavLabel(service.title)}
              </a>
            ))}
          </nav>
        </div>
      </section>

      <div className="relative overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(208,170,99,0.08),_transparent_55%)]"
          aria-hidden
        />

        <div className="relative mx-auto w-full max-w-7xl px-6 py-16 md:px-8 md:py-28">
          <div className="space-y-20 md:space-y-28">
            {SERVICES.map((service, index) => (
              <ScrollReveal
                key={service.id}
                delay={Math.min(index * 0.04, 0.16)}
                distance={10}
                duration={0.28}
              >
                <ServiceRow
                  service={service}
                  reverse={index % 2 === 1}
                  index={index}
                  total={SERVICES.length}
                />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>

      <WhoWeServeSection />
    </div>
  );
}

function shortNavLabel(title: string): string {
  if (title.startsWith("Property Development")) return "Development";
  if (title.startsWith("PropTech")) return "PropTech";
  if (title.startsWith("Operations")) return "Operations";
  if (title.startsWith("Risk")) return "Compliance";
  return "Intelligence";
}

function ServiceRow({
  service,
  reverse,
  index,
  total,
}: {
  readonly service: ServiceItem;
  readonly reverse: boolean;
  readonly index: number;
  readonly total: number;
}) {
  const reduce = useReducedMotion();

  return (
    <article id={service.id} className="scroll-mt-28 group/row">
      <div className="grid items-center gap-8 lg:grid-cols-12 lg:gap-12 xl:gap-16">
        {/* Media — museum matte + cinematic crop */}
        <div
          className={`relative lg:col-span-7 ${
            reverse ? "lg:order-2" : "lg:order-1"
          }`}
        >
          <div className="relative">
            {/* Outer gold hairline frame */}
            <div className="rounded-[1.35rem] p-px bg-gradient-to-br from-[#F0E0A0]/80 via-[#C5A059]/45 to-[#8a6d35]/30 shadow-[0_40px_90px_-40px_rgba(35,31,32,0.65)]">
              {/* Dark mat */}
              <div className="rounded-[1.3rem] bg-[#1c1919] p-2.5 sm:p-3.5">
                <div className="relative overflow-hidden rounded-[0.95rem] bg-[#0f0e0e]">
                  {/* Near-native 3:1 cinematic ratio — full artwork, intentional crop */}
                  <div className="relative aspect-[16/10] min-h-[280px] sm:aspect-[16/11] sm:min-h-[340px] lg:min-h-[400px]">
                    <Image
                      src={service.imageSrc}
                      alt={service.imageAlt}
                      fill
                      className="object-cover object-center transition-transform duration-[280ms] ease-out [@media(hover:hover)_and_(pointer:fine)]:group-hover/row:scale-[1.025] motion-reduce:transition-none motion-reduce:[@media(hover:hover)_and_(pointer:fine)]:group-hover/row:scale-100"
                      sizes="(max-width: 1024px) 100vw, 58vw"
                    />

                    {/* Soft vignette for depth */}
                    <div
                      className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_42%,rgba(15,14,14,0.45)_100%)]"
                      aria-hidden
                    />
                    <div
                      className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0f0e0e]/50 via-transparent to-[#0f0e0e]/20"
                      aria-hidden
                    />

                    {/* Large watermark index */}
                    <span
                      className="pointer-events-none absolute bottom-3 right-4 select-none font-bold leading-none text-white/[0.08] text-[4.5rem] tracking-[-0.06em] sm:bottom-4 sm:right-6 sm:text-[6rem]"
                      aria-hidden
                    >
                      {service.label}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating service meta chip */}
            <div
              className={`absolute -bottom-4 z-10 flex items-center gap-3 rounded-full border border-[#D0AA63]/35 bg-[#231F20]/92 px-4 py-2 shadow-lg backdrop-blur-md ${
                reverse ? "left-6" : "right-6"
              }`}
            >
              <span className="h-3 w-px bg-white/20" aria-hidden />
              <span className="text-[11px] font-medium uppercase tracking-[0.14em] text-white/65">
                {service.title}
              </span>
            </div>
          </div>
        </div>

        {/* Copy */}
        <div
          className={`lg:col-span-5 ${
            reverse ? "lg:order-1 lg:pr-2" : "lg:order-2 lg:pl-2"
          }`}
        >
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-[#C5A059]" aria-hidden />
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#C5A059]">
              Capability
            </p>
          </div>

          <h3 className="mt-5 text-[1.75rem] font-bold leading-[1.1] tracking-[-0.03em] text-[#231F20] md:text-[2.25rem] md:leading-[1.06]">
            {service.title}
          </h3>

          <p className="mt-5 text-base leading-relaxed text-neutral-600 md:text-lg md:leading-8">
            {service.description}
          </p>

          {service.bullets ? (
            <ul className="mt-8 space-y-0 border-t border-black/5 pt-2">
              {service.bullets.map((item, i) => (
                <motion.li
                  key={item}
                  className="flex items-start gap-3 border-b border-black/5 py-3.5 text-[15px] text-neutral-800 md:text-base"
                  initial={reduce ? false : { opacity: 0 }}
                  whileInView={reduce ? undefined : { opacity: 1 }}
                  viewport={{ once: true, margin: "-20px" }}
                  transition={{
                    duration: 0.22,
                    ease: EASE_OUT,
                    delay: reduce ? 0 : staggerDelaySeconds(i, 35, 160),
                  }}
                >
                  <span
                    className="mt-[0.55rem] h-px w-4 shrink-0 bg-[#C5A059]"
                    aria-hidden
                  />
                  <span className="leading-snug">{item}</span>
                </motion.li>
              ))}
            </ul>
          ) : null}

          <Link
            href="/contact"
            className="mt-9 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.14em] text-[#C5A059] transition-[color,transform] duration-100 ease-out hover:text-[#a8843f] active:scale-[0.97] motion-reduce:active:scale-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A059]/50 focus-visible:ring-offset-2"
          >
            Discuss this service
            <span aria-hidden className="text-base leading-none">
              →
            </span>
          </Link>
        </div>
      </div>

      {index < total - 1 ? (
        <div
          className="mx-auto mt-20 h-px w-full max-w-sm bg-gradient-to-r from-transparent via-[#D0AA63]/40 to-transparent md:mt-28"
          aria-hidden
        />
      ) : null}
    </article>
  );
}

function WhoWeServeSection() {
  const reduce = useReducedMotion();

  return (
    <section className="bg-[#231F20] px-6 py-16 md:px-8 md:py-24">
      <div className="mx-auto w-full max-w-7xl">
        <motion.div
          initial={reduce ? false : { opacity: 0 }}
          whileInView={reduce ? undefined : { opacity: 1 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.28, ease: EASE_OUT }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#DDA74F]">
            Audiences
          </p>
          <h2 className="mt-4 max-w-2xl text-2xl font-bold uppercase leading-[1.08] tracking-[-0.02em] text-white md:text-4xl md:leading-[1.05]">
            Who we serve
          </h2>
          {/* <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#D5CFC7] md:text-lg">
            Whether you develop, invest, manage, or buy, we build the systems
            and partnerships that keep real estate performing.
          </p> */}
        </motion.div>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {WHO_WE_SERVE.map((card, i) => (
            <motion.div
              key={card.title}
              className="rounded-xl border border-white/10 bg-white/[0.03] p-6 transition-[transform,background-color,border-color] duration-200 ease-out [@media(hover:hover)_and_(pointer:fine)]:hover:border-[#DDA74F]/35 [@media(hover:hover)_and_(pointer:fine)]:hover:bg-white/[0.06] active:scale-[0.99] motion-reduce:active:scale-100"
              initial={reduce ? false : { opacity: 0 }}
              whileInView={reduce ? undefined : { opacity: 1 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{
                duration: 0.25,
                ease: EASE_OUT,
                delay: reduce ? 0 : staggerDelaySeconds(i, 40, 160),
              }}
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#DDA74F]/15 ring-1 ring-[#DDA74F]/30">
                <Image
                  src={card.iconSrc}
                  alt=""
                  width={20}
                  height={20}
                  aria-hidden
                />
              </div>
              <h3 className="mt-5 text-base font-semibold uppercase tracking-[0.08em] text-white">
                {card.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white/70 md:text-[15px] md:leading-7">
                {card.text}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-start gap-4 border-t border-white/10 pt-10 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-lg font-semibold text-white md:text-xl">
              Ready to talk about your next project?
            </p>
            {/* <p className="mt-1 text-sm text-[#D5CFC7] md:text-base">
              Tell us about your project and we&apos;ll help you shape the path.
            </p> */}
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-md border border-[#DDA74F] bg-[#D0AA63] px-7 py-3.5 text-sm font-semibold text-white transition-[transform,opacity] duration-100 ease-out hover:opacity-95 active:scale-[0.97] motion-reduce:active:scale-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F0E0A0]/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#231F20] md:text-base"
          >
            Get in touch
            <span aria-hidden className="ml-1">
              {"\u2197"}
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
