import { PortfolioProjectHero } from "@/components/portfolio/PortfolioProjectHero";
import { StaggerMount } from "@/components/motion/StaggerMount";
import { ServicesOverviewSection } from "@/components/sections/services/ServicesOverviewSection";
import { HERO_FIRST_SLIDE_IMAGE } from "@/constants/heroSlides";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Services",
  description:
    "Property development, PropTech estate management, asset operations, and compliance services from a leading property management company in Lagos and Nigeria.",
  path: "/services",
  keywords: [
    "property management companies in Lagos",
    "property management companies in Nigeria",
    "estate management Lagos",
    "property development company Nigeria",
  ],
});

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
