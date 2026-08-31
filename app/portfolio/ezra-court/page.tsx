import { PortfolioContactSection } from "@/components/portfolio/PortfolioContactSection";
import { PortfolioProjectDetail } from "@/components/portfolio/PortfolioProjectDetail";
import { PortfolioProjectHero } from "@/components/portfolio/PortfolioProjectHero";
import { ProjectGalleryCarousel } from "@/components/portfolio/ProjectGalleryCarousel";
import { StaggerMount } from "@/components/motion/StaggerMount";
import { LANDING_PROJECTS } from "@/constants/projects";
import { Cormorant_Garamond } from "next/font/google";
import { createPageMetadata } from "@/lib/seo";

const serif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["600", "700"],
});

const EZRA_COURT = LANDING_PROJECTS.find((project) => project.id === "ezra-court")!;

const EZRA_GALLERY = [
  { src: "/ezra/ezra-1.svg", alt: "Community and landscaping" },
  { src: "/ezra/ezra-2.svg", alt: "Residential amenities" },
  { src: "/ezra/ezra-3.jpeg", alt: "Residential amenities" },
  { src: "/ezra/ezra-4.jpeg", alt: "Residential amenities" },
];

export const metadata = createPageMetadata({
  title: "Portfolio — Ezra Court",
  description:
    "Ezra Court — premium luxury residential community in Lekki, Lagos by Primquisite Real Estate, a trusted property developer in Nigeria.",
  path: "/portfolio/ezra-court",
  keywords: [
    "Lekki real estate",
    "luxury homes Lekki Lagos",
    "property developers in Lagos",
  ],
});

export default function EzraCourtPortfolioPage() {
  return (
    <StaggerMount>
      <PortfolioProjectHero
        heading="PORTFOLIO - EZRA COURT"
        subtitle="Premium residential projects across prime Lagos locations, designed for quality, community, and long-term value."
        backgroundImage="/hero/ezra.svg"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Portfolio", href: "/portfolio" },
          { label: "Ezra Court", href: "/portfolio/ezra-court" },
        ]}
      />
      <PortfolioProjectDetail
        serifClassName={serif.className}
        nameSerif="EZRA COURT"
        locationSans="LEKKI, LAGOS."
        intro="A well-planned residential community combining thoughtful design with quality finishes."
        imageSrc="/hero/ezra.svg"
        imageAlt="Ezra Court residential development at dusk"
        badges={[...(EZRA_COURT.badges ?? []), "Sold Out"]}
        soldOut={EZRA_COURT.soldOut ?? false}
      />
      <ProjectGalleryCarousel images={EZRA_GALLERY} />
      <PortfolioContactSection />
    </StaggerMount>
  );
}
