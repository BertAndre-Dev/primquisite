import { PortfolioProjectHero } from "@/components/portfolio/PortfolioProjectHero";
import { HomeProjectsSection } from "@/components/sections/home/HomeProjectsSection";
import { PortfolioContactSection } from "@/components/portfolio/PortfolioContactSection";
import { HERO_FIRST_SLIDE_IMAGE } from "@/constants/heroSlides";

export default function PortfolioPage() {
  return (
    <div>
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
    </div>
  );
}
