import { PortfolioProjectDetail } from "@/components/portfolio/PortfolioProjectDetail";
import { PortfolioProjectHero } from "@/components/portfolio/PortfolioProjectHero";
import { ProjectGalleryCarousel } from "@/components/portfolio/ProjectGalleryCarousel";
import { HERO_FIRST_SLIDE_IMAGE } from "@/constants/heroSlides";
import { Cormorant_Garamond } from "next/font/google";
import type { Metadata } from "next";

const serif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["600", "700"],
});

const NACRE_GALLERY = [
  { src: "/hero/nacre.svg", alt: "Nacre residential development" },
  { src: "/images/landing/why.svg", alt: "Residential community" },
  { src: "/images/landing/partner.svg", alt: "Development view" },
];

export const metadata: Metadata = {
  title: "Portfolio — Nacre | Primquisite Real Estate",
  description:
    "Premium residential development in Ikoyi — Nacre by Primquisite Real Estate.",
};

export default function NacrePortfolioPage() {
  return (
    <>
      <PortfolioProjectHero
        heading="PORTFOLIO - NACRE"
        subtitle="Premium residential projects across prime Lagos locations, designed for quality, community, and long-term value."
        backgroundImage={HERO_FIRST_SLIDE_IMAGE}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Portfolio", href: "/products" },
          { label: "Nacre", href: "/products/nacre" },
        ]}
      />
      <PortfolioProjectDetail
        serifClassName={serif.className}
        nameSerif="NACRE"
        locationSans="IKOYI, LAGOS."
        intro="A well-planned residential community combining thoughtful design with quality finishes."
        imageSrc="/hero/nacre.svg"
        imageAlt="Nacre residential development exterior"
      />
      <ProjectGalleryCarousel images={NACRE_GALLERY} />
    </>
  );
}
