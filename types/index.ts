export type NavLink = {
  href: string;
  label: string;
};

export type ContactPayload = {
  name: string;
  email: string;
  message: string;
};

export type ProjectStatus = "active" | "ongoing";

export type Project = {
  id: string;
  title: string;
  location: string;
  imageSrc: string;
  status: ProjectStatus;
  /** If set, project card links here instead of /products#id */
  slug?: string;
  badges?: string[];
};

/** Full-bleed image card with overlay title (service pillars, feature strips). */
export type OverlayImageCardData = {
  backgroundImage: string;
  title: string;
  alt: string;
};
