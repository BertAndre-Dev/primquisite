import { PortfolioContactSection } from "@/components/portfolio/PortfolioContactSection";
import { StaggerMount } from "@/components/motion/StaggerMount";
import { AboutCoreValuesSection } from "@/components/sections/about/AboutCoreValuesSection";
import { AboutHeroSection } from "@/components/sections/about/AboutHeroSection";
import { AboutMissionVisionSection } from "@/components/sections/about/AboutMissionVisionSection";
import { AboutWhoWeAreSection } from "@/components/sections/about/AboutWhoWeAreSection";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "About Us",
  description:
    "Learn about Primquisite Real Estate — a property developer and real estate agency in Lagos, Nigeria, delivering premium residential projects with transparency and long-term value.",
  path: "/about",
  keywords: [
    "real estate developers in Nigeria",
    "property developers in Lagos",
    "Lagos real estate company",
  ],
});

export default function AboutPage() {
  return (
    <StaggerMount>
      <AboutHeroSection />
      <AboutWhoWeAreSection />
      <AboutMissionVisionSection />
      <AboutCoreValuesSection />
      <PortfolioContactSection />
    </StaggerMount>
  );
}
