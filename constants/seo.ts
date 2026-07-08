export const SITE_NAME = "Primquisite Real Estate";

export const SITE_URL_FALLBACK = "https://primquisiterealestate.com";

export const SITE_CONTACT = {
  email: "info@primquisiterealestate.com",
  phone: "+2349138667927",
  streetAddress: "20 Awudu Ekpheka Blvd",
  addressLocality: "Lekki Phase 1",
  addressRegion: "Lagos",
  addressCountry: "NG",
  formattedAddress:
    "20 Awudu Ekpheka Blvd, Lekki Phase 1, Lagos Nigeria.",
} as const;

export const SEO_KEYWORDS = [
  "Real estate agencies in Nigeria",
  "Real estate agencies in Lagos",
  "Property developers in Lagos",
  "Property developers in Nigeria",
  "Property management companies in Lagos",
  "Property management companies in Nigeria",
  "Real estate agents in Lagos",
  "Real estate agents in Nigeria",
  "Real estate developers in Lagos",
  "Real estate developers in Nigeria",
  "Primquisite Real Estate",
  "Lekki Phase 1 real estate",
  "Ikoyi property developer",
  "Lagos luxury homes",
  "Nigeria property investment",
  "residential development Lagos",
  "estate management Lagos",
  "premium real estate Lagos",
  "property development company Nigeria",
  "Lagos real estate company",
] as const;

export const SEO_DESCRIPTION =
  "Primquisite Real Estate is a property developer and real estate agency in Lagos, Nigeria, offering property development, property management, and expert real estate agents across Lagos and Nigeria.";

export const SEO_HOME_TITLE =
  "Primquisite Real Estate | Property Developers & Real Estate Agency in Lagos, Nigeria";

export function getSiteUrl(): string {
  return (
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ?? SITE_URL_FALLBACK
  );
}

export function getSiteName(): string {
  return process.env.NEXT_PUBLIC_SITE_NAME ?? SITE_NAME;
}
