import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base =
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ?? "https://primquisiterealestate.com";

  const routes = [
    "/",
    "/about",
    "/services",
    "/portfolio",
    "/contact",
    "/cookie-notice-policy",
    "/privacy-notice",
    "/portfolio/nacre",
    "/portfolio/crescendo",
    "/portfolio/ezra-court",
    "/portfolio/arabella",
  ];

  return routes.map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
  }));
}

