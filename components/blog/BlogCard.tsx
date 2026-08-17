import Image from "next/image";
import Link from "next/link";
import type { BlogPost } from "@/constants/blog";
import { formatBlogDate } from "@/constants/blog";

type BlogCardProps = {
  readonly post: BlogPost;
};

export function BlogCard({ post }: BlogCardProps) {
  const href = `/blog/${post.slug}`;

  return (
    <article>
      <Link
        href={href}
        className="group relative block aspect-16/5 overflow-hidden rounded-lg bg-neutral-200 shadow-sm transition-all duration-200 ease-out hover:-translate-y-0.5 hover:shadow-xl motion-reduce:transition-none motion-reduce:hover:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4A35A] focus-visible:ring-offset-2"
      >
        <Image
          src={post.coverImage}
          alt={post.coverImageAlt}
          fill
          className="object-cover object-left transition-transform duration-500 ease-out group-hover:scale-[1.03] motion-reduce:group-hover:scale-100"
          sizes="(max-width: 768px) 100vw, 66vw"
        />
        <div className="absolute inset-0 bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <span className="rounded-full bg-black/60 px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.15em] text-white">
            Read article
          </span>
        </div>
      </Link>

      <div className="mt-5 text-left">
        <time
          dateTime={post.publishedAt}
          className="text-xs font-semibold uppercase tracking-[0.15em] text-[#C5A059]"
        >
          {formatBlogDate(post.publishedAt)}
        </time>
        <h2 className="mt-2 text-xl font-bold leading-snug tracking-[-0.015em] text-black md:text-2xl">
          <Link
            href={href}
            className="transition-colors duration-200 ease-out hover:text-black/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4A35A] focus-visible:ring-offset-2"
          >
            {post.title}
          </Link>
        </h2>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-black/65 md:text-base">
          {post.excerpt}
        </p>
        <Link
          href={href}
          className="mt-6 inline-flex items-center gap-2 rounded-md bg-[#CBA668] px-6 py-3 text-xs font-semibold uppercase tracking-[0.15em] text-white transition-all duration-200 ease-out hover:opacity-95 active:scale-[0.97] motion-reduce:active:scale-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#CBA668]/70 focus-visible:ring-offset-2"
        >
          Read more
          <Image
            src="/arrow_outward.svg"
            alt=""
            width={18}
            height={18}
            aria-hidden
          />
        </Link>
      </div>
    </article>
  );
}
