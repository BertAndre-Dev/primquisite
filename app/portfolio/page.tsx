import { PortfolioContactSection } from "@/components/portfolio/PortfolioContactSection";
import { PortfolioProjectHero } from "@/components/portfolio/PortfolioProjectHero";
import { StaggerMount } from "@/components/motion/StaggerMount";
import { HomeProjectsSection } from "@/components/sections/home/HomeProjectsSection";
import { HERO_FIRST_SLIDE_IMAGE } from "@/constants/heroSlides";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Portfolio",
  description:
    "Explore Primquisite Real Estate portfolio — luxury residential developments in Lekki Phase 1, Ikoyi, and prime Lagos locations by a leading Nigerian property developer.",
  path: "/portfolio",
  keywords: [
    "Lagos luxury homes",
    "residential development Lagos",
    "Lekki Phase 1 real estate",
    "Ikoyi property developer",
  ],
});

export default function PortfolioPage() {
  return (
    <StaggerMount>
      <PortfolioProjectHero
        heading="PORTFOLIO"
        subtitle="Premium residential projects across prime Lagos locations, designed for quality, community, and long-term value."
        backgroundImage={HERO_FIRST_SLIDE_IMAGE}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Portfolio", href: "/portfolio" },
        ]}
      />

      <HomeProjectsSection />

      <PortfolioContactSection />
    </StaggerMount>
  );
}
