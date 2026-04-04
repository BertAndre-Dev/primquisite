import { Hero } from "@/components/layout/Hero";
import { StaggerMount } from "@/components/motion/StaggerMount";
import { HomeIntroSection } from "@/components/sections/home/HomeIntroSection";
import { HomePartnerSection } from "@/components/sections/home/HomePartnerSection";
import { HomeProjectsSection } from "@/components/sections/home/HomeProjectsSection";
import { HomeServicePillarsSection } from "@/components/sections/home/HomeServicePillarsSection";
import { HomeSmarterPropertiesSection } from "@/components/sections/home/HomeSmarterPropertiesSection";
import { HomeValueSection } from "@/components/sections/home/HomeValueSection";

export default function Home() {
  return (
    <StaggerMount>
      <Hero />
      <HomeValueSection />
      <HomeIntroSection />
      <HomeServicePillarsSection />
      <HomeProjectsSection />
      <HomeSmarterPropertiesSection />
      <HomePartnerSection />
    </StaggerMount>
  );
}
