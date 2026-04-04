"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useMemo, useState } from "react";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { LANDING_PROJECTS } from "@/constants/projects";
import { EASE_OUT, staggerDelaySeconds } from "@/lib/motion";
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
  const reduce = useReducedMotion();

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
                      ? "cursor-pointer rounded-md bg-[#D4A35A] px-4 py-2 text-sm font-semibold text-white transition-all duration-200 ease-out hover:opacity-95 active:scale-[0.97] motion-reduce:active:scale-100"
                      : "cursor-pointer text-sm font-medium text-black transition-colors duration-200 ease-out hover:text-black/70 active:scale-[0.98] motion-reduce:active:scale-100"
                  }
                >
                  {label}
                </button>
              );
            })}
          </div>
        </div>

        <ul className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:gap-10">
          {visible.map((project, i) => (
            <motion.li
              key={project.id}
              layout
              initial={reduce ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.38,
                ease: EASE_OUT,
                delay: reduce ? 0 : staggerDelaySeconds(i),
              }}
            >
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
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}