import { PortfolioContactSection } from "@/components/portfolio/PortfolioContactSection";
import { PortfolioProjectDetail } from "@/components/portfolio/PortfolioProjectDetail";
import { PortfolioProjectHero } from "@/components/portfolio/PortfolioProjectHero";
import { ProjectGalleryCarousel } from "@/components/portfolio/ProjectGalleryCarousel";
import { Cormorant_Garamond } from "next/font/google";
import type { Metadata } from "next";

const serif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["600", "700"],
});

const ARABELLA_GALLERY = [
  { src: "/hero/arabella.svg", alt: "Arabella residential development" },
  { src: "/images/landing/why.svg", alt: "Building exterior and grounds" },
  { src: "/images/landing/partner.svg", alt: "Lifestyle and community" },
];

export const metadata: Metadata = {
  title: "Portfolio — Arabella | Primquisite Real Estate",
  description:
    "Arabella — premium residential development in Lekki Phase 1 by Primquisite Real Estate.",
};

export default function ArabellaPortfolioPage() {
  return (
    <>
      <PortfolioProjectHero
        heading="PORTFOLIO - ARABELLA"
        subtitle="Premium residential projects across prime Lagos locations, designed for quality, community, and long-term value."
        backgroundImage="/hero/arabella.svg"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Portfolio", href: "/portfolio" },
          { label: "Arabella", href: "/portfolio/arabella" },
        ]}
      />
      <PortfolioProjectDetail
        serifClassName={serif.className}
        nameSerif="ARABELLA"
        locationSans="LEKKI, LAGOS."
        intro="A premium residential development delivering comfort, security, and strong asset value."
        imageSrc="/hero/arabella.svg"
        imageAlt="Arabella modern residential building"
        badges={["Residential", "Luxury Homes", "Ongoing"]}
      />
      <ProjectGalleryCarousel images={ARABELLA_GALLERY} />
      <PortfolioContactSection />
    </>
  );
}
