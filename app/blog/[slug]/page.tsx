import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BlogArticle } from "@/components/blog/BlogArticle";
import { StaggerMount } from "@/components/motion/StaggerMount";
import { PortfolioContactSection } from "@/components/portfolio/PortfolioContactSection";
import {
  getAllBlogSlugs,
  getBlogPostBySlug,
} from "@/constants/blog";
import { getSiteName, getSiteUrl } from "@/constants/seo";
import { createPageMetadata } from "@/lib/seo";

type BlogPostPageProps = {
  readonly params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return {};

  const siteUrl = getSiteUrl();
  const siteName = getSiteName();
  const path = `/blog/${post.slug}`;
  const canonical = `${siteUrl}${path}`;

  const base = createPageMetadata({
    title: post.title,
    description: post.excerpt,
    path,
    keywords: [
      "residential living Nigeria",
      "property development Lagos",
      "Nigeria housing future",
      "estate communities Nigeria",
    ],
  });

  return {
    ...base,
    openGraph: {
      ...base.openGraph,
      title: post.title,
      description: post.excerpt,
      url: canonical,
      siteName,
      type: "article",
      publishedTime: post.publishedAt,
      images: [{ url: post.coverImage, alt: post.coverImageAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.coverImage],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) notFound();

  return (
    <StaggerMount>
      <BlogArticle post={post} />
      <PortfolioContactSection />
    </StaggerMount>
  );
}
