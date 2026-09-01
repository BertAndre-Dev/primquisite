import { StaggerMount } from "@/components/motion/StaggerMount";
import { PortfolioContactSection } from "@/components/portfolio/PortfolioContactSection";
import { PortfolioProjectDetail } from "@/components/portfolio/PortfolioProjectDetail";
import { PortfolioProjectHero } from "@/components/portfolio/PortfolioProjectHero";
import { ProjectGalleryCarousel } from "@/components/portfolio/ProjectGalleryCarousel";
import { Cormorant_Garamond } from "next/font/google";
import { createPageMetadata } from "@/lib/seo";

const serif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["600", "700"],
});

const ARABELLA_GALLERY = [
  { src: "/hero/arabella.svg", alt: "Arabella residential development" },
  { src: "/arabella/arabella-1.jpeg", alt: "Arabella residential development exterior" },
  { src: "/arabella/arabella-2.jpeg", alt: "Arabella residential community" },
  { src: "/arabella/arabella-3.jpeg", alt: "Arabella residential amenities" },
  { src: "/arabella/arabella-4.jpeg", alt: "Arabella residential building" },
  { src: "/arabella/arabella-5.jpeg", alt: "Arabella residential architecture" },
  { src: "/arabella/arabella-6.jpeg", alt: "Arabella residential landscaping" },
  { src: "/arabella/arabella-8.png", alt: "Arabella residential development" },
];

export const metadata = createPageMetadata({
  title: "Portfolio — Arabella",
  description:
    "Arabella — premium luxury residential development in Lekki Phase 1, Lagos by Primquisite Real Estate, a leading Nigerian property developer.",
  path: "/portfolio/arabella",
  keywords: [
    "Lekki Phase 1 real estate",
    "luxury homes Lekki Lagos",
    "residential development Lagos",
  ],
});

export default function ArabellaPortfolioPage() {
  return (
    <StaggerMount>
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
    </StaggerMount>
  );
}
