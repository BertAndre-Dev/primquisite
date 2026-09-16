"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import type { BlogPost } from "@/constants/blog";
import { formatBlogDate, getBlogReadingMinutes } from "@/constants/blog";

type BlogFeaturedProps = {
  readonly post: BlogPost;
};

export function BlogFeatured({ post }: BlogFeaturedProps) {
  const href = `/blog/${post.slug}`;
  const minutes = getBlogReadingMinutes(post);
  const reduce = useReducedMotion();

  return (
    <article className="relative">
      <Link
        href={href}
        className="group relative block overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4A35A] focus-visible:ring-offset-2 focus-visible:ring-offset-[#FAF9F6]"
        aria-label={`Read: ${post.title}`}
      >
        <motion.div
          className="relative aspect-[16/10] w-full overflow-hidden bg-neutral-200 md:aspect-[21/9]"
          whileTap={reduce ? undefined : { scale: 0.992 }}
          transition={{ type: "spring", bounce: 0, duration: 0.35 }}
        >
          <Image
            src={post.coverImage}
            alt={post.coverImageAlt}
            fill
            priority
            className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.02] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
            sizes="100vw"
          />
          {/* Material gradient — hierarchy without floating badges */}
          <div
            className="absolute inset-0 bg-gradient-to-t from-[#0a2438]/85 via-[#0a2438]/35 to-transparent"
            aria-hidden
          />
          <div
            className="absolute inset-x-0 bottom-0 bg-[#0a2438]/25 backdrop-blur-[2px] md:backdrop-blur-[6px]"
            style={{
              maskImage:
                "linear-gradient(to top, black 55%, transparent 100%)",
              WebkitMaskImage:
                "linear-gradient(to top, black 55%, transparent 100%)",
            }}
            aria-hidden
          >
            <div className="px-5 pb-6 pt-16 md:px-10 md:pb-10 md:pt-24 lg:px-14">
              <div className="mx-auto w-full max-w-7xl">
                <p className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#C5A059] md:text-xs">
                  <span>Latest</span>
                  <span className="text-white/35" aria-hidden>
                    ·
                  </span>
                  <time dateTime={post.publishedAt} className="text-white/80">
                    {formatBlogDate(post.publishedAt)}
                  </time>
                  <span className="text-white/35" aria-hidden>
                    ·
                  </span>
                  <span className="text-white/80">{minutes} min read</span>
                </p>
                <h2 className="mt-3 max-w-3xl text-2xl font-bold leading-[1.08] tracking-[-0.02em] text-white md:mt-4 md:text-4xl md:leading-[1.05] lg:text-5xl">
                  {post.title}
                </h2>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/85 md:mt-4 md:text-base md:leading-7">
                  {post.excerpt}
                </p>
                <span className="mt-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.15em] text-white transition-transform duration-100 ease-out group-active:scale-[0.97] motion-reduce:group-active:scale-100 md:mt-8">
                  Read article
                  <Image
                    src="/arrow_outward.svg"
                    alt=""
                    width={16}
                    height={16}
                    aria-hidden
                    className="brightness-0 invert"
                  />
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </Link>
    </article>
  );
}
