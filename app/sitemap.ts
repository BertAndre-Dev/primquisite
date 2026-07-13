import type { MetadataRoute } from "next";
import { BLOG_POSTS } from "@/constants/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const base =
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ?? "https://primquisiterealestate.com";

  const routes = [
    "/",
    "/about",
    "/services",
    "/portfolio",
    "/blog",
    "/contact",
    "/cookie-notice-policy",
    "/privacy-notice",
    "/portfolio/nacre",
    "/portfolio/crescendo",
    "/portfolio/ezra-court",
    "/portfolio/arabella",
    ...BLOG_POSTS.map((post) => `/blog/${post.slug}`),
  ];

  return routes.map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
  }));
}

