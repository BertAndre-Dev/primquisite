"use client";

import { useMemo, useState } from "react";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { LANDING_PROJECTS } from "@/constants/projects";
import type { ProjectStatus } from "@/types";

type Filter = "all" | ProjectStatus;

const FILTERS: { key: Filter; label: string }[] = [
  { key: "all", label: "All" },
  { key: "active", label: "Active" },
  { key: "ongoing", label: "Ongoing" },
];

interface HomeProjectsSectionProps {
  /** Section heading. Defaults to "Our Projects". Pass false to hide it. */
  title?: string | false;
}

export function HomeProjectsSection({ title = "Our Projects" }: HomeProjectsSectionProps) {
  const [filter, setFilter] = useState<Filter>("all");

  const visible = useMemo(() => {
    if (filter === "all") return LANDING_PROJECTS;
    return LANDING_PROJECTS.filter((p) => p.status === filter);
  }, [filter]);

  return (
    <section className="bg-white px-4 py-14 md:px-6 md:py-20 lg:px-8">
      <div className="mx-auto w-full max-w-7xl">
        <div className="mb-10 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          {title !== false && (
            <h2 className="text-2xl font-bold uppercase tracking-wide text-black md:text-3xl">
              {title}
            </h2>
          )}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 cursor-pointer">
            {FILTERS.map(({ key, label }) => {
              const selected = filter === key;
              return (
                <button
                  key={key}
                  type="button"
                  onClick={() => setFilter(key)}
                  // aria-pressed={selected ? "true" : "false"}
                  className={
                    selected
                      ? "rounded-md bg-[#D4A35A] px-4 py-2 text-sm font-semibold text-white transition hover:opacity-95 cursor-pointer"
                      : "text-sm font-medium text-black transition hover:text-black/70 cursor-pointer"
                  }
                >
                  {label}
                </button>
              );
            })}
          </div>
        </div>

        <ul className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:gap-10">
          {visible.map((project) => (
            <li key={project.id}>
              <ProjectCard
                title={project.title}
                location={project.location}
                imageSrc={project.imageSrc}
                href={
                  project.slug
                    ? `/portfolio/${project.slug}`
                    : `/portfolio#${project.id}`
                }
                badges={project.badges}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}