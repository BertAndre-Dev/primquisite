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
    <StaggerMount>
      <PortfolioProjectHero
        heading="SERVICES"
        subtitle="Development, PropTech, operations, and compliance — end-to-end services that keep properties performing for the long term."
        backgroundImage={HERO_FIRST_SLIDE_IMAGE}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
        ]}
      />
      <ServicesOverviewSection />
    </StaggerMount>
  );
}
