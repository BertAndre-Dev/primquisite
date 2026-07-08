import { Hero } from "@/components/layout/Hero";
import { StaggerMount } from "@/components/motion/StaggerMount";
import { HomeIntroSection } from "@/components/sections/home/HomeIntroSection";
import { HomePartnerSection } from "@/components/sections/home/HomePartnerSection";
import { HomeProjectsSection } from "@/components/sections/home/HomeProjectsSection";
import { HomeServicePillarsSection } from "@/components/sections/home/HomeServicePillarsSection";
import { HomeSmarterPropertiesSection } from "@/components/sections/home/HomeSmarterPropertiesSection";
import { HomeValueSection } from "@/components/sections/home/HomeValueSection";
import { SEO_HOME_TITLE } from "@/constants/seo";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: SEO_HOME_TITLE,
  description:
    "Primquisite Real Estate is a leading property developer and real estate agency in Lagos, Nigeria — luxury residential development, property management, and investment across Lekki, Ikoyi, and Nigeria.",
  path: "/",
  titleAbsolute: true,
  keywords: [
    "Lagos luxury homes",
    "Nigeria property investment",
    "Lekki Phase 1 real estate",
  ],
});

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
