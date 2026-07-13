import Image from "next/image";
import Link from "next/link";
import type { BlogPost } from "@/constants/blog";
import { formatBlogDate } from "@/constants/blog";
import { ScrollReveal } from "@/components/motion/ScrollReveal";

type BlogArticleProps = {
  readonly post: BlogPost;
};

export function BlogArticle({ post }: BlogArticleProps) {
  return (
    <article className="bg-white">
      <header className="px-4 pb-8 pt-28 md:px-6 md:pb-10 md:pt-32 lg:px-8">
        <div className="mx-auto w-full max-w-5xl">
          <nav
            className="flex flex-wrap items-center text-xs font-medium uppercase tracking-[0.2em] text-black/55"
            aria-label="Breadcrumb"
          >
            <Link href="/" className="hover:text-black">
              Home
            </Link>
            <span className="mx-2 text-black/30" aria-hidden>
              -
            </span>
            <Link href="/blog" className="hover:text-black">
              Blog
            </Link>
            <span className="mx-2 text-black/30" aria-hidden>
              -
            </span>
            <span className="text-[#C5A059]">Article</span>
          </nav>

          <time
            dateTime={post.publishedAt}
            className="mt-8 block text-xs font-semibold uppercase tracking-[0.15em] text-[#C5A059]"
          >
            {formatBlogDate(post.publishedAt)}
          </time>

          <h1 className="mt-4 max-w-3xl text-3xl font-bold leading-tight tracking-tight text-black md:text-4xl lg:text-5xl">
            {post.title}
          </h1>
        </div>
      </header>

      <div className="mx-auto w-full max-w-4xl px-4 md:px-6 lg:px-8">
        <div className="relative aspect-16/5 overflow-hidden rounded-lg bg-neutral-100 shadow-sm">
          <Image
            src={post.coverImage}
            alt={post.coverImageAlt}
            fill
            priority
            className="object-cover object-left"
            sizes="(max-width: 1024px) 100vw, 1024px"
          />
        </div>
      </div>

      <div className="mx-auto w-full max-w-4xl px-4 py-12 md:px-6 md:py-16 lg:px-0">
        <div className="space-y-6 text-base leading-relaxed text-neutral-700 md:text-lg">
          {post.intro.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <div className="mt-14 space-y-14">
          {post.sections.map((section) => (
            <ScrollReveal key={section.heading}>
              <section>
                <h2 className="text-2xl font-bold tracking-tight text-black md:text-3xl">
                  {section.heading}
                </h2>

                <div
                  className={
                    section.imageAfter
                      ? "mt-5 grid items-start gap-8 md:grid-cols-2 md:gap-10"
                      : "mt-5"
                  }
                >
                  <div className="space-y-5 text-base leading-relaxed text-neutral-700 md:text-lg">
                    {section.paragraphs.map((paragraph, index) => (
                      <div key={paragraph}>
                        <p>{paragraph}</p>
                        {section.bullets && index === 0 ? (
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
                      <div className="relative mx-auto h-[360px] w-full max-w-sm overflow-hidden rounded-lg bg-neutral-100 shadow-sm md:mx-0 md:h-[420px] md:max-w-none">
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

        <div className="mt-16 border-t border-black/10 pt-10">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.15em] text-[#C5A059] transition-colors duration-200 ease-out hover:text-[#a8843f]"
          >
            <span aria-hidden>←</span>
            <span>Back to blog</span>
          </Link>
        </div>
      </div>
    </article>
  );
}
