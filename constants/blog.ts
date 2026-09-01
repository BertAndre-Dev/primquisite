export type BlogSection = {
  heading: string;
  paragraphs: string[];
  /** Optional bullet list after the paragraphs */
  bullets?: string[];
  /** Paragraph index after which to render bullets (defaults to 0) */
  bulletsAfter?: number;
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
    slug: "building-for-tomorrow-why-sustainable-development-matters-in-real-estate",
    title:
      "Building for Tomorrow: Why Sustainable Development Matters in Real Estate",
    excerpt:
      "Sustainable development balances economic value, environmental responsibility, and community wellbeing—creating properties that stay efficient, desirable, and valuable for decades.",
    publishedAt: "2026-08-26",
    coverImage: "/blog/blog-5.jpeg",
    coverImageAlt:
      "Sustainable residential development with green spaces and modern community planning",
    intro: [
      "Real estate is built to last. The decisions made during the planning and development of a property can influence its environmental impact, operating costs, community experience, and market value for decades.",
      "That is why sustainable development in real estate is becoming more than a trend. It is increasingly a practical approach to creating properties that remain valuable, efficient, and desirable over the long term.",
    ],
    sections: [
      {
        heading: "What Is Sustainable Development in Real Estate?",
        paragraphs: [
          "Sustainable real estate development focuses on creating buildings and communities that balance economic value, environmental responsibility, and social wellbeing.",
          "This can include energy-efficient buildings, responsible water management, green spaces, durable materials, efficient infrastructure, waste reduction, and community-focused planning.",
          "The goal is not simply to build greener properties. It is to create better-performing properties and healthier communities.",
        ],
      },
      {
        heading: "It Creates Long-Term Property Value",
        paragraphs: [
          "Property value is influenced by more than location and appearance. Buyers and investors are increasingly considering factors such as operating costs, infrastructure quality, accessibility, environmental performance, and the overall quality of the surrounding community.",
          "A well-planned sustainable development can therefore become more attractive to residents and investors while supporting long-term real estate value.",
        ],
      },
      {
        heading: "It Can Improve Energy and Resource Efficiency",
        paragraphs: [
          "Energy-efficient lighting, thoughtful building orientation, efficient appliances, water-saving systems, and appropriate landscaping can reduce unnecessary resource consumption.",
          "For property owners and residents, this can translate into more efficient operations and potentially lower running costs.",
        ],
      },
      {
        heading: "It Supports Healthier Communities",
        paragraphs: [
          "Sustainable development is also about people.",
          "Walkable streets, accessible green spaces, safe pedestrian routes, recreational areas, and thoughtfully designed public spaces can encourage interaction and improve the everyday experience of residents.",
          "A successful development should not only provide somewhere to live, it should help create a community people want to belong to.",
        ],
      },
      {
        heading: "It Helps Properties Adapt to the Future",
        paragraphs: [
          "The needs of cities and residents continue to change. Developments designed with sustainability, resilience, and adaptability in mind are better positioned to respond to changing environmental conditions, technology, regulations, and consumer expectations.",
          "This makes future-ready real estate development an important consideration for developers and investors.",
        ],
      },
      {
        heading: "Building Beyond Today",
        paragraphs: [
          "Sustainable development challenges the traditional idea that real estate success is measured only by what is built and how quickly it sells.",
          "The bigger question is: Will this development continue creating value years from now?",
          "From efficient infrastructure to green spaces and community-focused planning, sustainable choices can help create properties that perform better while contributing positively to their surroundings.",
          "At Primquisite Real Estate, we believe the future of real estate is not simply about building more. It is about building better, with long-term value, responsible development, and stronger communities in mind.",
        ],
      },
    ],
  },
  {
    slug: "why-walkable-communities-are-the-future-of-urban-living",
    title: "Why Walkable Communities Are the Future of Urban Living",
    excerpt:
      "Walkable neighbourhoods bring homes, amenities, and green spaces closer together—creating better everyday living and stronger long-term property value.",
    publishedAt: "2026-08-12",
    coverImage: "/blog/blog-4.jpeg",
    coverImageAlt:
      "Walkable urban neighbourhood with landscaped pedestrian pathways, trees, and nearby amenities",
    intro: [
      "Imagine living in a beautiful modern home, but needing a car every time you want to buy groceries, meet a neighbour, visit a green space, or simply take a walk.",
      "The house may be impressive, but the community isn't working as well as it could.",
      "Now imagine a neighbourhood where you can step outside and comfortably walk along landscaped pathways, access nearby amenities, enjoy green spaces, and interact with people around you.",
      "That is the idea behind walkable communities.",
    ],
    sections: [
      {
        heading: "More Than Just Walking",
        paragraphs: [
          "Walkability is not simply about creating sidewalks. It is about designing neighbourhoods around the needs of the people who live in them.",
          "A well-designed walkable community can bring homes, green spaces, recreational areas, essential services and social spaces closer together.",
          "This creates an environment where residents have more opportunities to move around without relying entirely on cars.",
          "For developers and property investors, this represents a shift in how we think about modern real estate development.",
          "The value of a property is increasingly connected to what surrounds it.",
        ],
      },
      {
        heading: "Walkability and Quality of Life",
        paragraphs: [
          "A community that encourages walking can contribute to a more active and connected lifestyle.",
          "Landscaped walkways can provide opportunities for exercise. Shared spaces can encourage residents to interact. Green areas can create places to relax, while thoughtfully planned streets can make neighbourhoods feel safer and more welcoming.",
          "These features may seem small individually, but together they can significantly influence the quality of life in a community.",
          "And when residents enjoy where they live, communities are more likely to remain attractive over time.",
        ],
      },
      {
        heading: "What Does This Mean for Property Value?",
        paragraphs: [
          "For property buyers and investors, location has always been important. But location is more than an address.",
          "It is also about accessibility, infrastructure, amenities and community design.",
          "A property located within a well-planned neighbourhood can offer advantages beyond the building itself. Good pedestrian infrastructure, attractive public spaces and convenient access to everyday facilities can make a development more desirable to current and future residents.",
          "This can support the long-term value of real estate investments.",
          "It is one reason sustainable property development is increasingly moving beyond energy efficiency and environmental considerations to include how communities function.",
        ],
      },
      {
        heading: "Building Communities, Not Just Buildings",
        paragraphs: [
          "The future of real estate will not simply be about constructing more homes.",
          "It will be about creating places where people can live, connect and thrive.",
          "For developers, that means asking bigger questions:",
          "These questions help transform a development from a collection of buildings into a genuine community.",
        ],
        bulletsAfter: 2,
        bullets: [
          "Can residents move around easily?",
          "Are there inviting public and green spaces?",
          "Are essential amenities accessible?",
          "Does the design encourage community interaction?",
          "Will the neighbourhood remain valuable and functional as it grows?",
        ],
      },
      {
        heading: "The Future Is Walkable",
        paragraphs: [
          "As cities grow and lifestyles evolve, people will increasingly look for neighbourhoods that offer convenience, connection and quality of life.",
          "Walkable communities can provide all three.",
          "At Primquisite Real Estate, we believe the best developments look beyond today's needs and consider the communities people will want to live in tomorrow.",
          "Because the future of real estate isn't just about where you live.",
          "It's about how you live there.",
        ],
      },
    ],
  },
  {
    slug: "how-green-spaces-create-healthier-communities-and-stronger-property-values",
    title:
      "How Green Spaces Create Healthier Communities and Stronger Property Values",
    excerpt:
      "Parks, landscaped gardens, and open recreational areas are essential to modern communities—and a smart investment in quality of life and long-term property value.",
    publishedAt: "2026-08-05",
    coverImage: "/blog/blog-3.jpeg",
    coverImageAlt:
      "Modern residential development with landscaped green spaces, tree-lined walkways, and parks",
    intro: [
      "When people think about valuable real estate, they often focus on location, architecture, or premium finishes. While these factors are important, one feature is becoming increasingly influential in determining both quality of life and long-term property value: green spaces.",
      "Parks, landscaped gardens, tree-lined streets, and open recreational areas are no longer considered luxury additions, they are essential elements of modern, sustainable communities. As cities become more densely populated, access to nature is playing a bigger role in where people choose to live and invest.",
      "For developers, homeowners, and investors, incorporating green spaces into residential communities is not just an environmental decision, it's a smart investment.",
    ],
    sections: [
      {
        heading: "Green Spaces Improve Everyday Living",
        paragraphs: [
          "A home is more than the building itself; it's the environment that surrounds it.",
          "Well-designed green spaces provide residents with places to relax, exercise, and spend time with family and neighbours. Whether it's a small community park, a landscaped courtyard, or shaded walkways, these spaces encourage outdoor activity and create opportunities for social interaction.",
          "Research has consistently shown that access to green environments can reduce stress, improve mental well-being, and promote healthier lifestyles. Children have safe areas to play, adults enjoy spaces to unwind, and communities become more connected through shared public spaces.",
          "When people enjoy where they live, they are more likely to stay, invest, and contribute to the long-term success of the community.",
        ],
      },
      {
        heading: "Green Communities Attract Buyers and Investors",
        paragraphs: [
          "Property buyers today are looking beyond square metres and floor plans. They want neighbourhoods that offer comfort, convenience, and a high quality of life.",
          "Developments with attractive landscaping, parks, and recreational spaces often stand out in competitive property markets because they offer more than just housing, they offer an enhanced living experience.",
          "For investors, this translates into stronger demand, higher occupancy rates, and greater long-term appreciation. Properties located in well-planned, green communities are often perceived as more desirable, helping them retain value over time.",
          "In today's market, investing in sustainable community design is also an investment in market competitiveness.",
        ],
      },
      {
        heading: "Sustainability Starts with Thoughtful Design",
        paragraphs: [
          "Green spaces play an important role in sustainable real estate development.",
          "Trees help reduce urban heat, improve air quality, and provide natural shade. Landscaped areas support biodiversity, reduce soil erosion, and improve rainwater absorption, helping communities better manage stormwater and reduce flooding risks.",
          "These environmental benefits align closely with Environmental, Social, and Governance (ESG) principles, which are increasingly influencing property development and investment decisions around the world.",
          "Developers who prioritise sustainability are not only protecting the environment, they are building communities that remain resilient and attractive for future generations.",
        ],
      },
      {
        heading: "The Long-Term Value of Community Planning",
        paragraphs: [
          "The most successful residential developments are designed with people in mind.",
          "Thoughtfully planned green spaces encourage walking, outdoor recreation, and stronger community relationships. They also complement other important features such as pedestrian-friendly streets, recreational facilities, and accessible public spaces.",
          "When these elements work together, they create neighbourhoods where residents feel safe, connected, and proud to live.",
          "This sense of belonging is one of the strongest drivers of long-term property value.",
        ],
      },
      {
        heading: "Investing in Better Communities",
        paragraphs: [
          "At Primquisite Real Estate, we believe that exceptional developments extend beyond buildings. They create environments where people can enjoy healthier lifestyles, stronger communities, and lasting value.",
          "Green spaces are not simply decorative features—they are investments in people, sustainability, and the future of every community.",
          "As the future of property development in Nigeria continues to evolve, communities that embrace thoughtful planning and sustainable design will remain the places where people want to live, work, and grow.",
          "Because great developments aren't measured only by the homes they build—but by the lives they help enrich.",
        ],
      },
    ],
  },
  {
    slug: "preventive-maintenance-the-secret-to-long-lasting-buildings",
    title: "Preventive Maintenance: The Secret to Long-Lasting Buildings",
    excerpt:
      "The difference between buildings that age well and those that deteriorate early often isn't construction quality — it's the quality of maintenance.",
    publishedAt: "2026-07-24",
    coverImage: "/blog/blog-2.jpeg",
    coverImageAlt:
      "Well-maintained modern residential terrace homes at sunset",
    intro: [
      "Walk through any city, and you'll notice an interesting contrast.",
      "Some buildings, despite being decades old, still look inviting. Their walls are well maintained, the surroundings are clean, the paintwork remains fresh, and everything—from the lighting to the landscaping, works as it should.",
      "Others begin to show signs of deterioration just a few years after completion. Cracked walls, leaking roofs, faulty electrical fittings, peeling paint, and poorly maintained common areas gradually diminish both the appearance and value of the property.",
      "The difference isn't always the quality of construction.",
      "More often than not, it's the quality of maintenance.",
      "Preventive maintenance is one of the most overlooked aspects of property ownership, yet it plays one of the biggest roles in preserving a building's lifespan, protecting investments, and ensuring a safe, comfortable living environment.",
    ],
    sections: [
      {
        heading: "Prevention Is Always Better Than Repair",
        paragraphs: [
          "Many property owners wait until something breaks before taking action. A leaking pipe is ignored until it floods a room. A small roof crack is left unattended until it causes water damage. An unusual electrical fault is overlooked until it becomes a major safety concern.",
          "While this approach may seem like a way to save money in the short term, it often leads to more expensive repairs in the future.",
          "Preventive maintenance focuses on identifying and addressing small issues before they become significant problems. Regular inspections, routine servicing, and timely repairs help reduce unexpected costs while keeping buildings in excellent condition.",
          "Simply put, fixing a small problem today is almost always more affordable than replacing an entire system tomorrow.",
        ],
      },
      {
        heading: "The Building Systems That Need Regular Attention",
        paragraphs: [
          "Every building is made up of systems that work together to create a safe and functional environment. These systems naturally experience wear and tear over time, making regular maintenance essential. Some of the most important areas include:",
          "A consistent maintenance schedule helps extend the life of these systems while minimizing disruptions for residents.",
        ],
        bullets: [
          "Roofing: Inspect for leaks, damaged sheets or tiles, blocked gutters, and signs of water damage.",
          "Plumbing: Check for leaking pipes, dripping taps, blocked drains, and water pressure issues.",
          "Electrical Systems: Test wiring, circuit breakers, lighting, and power outlets to reduce safety risks.",
          "Exterior Finishes: Repaint surfaces when necessary, seal cracks early, and protect walls from moisture damage.",
          "Mechanical Equipment: Service pumps, generators, elevators, and other equipment according to the manufacturer's recommendations.",
        ],
      },
      {
        heading: "Protecting Property Value",
        paragraphs: [
          "A well-maintained property doesn't just look better, it performs better in the market.",
          "Whether you're a homeowner planning to live in your property for years or an investor thinking about future resale opportunities, maintenance directly affects value.",
          "Prospective buyers and tenants often judge a property long before they step inside. Clean surroundings, functioning infrastructure, and well-kept common areas create confidence that the property has been responsibly managed.",
          "In contrast, visible neglect can reduce buyer interest, increase repair negotiations, and lower market value.",
          "Maintaining a property is not simply an expense—it's an investment in preserving one of your most valuable assets.",
        ],
      },
      {
        heading: "Maintenance Builds Better Communities",
        paragraphs: [
          "Property maintenance extends beyond individual homes.",
          "Shared spaces such as roads, drainage systems, recreational areas, security infrastructure, street lighting, and landscaped environments all contribute to residents' daily experience.",
          "When these shared facilities are properly maintained, communities remain safer, more attractive, and more enjoyable to live in. They also encourage stronger resident satisfaction and help preserve the long-term appeal of the entire development.",
          "Great communities are not defined only by how they are built, but by how they are cared for over time.",
        ],
      },
      {
        heading: "A Long-Term Mindset",
        paragraphs: [
          "Buildings are designed to serve generations, but they can only achieve their full lifespan when maintenance becomes part of everyday property management.",
          "Developers, facility managers, estate managers, and homeowners all have a role to play in protecting the quality of the environments they create and inhabit.",
          "Routine inspections, planned servicing, and prompt repairs are not just operational tasks, they are commitments to safety, sustainability, and long-term value.",
        ],
      },
      {
        heading: "Building Today, Preserving Tomorrow",
        paragraphs: [
          "We believe quality extends beyond construction. Creating exceptional residential developments means delivering communities that are designed to remain functional, attractive, and valuable for years to come.",
          "Preventive maintenance is one of the simplest ways to protect that vision.",
          "Because the true measure of a great development isn't just how impressive it looks on the day it's completed, it's how well it continues to serve the people who call it home for many years to come.",
        ],
      },
    ],
  },
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
