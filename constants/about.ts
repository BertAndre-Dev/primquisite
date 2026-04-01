export type MissionVisionSlide = {
  id: "mission" | "vision";
  title: string;
  body: string;
};

export const MISSION_VISION_SLIDES: MissionVisionSlide[] = [
  {
    id: "mission",
    title: "Mission",
    body: "To deliver real estate investments that create long-term value through strong execution, transparency, and quality.",
  },
  {
    id: "vision",
    title: "Vision",
    body: "To become a leading real estate company in Africa known for premium developments and intelligent estate ecosystems.",
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
