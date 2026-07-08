# Primquisite Real Estate

Marketing website for **Primquisite Real Estate** — a property developer and real estate agency based in Lekki Phase 1, Lagos, Nigeria. The site showcases services, portfolio projects, company information, and a contact inquiry form.

**Live site:** [primquisiterealestate.com](https://primquisiterealestate.com)

## Tech stack

| Layer | Technology |
| --- | --- |
| Framework | [Next.js 16](https://nextjs.org) (App Router) |
| Language | TypeScript |
| UI | React 19, Tailwind CSS v4 |
| Animation | Framer Motion |
| Analytics | Google Analytics (`@next/third-parties`) |
| Fonts | Montserrat (Google Fonts) |

## Features

- Responsive layout with fixed navbar, mobile menu, and footer
- Home page with hero carousel, service pillars, and project highlights
- Dedicated pages for About, Services, Portfolio, and Contact
- Individual portfolio project pages (Arabella, Crescendo, Ezra Court, Nacre)
- Contact quote form with client-side submission to `/api/contact`
- Cookie consent banner with links to legal policies
- SEO: per-page metadata, canonical URLs, Open Graph, Twitter cards, JSON-LD structured data
- `sitemap.xml`, `robots.txt`, and `llms.txt` for crawlers

## Getting started

### Prerequisites

- Node.js 20+
- npm (or pnpm / yarn)

### Install and run

```bash
git clone <repository-url>
cd primquisites
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Environment variables

Create a `.env.local` file in the project root:

```env
# Public site URL (used for SEO, sitemap, canonical links, JSON-LD)
NEXT_PUBLIC_SITE_URL=https://primquisiterealestate.com

# Optional display name override
NEXT_PUBLIC_SITE_NAME=Primquisite Real Estate

# Google Analytics measurement ID (production only)
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

Analytics scripts load only when `NODE_ENV=production` and a measurement ID is set.

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start development server |
| `npm run build` | Production build |
| `npm run start` | Serve production build |
| `npm run lint` | Run ESLint |

## Project structure

```
primquisites/
├── app/                    # Next.js App Router pages and API routes
│   ├── layout.tsx          # Root layout, metadata, JSON-LD
│   ├── page.tsx            # Home
│   ├── about/
│   ├── services/
│   ├── portfolio/          # Portfolio index + project pages
│   ├── contact/
│   ├── api/contact/        # Contact form API
│   ├── sitemap.ts
│   └── robots.ts
├── components/
│   ├── layout/             # Navbar, Footer, Hero
│   ├── sections/           # Page-specific content sections
│   ├── forms/              # ContactQuoteForm
│   ├── portfolio/          # Project detail components
│   ├── seo/                # Structured data helpers
│   ├── legal/              # Cookie banner
│   ├── motion/             # Animation wrappers
│   └── ui/                 # Shared UI primitives
├── constants/              # Projects, SEO, contact, hero slides
├── lib/                    # SEO helpers, motion, analytics
├── hooks/                  # Custom React hooks
├── public/                 # Static assets (images, icons, llms.txt)
└── types/                  # Shared TypeScript types
```

## Routes

| Path | Description |
| --- | --- |
| `/` | Home |
| `/about` | Company mission, vision, and values |
| `/services` | Property development, PropTech, operations, and more |
| `/portfolio` | Project gallery |
| `/portfolio/arabella` | Arabella — Lekki Phase 1 |
| `/portfolio/crescendo` | Crescendo — Lekki Phase 1 |
| `/portfolio/ezra-court` | Ezra Court — Lekki |
| `/portfolio/nacre` | Nacre — Ikoyi |
| `/contact` | Contact info and inquiry form |
| `/privacy-notice` | Privacy policy |
| `/cookie-notice-policy` | Cookie policy |

## SEO

SEO configuration lives in:

- `constants/seo.ts` — site-wide keywords, description, and contact details
- `lib/seo.ts` — `createPageMetadata()` helper for per-page titles, descriptions, and social tags
- `components/seo/OrganizationJsonLd.tsx` — Organization / RealEstateAgent / LocalBusiness schema

Each page exports its own metadata. The root layout sets defaults, a title template, and site-wide JSON-LD.

## Contact form

The **“Interested in owning or investing?”** form posts to `POST /api/contact`. The API currently validates the payload and returns a success response. It does **not** send email yet — wire up a provider (e.g. Resend, SendGrid, Nodemailer) in `app/api/contact/route.ts` to deliver submissions to `info@primquisiterealestate.com`.

## Deployment

The app is a standard Next.js project and can be deployed to [Vercel](https://vercel.com), or any platform that supports Next.js:

```bash
npm run build
npm run start
```

Set the environment variables above in your hosting provider before deploying to production.

## Contact

**Primquisite Real Estate**  
20 Awudu Ekpheka Blvd, Lekki Phase 1, Lagos, Nigeria  
Email: info@primquisiterealestate.com  
Phone: +234 913 866 7927
