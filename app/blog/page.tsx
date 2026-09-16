import { StaggerMount } from "@/components/motion/StaggerMount";
import { PortfolioContactSection } from "@/components/portfolio/PortfolioContactSection";
import { PortfolioProjectHero } from "@/components/portfolio/PortfolioProjectHero";
import { BlogIndexSection } from "@/components/sections/blog/BlogIndexSection";
import { BLOG_POSTS } from "@/constants/blog";
import { HERO_FIRST_SLIDE_IMAGE } from "@/constants/heroSlides";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Blog",
  description:
    "Insights on residential living, property development, and community design in Lagos and Nigeria from Primquisite Real Estate.",
  path: "/blog",
  keywords: [
    "Nigeria residential living",
    "Lagos property insights",
    "real estate blog Nigeria",
    "residential development Lagos",
  ],
});

export default function BlogPage() {
  return (
    <StaggerMount>
      <PortfolioProjectHero
        heading="BLOG"
        subtitle="Perspectives on residential living, community design, and the future of property in Nigeria."
        backgroundImage={HERO_FIRST_SLIDE_IMAGE}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
        ]}
      />

      <BlogIndexSection posts={BLOG_POSTS} />

      <PortfolioContactSection />
    </StaggerMount>
  );
}
