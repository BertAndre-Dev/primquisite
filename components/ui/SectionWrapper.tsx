import type { ReactNode } from "react";

type SectionWrapperProps = {
  title: string;
  description?: string;
  children: ReactNode;
};

export function SectionWrapper({
  title,
  description,
  children,
}: SectionWrapperProps) {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-16">
      <h2 className="text-3xl font-semibold tracking-tight">{title}</h2>
      {description ? <p className="mt-2 text-black/70">{description}</p> : null}
      <div className="mt-6">{children}</div>
    </section>
  );
}
