"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import type { BlogPost } from "@/constants/blog";
import { formatBlogDate, getBlogReadingMinutes } from "@/constants/blog";

type BlogCardProps = {
  readonly post: BlogPost;
};

export function BlogCard({ post }: BlogCardProps) {
  const href = `/blog/${post.slug}`;
  const minutes = getBlogReadingMinutes(post);
  const reduce = useReducedMotion();

  return (
    <motion.article
      whileTap={reduce ? undefined : { scale: 0.99 }}
      transition={{ type: "spring", bounce: 0, duration: 0.3 }}
    >
      <Link
        href={href}
        className="group grid grid-cols-1 items-center gap-5 rounded-sm py-1 outline-offset-4 transition-colors duration-150 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4A35A] focus-visible:ring-offset-2 sm:grid-cols-[minmax(0,220px)_minmax(0,1fr)] sm:gap-8 md:grid-cols-[minmax(0,280px)_minmax(0,1fr)] md:gap-10"
      >
        <div className="relative aspect-[16/10] overflow-hidden bg-neutral-200 ring-1 ring-black/5">
          <Image
            src={post.coverImage}
            alt={post.coverImageAlt}
            fill
            className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
            sizes="(max-width: 640px) 100vw, 280px"
          />
        </div>

        <div className="min-w-0 text-left">
          <p className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#C5A059] md:text-xs">
            <time dateTime={post.publishedAt}>
              {formatBlogDate(post.publishedAt)}
            </time>
            <span className="text-black/25" aria-hidden>
              ·
            </span>
            <span className="text-black/45">{minutes} min read</span>
          </p>
          <h2 className="mt-2 text-xl font-bold leading-snug tracking-[-0.02em] text-black transition-colors duration-150 ease-out group-hover:text-black/75 md:text-2xl md:leading-[1.15]">
            {post.title}
          </h2>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-black/60 md:mt-3 md:text-base md:leading-7">
            {post.excerpt}
          </p>
          <span className="mt-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#C5A059] transition-transform duration-100 ease-out group-active:scale-[0.97] motion-reduce:group-active:scale-100 md:mt-5">
            Read more
            <Image
              src="/arrow_outward.svg"
              alt=""
              width={16}
              height={16}
              aria-hidden
              className="opacity-80"
            />
          </span>
        </div>
      </Link>
    </motion.article>
  );
}
