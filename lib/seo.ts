import type { Metadata } from "next";
import {
  SEO_DESCRIPTION,
  SEO_HOME_TITLE,
  SEO_KEYWORDS,
  SITE_NAME,
  getSiteName,
  getSiteUrl,
} from "@/constants/seo";

type PageMetadataInput = {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
  titleAbsolute?: boolean;
};

export function createPageMetadata({
  title,
  description,
  path,
  keywords = [],
  titleAbsolute = false,
}: PageMetadataInput): Metadata {
  const siteUrl = getSiteUrl();
  const siteName = getSiteName();
  const canonical = path ? `${siteUrl}${path}` : siteUrl;
  const allKeywords = [...new Set([...keywords, ...SEO_KEYWORDS])];

  return {
    title: titleAbsolute ? { absolute: title } : title,
    description,
    keywords: allKeywords,
    alternates: {
      canonical,
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName,
      images: [{ url: "/logo.svg", alt: siteName }],
      locale: "en_NG",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/logo.svg"],
    },
  };
}

export function getDefaultSiteMetadata(): Metadata {
  const siteUrl = getSiteUrl();
  const siteName = getSiteName();

  return {
    metadataBase: siteUrl ? new URL(siteUrl) : undefined,
    title: {
      default: SEO_HOME_TITLE,
      template: `%s | ${SITE_NAME}`,
    },
    description: SEO_DESCRIPTION,
    keywords: [...SEO_KEYWORDS],
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    icons: {
      icon: "/logo.svg",
      apple: "/logo.svg",
    },
    openGraph: {
      title: SEO_HOME_TITLE,
      description: SEO_DESCRIPTION,
      url: siteUrl,
      siteName,
      images: [{ url: "/logo.svg", alt: siteName }],
      locale: "en_NG",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: SEO_HOME_TITLE,
      description: SEO_DESCRIPTION,
      images: ["/logo.svg"],
    },
  };
}
