import { StaggerMount } from "@/components/motion/StaggerMount";
import { PortfolioContactSection } from "@/components/portfolio/PortfolioContactSection";
import { PortfolioProjectDetail } from "@/components/portfolio/PortfolioProjectDetail";
import { PortfolioProjectHero } from "@/components/portfolio/PortfolioProjectHero";
import { ProjectGalleryCarousel } from "@/components/portfolio/ProjectGalleryCarousel";
import { HERO_FIRST_SLIDE_IMAGE } from "@/constants/heroSlides";
import { Cormorant_Garamond } from "next/font/google";
import { createPageMetadata } from "@/lib/seo";

const serif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["600", "700"],
});

const CRESCENDO_GALLERY = [
  { src: "/cresendo/cres1.svg", alt: "Crescendo residential development" },
  { src: "/cresendo/cres2.svg", alt: "Interior and living space" },
  { src: "/cresendo/cres3.jpeg", alt: "Community and amenities" },
  { src: "/cresendo/cres4.jpeg", alt: "Community and amenities" },
  { src: "/cresendo/crescendo-1.jpeg", alt: "Crescendo construction progress" },
  { src: "/cresendo/crescendo-2.jpeg", alt: "Crescendo residential exterior" },
  { src: "/cresendo/crescendo-3.png", alt: "Crescendo interior development" },
  { src: "/cresendo/crescendo-4.png", alt: "Crescendo building exterior" },
];

export const metadata = createPageMetadata({
  title: "Portfolio — Crescendo",
  description:
    "Crescendo — premium luxury residential development in Lekki Phase 1, Lagos by Primquisite Real Estate, a leading property developer in Nigeria.",
  path: "/portfolio/crescendo",
  keywords: [
    "Lekki Phase 1 real estate",
    "luxury homes Lekki Lagos",
    "property developers in Lagos",
  ],
});

export default function CrescendoPortfolioPage() {
  return (
    <StaggerMount>
      <PortfolioProjectHero
        heading="PORTFOLIO - CRESCENDO"
        subtitle="Premium residential projects across prime Lagos locations, designed for quality, community, and long-term value."
        backgroundImage={HERO_FIRST_SLIDE_IMAGE}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Portfolio", href: "/portfolio" },
          { label: "Crescendo", href: "/portfolio/crescendo" },
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
      <PortfolioContactSection />
    </StaggerMount>
  );
}
