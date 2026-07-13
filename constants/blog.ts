export type BlogSection = {
  heading: string;
  paragraphs: string[];
  /** Optional bullet list after the paragraphs */
  bullets?: string[];
  /** Place an in-article image after this section */
  imageAfter?: {
    src: string;
    alt: string;
  };
};

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  publishedAt: string;
  coverImage: string;
  coverImageAlt: string;
  intro: string[];
  sections: BlogSection[];
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "the-future-of-residential-living-in-nigeria",
    title: "The Future of Residential Living in Nigeria",
    excerpt:
      "Modern homeowners in Nigeria are no longer looking for just a house, they're looking for a lifestyle. Here's how residential living is evolving.",
    publishedAt: "2026-07-13",
    coverImage: "/blog/blog-1.jpeg",
    coverImageAlt:
      "Modern residential living — the future of homes and communities in Nigeria",
    intro: [
      "For many years, buying a home in Nigeria meant one thing: finding a good location and building a solid structure. If the walls were strong, the roof didn't leak, and the neighborhood was relatively secure, most people considered it a worthwhile investment. Today, that definition is changing. Modern homeowners are no longer looking for just a house, they're looking for a lifestyle. They want communities that are safe, well-managed, environmentally responsible, and designed to support the way people live, work, and connect. As cities continue to grow and technology reshapes everyday life, residential developments must evolve to meet new expectations. The future of residential living in Nigeria isn't simply about constructing more homes. It's about creating communities where people can thrive.",
    ],
    sections: [
      {
        heading: "Homebuyers Are Looking Beyond Four Walls",
        paragraphs: [
          "Today's buyers are more informed than ever. Before making one of the biggest financial decisions of their lives, they want to know more than the number of bedrooms or the size of the living room. They ask questions like:",
          "These questions reflect a growing shift in priorities. Buyers are placing greater importance on quality of life, long-term value, and the overall experience of living in a community.",
        ],
        bullets: [
          "Will this community remain valuable in the next ten years?",
          "Is the environment safe and well maintained?",
          "How easy will it be to access essential services?",
          "Will my family enjoy living here?",
        ],
      },
      {
        heading: "Communities Will Matter More Than Individual Homes",
        paragraphs: [
          "A beautiful house can lose its appeal if it's surrounded by poor infrastructure, inconsistent maintenance, or a lack of community planning.",
          "The residential developments of the future will focus on creating complete communities rather than isolated buildings. This includes thoughtfully planned roads, green spaces, reliable infrastructure, recreational areas, security, and amenities that encourage interaction among residents. People don't just invest in a property, they invest in the environment that surrounds it.",
        ],
      },
      {
        heading: "Sustainability Is Becoming a Necessity",
        paragraphs: [
          "Sustainable development is no longer a global trend that only applies to developed countries. It is becoming increasingly relevant in Nigeria as homeowners seek more efficient and environmentally conscious communities. Features such as energy-efficient lighting, proper waste management systems, water conservation measures, natural ventilation, and thoughtfully designed green spaces can reduce long-term operating costs while improving residents' quality of life. Developments that embrace sustainable practices are also better positioned to remain attractive and valuable as market expectations continue to evolve.",
        ],
        imageAfter: {
          src: "/blog/blog-1a.jpeg",
          alt: "Sustainable residential living and community design in Nigeria",
        },
      },
      {
        heading: "Technology Is Reshaping Everyday Living",
        paragraphs: [
          "Technology is transforming how residential communities operate. From digital visitor management and maintenance requests to online communication and streamlined estate services, homeowners increasingly expect convenience to be built into the communities where they live. Rather than replacing the human element of estate management, technology strengthens it by making communication faster, services more accessible, and daily operations more efficient. The future belongs to communities where technology quietly enhances the resident experience without becoming complicated or intrusive.",
        ],
      },
      {
        heading: "Quality Construction Will Always Be the Foundation",
        paragraphs: [
          "While innovation is important, it can never replace quality. Strong engineering, durable materials, thoughtful architectural design, and attention to detail remain the foundation of every successful residential development. The homes that continue to appreciate in value over time are those built with longevity in mind, not just speed or short-term profit. A truly future-ready development combines timeless construction standards with modern design and practical innovation.",
        ],
      },
      {
        heading: "Building for Tomorrow Starts Today",
        paragraphs: [
          "Nigeria's housing landscape is evolving rapidly. As urban populations continue to grow and buyer expectations become more sophisticated, developers have an opportunity and a responsibility to think beyond construction. The future of residential living will be defined by developments that balance quality, sustainability, innovation, and community. These are the places where families will build memories, professionals will find convenience, and investors will see lasting value. At Primquisite Real Estate, we believe every development should do more than provide shelter. It should create an environment where people can live confidently today while investing in a better tomorrow. Because the future of residential living isn't just about where people live—it's about how they live.",
        ],
      },
    ],
  },
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((post) => post.slug === slug);
}

export function getAllBlogSlugs(): string[] {
  return BLOG_POSTS.map((post) => post.slug);
}

export function formatBlogDate(isoDate: string): string {
  return new Date(isoDate).toLocaleDateString("en-NG", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
