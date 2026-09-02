import { PortfolioContactSection } from "@/components/portfolio/PortfolioContactSection";
import { PortfolioProjectDetail } from "@/components/portfolio/PortfolioProjectDetail";
import { PortfolioProjectHero } from "@/components/portfolio/PortfolioProjectHero";
import { ProjectGalleryCarousel } from "@/components/portfolio/ProjectGalleryCarousel";
import { StaggerMount } from "@/components/motion/StaggerMount";
import { Cormorant_Garamond } from "next/font/google";
import { createPageMetadata } from "@/lib/seo";

const serif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["600", "700"],
});

const NACRE_GALLERY = [
  { src: "/nacre/nacre-1.jpeg", alt: "Nacre residential development" },
  { src: "/nacre/nacre-2.jpeg", alt: "Nacre residential development exterior" },
  { src: "/nacre/nacre-3.jpeg", alt: "Nacre residential community" },
  { src: "/nacre/nacre-4.jpeg", alt: "Nacre residential amenities" },
  { src: "/nacre/nacre-5.jpeg", alt: "Nacre residential interiors" },
  { src: "/nacre/nacre-6.jpeg", alt: "Nacre residential development view" },
  { src: "/nacre/nacre-7.jpeg", alt: "Nacre residential landscaping" },
  { src: "/nacre/nacre-8.jpeg", alt: "Nacre residential building" },
  { src: "/nacre/nacre-9.jpeg", alt: "Nacre residential architecture" },
  { src: "/nacre/nacre-10.jpeg", alt: "Nacre residential project" },
  { src: "/nacre/nacre-11.png", alt: "Nacre residential project" },
  { src: "/nacre/nacre-12.jpeg", alt: "Nacre residential project" },
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
        backgroundImage="/nacre/nacre-10.jpeg"
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
