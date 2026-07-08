import {
  SEO_DESCRIPTION,
  SEO_KEYWORDS,
  SITE_CONTACT,
  getSiteName,
  getSiteUrl,
} from "@/constants/seo";

export function getOrganizationJsonLd() {
  const siteUrl = getSiteUrl();
  const siteName = getSiteName();

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Organization", "RealEstateAgent", "LocalBusiness"],
        "@id": `${siteUrl}/#organization`,
        name: siteName,
        url: siteUrl,
        logo: `${siteUrl}/logo.svg`,
        image: `${siteUrl}/logo.svg`,
        description: SEO_DESCRIPTION,
        email: SITE_CONTACT.email,
        telephone: SITE_CONTACT.phone,
        address: {
          "@type": "PostalAddress",
          streetAddress: SITE_CONTACT.streetAddress,
          addressLocality: SITE_CONTACT.addressLocality,
          addressRegion: SITE_CONTACT.addressRegion,
          addressCountry: SITE_CONTACT.addressCountry,
        },
        areaServed: [
          { "@type": "City", name: "Lagos" },
          { "@type": "AdministrativeArea", name: "Lekki Phase 1" },
          { "@type": "Country", name: "Nigeria" },
        ],
        knowsAbout: SEO_KEYWORDS.slice(0, 12),
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: siteName,
        description: SEO_DESCRIPTION,
        publisher: { "@id": `${siteUrl}/#organization` },
        inLanguage: "en-NG",
      },
    ],
  };
}
