export type HeroSlide = {
  image: string;
  title: string;
  titleVariant?: "beyond-brick";
  subtitle: string;
  cta: string;
  ctaHref: string;
};

export const HERO_SLIDES: HeroSlide[] = [
  {
    image: "/hero/building.svg",
    title: "BUILDING BEYOND BRICK",
    titleVariant: "beyond-brick",
    subtitle:
      "Developing premium properties. Deploying intelligent estate technology. Creating communities that endure.",
    cta: "EXPLORE OUR PORTFOLIO",
    ctaHref: "/products",
  },
  {
    image: "/hero/arabella.svg",
    title: "ARABELLA",
    subtitle:
      "A premium residential development delivering comfort, security, and strong asset value.",
    cta: "VIEW PROJECT",
    ctaHref: "/products",
  },
  {
    image: "/hero/nacre.svg",
    title: "NACRE, IKOYI",
    subtitle:
      "A luxury residential development in one of Lagos' most prestigious locations.",
    cta: "VIEW PROJECT",
    ctaHref: "/products",
  },
  {
    image: "/hero/cresendo.svg",
    title: "CRESCENDO",
    subtitle:
      "An ongoing development focused on lifestyle, sustainability, and modern living.",
    cta: "VIEW PROJECT",
    ctaHref: "/products",
  },
  {
    image: "/hero/ezra.svg",
    title: "EZRA COURT",
    subtitle:
      "A well-planned residential community combining thoughtful design with quality finishes.",
    cta: "VIEW PROJECT",
    ctaHref: "/products",
  },
];

/** Same asset as the first landing slide — use for inner-page hero backgrounds. */
export const HERO_FIRST_SLIDE_IMAGE = HERO_SLIDES[0].image;
