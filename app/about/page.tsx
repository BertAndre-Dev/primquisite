import { PortfolioContactSection } from "@/components/portfolio/PortfolioContactSection";
import { StaggerMount } from "@/components/motion/StaggerMount";
import { AboutCoreValuesSection } from "@/components/sections/about/AboutCoreValuesSection";
import { AboutHeroSection } from "@/components/sections/about/AboutHeroSection";
import { AboutMissionVisionSection } from "@/components/sections/about/AboutMissionVisionSection";
import { AboutWhoWeAreSection } from "@/components/sections/about/AboutWhoWeAreSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Primquisite Real Estate",
  description:
    "Learn about Primquisite Real Estate — mission, vision, and values shaping premium development in Nigeria.",
};

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
