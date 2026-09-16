import { BlogCard } from "@/components/blog/BlogCard";
import { BlogFeatured } from "@/components/blog/BlogFeatured";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import type { BlogPost } from "@/constants/blog";

type BlogIndexSectionProps = {
  readonly posts: readonly BlogPost[];
};

export function BlogIndexSection({ posts }: BlogIndexSectionProps) {
  const [featured, ...rest] = posts;

  if (!featured) return null;

  return (
    <>
      <section className="bg-[#FAF9F6]">
        <div className="mx-auto w-full max-w-7xl px-4 pt-10 md:px-6 md:pt-14 lg:px-8">
          <ScrollReveal distance={12} duration={0.35}>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C5A059]">
              Insights
            </p>
            <h2 className="mt-3 max-w-xl text-2xl font-bold leading-[1.08] tracking-[-0.02em] text-black md:text-3xl">
              Ideas shaping how we build and live
            </h2>
          </ScrollReveal>
        </div>

        <div className="mt-8 md:mt-10">
          <ScrollReveal distance={14} duration={0.4}>
            <BlogFeatured post={featured} />
          </ScrollReveal>
        </div>
      </section>

      {rest.length > 0 ? (
        <section className="bg-white px-4 py-14 md:px-6 md:py-20 lg:px-8">
          <div className="mx-auto w-full max-w-7xl">
            <ScrollReveal distance={10} duration={0.3}>
              <div className="flex items-end justify-between gap-4 border-b border-black/8 pb-6">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C5A059]">
                    More to read
                  </p>
                  <h2 className="mt-2 text-xl font-bold tracking-[-0.02em] text-black md:text-2xl">
                    Earlier perspectives
                  </h2>
                </div>
                <p className="hidden text-sm text-black/45 sm:block">
                  {rest.length} article{rest.length === 1 ? "" : "s"}
                </p>
              </div>
            </ScrollReveal>

            <ul className="divide-y divide-black/8">
              {rest.map((post, index) => (
                <li key={post.slug} className="py-8 md:py-10">
                  <ScrollReveal
                    delay={Math.min(index * 0.05, 0.2)}
                    distance={12}
                    duration={0.32}
                  >
                    <BlogCard post={post} />
                  </ScrollReveal>
                </li>
              ))}
            </ul>
          </div>
        </section>
      ) : null}
    </>
  );
}
