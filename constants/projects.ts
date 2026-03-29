import type { Project } from "@/types";

export const LANDING_PROJECTS: Project[] = [
  {
    id: "arabella",
    title: "Arabella",
    location: "Lekki Phase 1",
    imageSrc: "/hero/arabella.svg",
    status: "active",
    badges: ["Residential", "Luxury Homes"],
  },
  {
    id: "ezra-court",
    title: "Ezra Court",
    location: "Lekki",
    imageSrc: "/hero/ezra.svg",
    status: "active",
    badges: ["Residential", "Luxury Homes"],
  },
  {
    id: "crescendo",
    title: "Crescendo",
    location: "Lekki Phase 1",
    imageSrc: "/hero/cresendo.svg",
    status: "ongoing",
    slug: "crescendo",
    badges: ["Residential", "Luxury Homes", "Active"],
  },
  {
    id: "nacre",
    title: "Nacre",
    location: "Ikoyi",
    imageSrc: "/hero/nacre.svg",
    status: "ongoing",
    slug: "nacre",
    badges: ["Residential", "Luxury Homes", "Active"],
  },
];
