import type { Project } from "@/types";

export const LANDING_PROJECTS: Project[] = [
  {
    id: "arabella",
    title: "Arabella",
    location: "Lekki Phase 1",
    imageSrc: "/arabella/arabella-9.png",
    status: "active",
    slug: "arabella",
    badges: ["Residential", "Luxury Homes", "Ongoing"],
  },
  {
    id: "ezra-court",
    title: "Ezra Court",
    location: "Lekki",
    imageSrc: "/hero/ezra.svg",
    status: "active",
    slug: "ezra-court",
    badges: ["Residential", "Luxury Homes"],
    soldOut: true,
  },
  {
    id: "crescendo",
    title: "Crescendo",
    location: "Lekki Phase 1",
    imageSrc: "/crescendo/crescendo-5.JPG",
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
