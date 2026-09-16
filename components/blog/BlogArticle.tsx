import Image from "next/image";
import Link from "next/link";
import type { BlogPost } from "@/constants/blog";
import { formatBlogDate, getBlogReadingMinutes } from "@/constants/blog";
import { ScrollReveal } from "@/components/motion/ScrollReveal";

type BlogArticleProps = {
  readonly post: BlogPost;
};

export function BlogArticle({ post }: BlogArticleProps) {
  const minutes = getBlogReadingMinutes(post);

  return (
    <article className="bg-[#FAF9F6]">
      <header className="px-4 pb-8 pt-28 md:px-6 md:pb-10 md:pt-32 lg:px-8">
        <div className="mx-auto w-full max-w-3xl">
          <nav
            className="flex flex-wrap items-center text-xs font-medium uppercase tracking-[0.2em] text-black/55"
            aria-label="Breadcrumb"
          >
            <Link
              href="/"
              className="transition-colors duration-100 ease-out hover:text-black active:scale-[0.97] motion-reduce:active:scale-100"
            >
              Home
            </Link>
            <span className="mx-2 text-black/30" aria-hidden>
              -
            </span>
            <Link
              href="/blog"
              className="transition-colors duration-100 ease-out hover:text-black active:scale-[0.97] motion-reduce:active:scale-100"
            >
              Blog
            </Link>
            <span className="mx-2 text-black/30" aria-hidden>
              -
            </span>
            <span className="text-[#C5A059]">Article</span>
          </nav>

          <p className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-semibold uppercase tracking-[0.15em] text-[#C5A059]">
            <time dateTime={post.publishedAt}>
              {formatBlogDate(post.publishedAt)}
            </time>
            <span className="text-black/25" aria-hidden>
              ·
            </span>
            <span className="text-black/45">{minutes} min read</span>
          </p>

          <h1 className="mt-4 max-w-3xl text-3xl font-bold leading-[1.08] tracking-[-0.025em] text-black md:text-4xl lg:text-5xl lg:leading-[1.05]">
            {post.title}
          </h1>
        </div>
      </header>

      <div className="w-full">
        <div className="relative mx-auto aspect-[16/9] w-full max-w-5xl overflow-hidden bg-neutral-200 md:aspect-[21/9]">
          <Image
            src={post.coverImage}
            alt={post.coverImageAlt}
            fill
            priority
            className="object-cover object-center"
            sizes="(max-width: 1280px) 100vw, 1280px"
          />
        </div>
      </div>

      <div className="bg-white">
        <div className="mx-auto w-full max-w-3xl px-4 py-12 md:px-6 md:py-16 lg:px-0">
          <div className="space-y-6 text-base leading-relaxed text-neutral-700 md:text-lg md:leading-8">
            {post.intro.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-14 space-y-14">
            {post.sections.map((section, index) => (
              <ScrollReveal
                key={section.heading}
                delay={Math.min(index * 0.04, 0.16)}
                distance={12}
                duration={0.32}
              >
                <section>
                  <h2 className="text-2xl font-bold leading-snug tracking-[-0.02em] text-black md:text-3xl">
                    {section.heading}
                  </h2>

                  <div
                    className={
                      section.imageAfter
                        ? "mt-5 grid items-start gap-8 md:grid-cols-2 md:gap-10"
                        : "mt-5"
                    }
                  >
                    <div className="space-y-5 text-base leading-relaxed text-neutral-700 md:text-lg md:leading-8">
                      {section.paragraphs.map((paragraph, pIndex) => (
                        <div key={paragraph}>
                          <p>{paragraph}</p>
                          {section.bullets &&
                          pIndex === (section.bulletsAfter ?? 0) ? (
                            <ul className="mt-5 space-y-3 pl-1">
                              {section.bullets.map((item) => (
                                <li key={item} className="flex gap-3">
                                  <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#C5A059]" />
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          ) : null}
                        </div>
                      ))}
                    </div>

                    {section.imageAfter ? (
                      <figure className="md:sticky md:top-28">
                        <div className="relative mx-auto h-[360px] w-full max-w-sm overflow-hidden bg-neutral-100 ring-1 ring-black/5 md:mx-0 md:h-[420px] md:max-w-none">
                          <Image
                            src={section.imageAfter.src}
                            alt={section.imageAfter.alt}
                            fill
                            className="object-cover object-top"
                            sizes="(max-width: 768px) 100vw, 50vw"
                          />
                        </div>
                      </figure>
                    ) : null}
                  </div>
                </section>
              </ScrollReveal>
            ))}
          </div>

          <div className="mt-16 border-t border-black/8 pt-10">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 rounded-md bg-black/[0.04] px-4 py-2.5 text-sm font-semibold uppercase tracking-[0.15em] text-[#C5A059] backdrop-blur-sm transition-[color,transform,background-color] duration-100 ease-out hover:bg-black/[0.06] hover:text-[#a8843f] active:scale-[0.97] motion-reduce:active:scale-100"
            >
              <span aria-hidden>←</span>
              <span>Back to blog</span>
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
