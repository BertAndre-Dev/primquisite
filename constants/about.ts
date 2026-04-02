export type AboutCarouselMissionVisionSlide = {
  id: "mission-vision";
  layout: "mission-vision";
  leftImage: string;
  leftImageAlt: string;
  mission: { body: string };
  vision: { body: string };
};

export type AboutCarouselBulletsSlide = {
  id: "approach" | "why";
  layout: "bullets";
  title: string;
  leftImage: string;
  leftImageAlt: string;
  intro: string;
  bullets: string[];
  closing?: string;
};

export type AboutCarouselSlide =
  | AboutCarouselMissionVisionSlide
  | AboutCarouselBulletsSlide;

export const ABOUT_CAROUSEL_SLIDES: AboutCarouselSlide[] = [
  {
    id: "mission-vision",
    layout: "mission-vision",
    leftImage: "/about/mission.svg",
    leftImageAlt: "Primquisite residential development at dusk",
    mission: {
      body: "To deliver real estate investments that create long-term value through strong execution, transparency, and quality.",
    },
    vision: {
      body: "To become a leading real estate company in Africa known for premium developments and intelligent estate ecosystems.",
    },
  },
  {
    id: "approach",
    layout: "bullets",
    title: "OUR APPROACH",
    leftImage: "/about/engineer.svg",
    leftImageAlt: "Construction and project delivery",
    intro: "We operate across the full lifecycle:",
    bullets: [
      "Land acquisition & feasibility",
      "Development & construction",
      "Digital property management",
      "Long-term asset optimization",
    ],
    closing:
      "This ensures accountability at every stage and not just at handover.",
  },
  {
    id: "why",
    layout: "bullets",
    title: "WHY WE EXIST",
    leftImage: "/about/house.svg",
    leftImageAlt: "Modern residential development",
    intro: "We address key industry challenges:",
    bullets: [
      "Poor construction quality",
      "Weak estate management",
      "Fragmented service delivery",
      "Lack of investor transparency",
      "Limited operational data",
    ],
  },
];

export type CoreValueCard = {
  title: string;
  description: string;
  image: string;
};

export const CORE_VALUES: CoreValueCard[] = [
  {
    title: "Execution Over Promise",
    description: "We are measured by what we deliver.",
    image: "/images/landing/why.svg",
  },
  {
    title: "Community-First development",
    description: "We build for long term living, not short-term gain",
    image: "/about/team.svg",
  },
  {
    title: "Transparency at baseline",
    description: "We communicate clearly and consistently",
    image: "/about/transparancy.svg",
  },
  {
    title: "Technology as infrastructure",
    description: "Digital systems are embedded in every project",
    image: "/about/technology.svg",
  },
];
