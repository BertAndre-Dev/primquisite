import { BlogCard } from "@/components/blog/BlogCard";
import { StaggerMount } from "@/components/motion/StaggerMount";
import { PortfolioContactSection } from "@/components/portfolio/PortfolioContactSection";
import { PortfolioProjectHero } from "@/components/portfolio/PortfolioProjectHero";
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

      <section className="bg-white px-4 py-14 md:px-6 md:py-20 lg:px-8">
        <div className="mx-auto grid w-full max-w-7xl gap-12 md:gap-16">
          {BLOG_POSTS.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </section>

      <PortfolioContactSection />
    </StaggerMount>
  );
}
