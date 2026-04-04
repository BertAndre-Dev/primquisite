import { PortfolioProjectHero } from "@/components/portfolio/PortfolioProjectHero";
import { StaggerMount } from "@/components/motion/StaggerMount";
import { ServicesOverviewSection } from "@/components/sections/services/ServicesOverviewSection";
import { HERO_FIRST_SLIDE_IMAGE } from "@/constants/heroSlides";

export default function ServicesPage() {
  return (
    <div className="pt-24">
      <StaggerMount>
        <PortfolioProjectHero
          heading="SERVICES"
          subtitle="What We Offer"
          backgroundImage={HERO_FIRST_SLIDE_IMAGE}
          breadcrumbs={[
            { label: "HOME", href: "/" },
            { label: "SERVICES", href: "/services" },
          ]}
        />
        <ServicesOverviewSection />
      </StaggerMount>
    </div>
  );
}
