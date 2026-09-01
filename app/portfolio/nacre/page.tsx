import { PortfolioContactSection } from "@/components/portfolio/PortfolioContactSection";
import { PortfolioProjectDetail } from "@/components/portfolio/PortfolioProjectDetail";
import { PortfolioProjectHero } from "@/components/portfolio/PortfolioProjectHero";
import { ProjectGalleryCarousel } from "@/components/portfolio/ProjectGalleryCarousel";
import { StaggerMount } from "@/components/motion/StaggerMount";
import { HERO_FIRST_SLIDE_IMAGE } from "@/constants/heroSlides";
import { Cormorant_Garamond } from "next/font/google";
import { createPageMetadata } from "@/lib/seo";

const serif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["600", "700"],
});

const NACRE_GALLERY = [
  { src: "/hero/nacre.svg", alt: "Nacre residential development" },
  { src: "/images/landing/why.svg", alt: "Residential community" },
  { src: "/images/landing/partner.svg", alt: "Development view" },
];

export const metadata = createPageMetadata({
  title: "Portfolio — Nacre",
  description:
    "Nacre — premium luxury residential development in Ikoyi, Lagos by Primquisite Real Estate, a leading property developer in Nigeria.",
  path: "/portfolio/nacre",
  keywords: [
    "Ikoyi property developer",
    "luxury homes Ikoyi Lagos",
    "residential development Lagos",
  ],
});

const NACRE_BROCHURE = "/brochure/Nacre, Ikoyi lastsst.pdf";

export default function NacrePortfolioPage() {
  return (
    <StaggerMount>
      <PortfolioProjectHero
        heading="PORTFOLIO - NACRE"
        subtitle="Premium residential projects across prime Lagos locations, designed for quality, community, and long-term value."
        backgroundImage={HERO_FIRST_SLIDE_IMAGE}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Portfolio", href: "/portfolio" },
          { label: "Nacre", href: "/portfolio/nacre" },
        ]}
      />
      <PortfolioProjectDetail
        serifClassName={serif.className}
        nameSerif="NACRE"
        locationSans="IKOYI, LAGOS."
        intro="A well-planned residential community combining thoughtful design with quality finishes."
        imageSrc="/hero/nacre.svg"
        imageAlt="Nacre residential development exterior"
        brochureHref={NACRE_BROCHURE}
        brochureDownloadName="Nacre Ikoyi Brochure.pdf"
      />
      <ProjectGalleryCarousel images={NACRE_GALLERY} />
      <PortfolioContactSection />
    </StaggerMount>
  );
}
