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

const CRESCENDO_GALLERY = [
  { src: "/hero/cresendo.svg", alt: "Crescendo residential development" },
  { src: "/images/landing/why.svg", alt: "Interior and living space" },
  { src: "/images/landing/partner.svg", alt: "Community and amenities" },
];

export const metadata: Metadata = {
  title: "Portfolio — Crescendo | Primquisite Real Estate",
  description:
    "Crescendo — premium residential development in Lekki by Primquisite Real Estate.",
};

export default function CrescendoPortfolioPage() {
  return (
    <>
      <PortfolioProjectHero
        heading="PORTFOLIO - CRESCENDO"
        subtitle="Premium residential projects across prime Lagos locations, designed for quality, community, and long-term value."
        backgroundImage={HERO_FIRST_SLIDE_IMAGE}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Portfolio", href: "/products" },
          { label: "Crescendo", href: "/products/crescendo" },
        ]}
      />
      <PortfolioProjectDetail
        serifClassName={serif.className}
        nameSerif="CRESCENDO"
        locationSans="LEKKI, LAGOS."
        intro="An ongoing development focused on lifestyle, sustainability, and modern living."
        imageSrc="/hero/cresendo.svg"
        imageAlt="Crescendo residential development exterior"
      />
      <ProjectGalleryCarousel images={CRESCENDO_GALLERY} />
    </>
  );
}
