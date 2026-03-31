import { HERO_FIRST_SLIDE_IMAGE } from "@/constants/heroSlides";
import { PortfolioProjectHero } from "@/components/portfolio/PortfolioProjectHero";
import { ServicesOverviewSection } from "@/components/sections/services/ServicesOverviewSection";

export default function ServicesPage() {
  return (
    <div className="pt-24">
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
    </div>
  );
}
