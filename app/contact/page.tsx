import { ContactHero } from "@/components/contact/ContactHero";
import { ContactInfoGrid } from "@/components/contact/ContactInfoGrid";
import { ContactQuoteForm } from "@/components/forms/ContactQuoteForm";
import { StaggerMount } from "@/components/motion/StaggerMount";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Contact",
  description:
    "Contact Primquisite Real Estate in Lekki Phase 1, Lagos — speak with our real estate agents about property development, investment, and management across Nigeria.",
  path: "/contact",
  keywords: [
    "real estate agents in Lagos",
    "contact property developer Lagos",
    "Lekki Phase 1 real estate",
  ],
});

export default function ContactPage() {
  return (
    <StaggerMount>
      <ContactHero />

      <section className="bg-white px-4 py-14 md:px-6 md:py-20 lg:px-8">
        <div className="mx-auto w-full max-w-3xl xl:max-w-4xl">
          <h2 className="mb-12 text-center text-xl font-bold uppercase tracking-wide text-black md:text-2xl">
            Visit us or leave a message
          </h2>
          <ContactInfoGrid />
        </div>
      </section>

      <section className="bg-[#FAF9F6] px-4 pb-16 pt-4 md:px-6 md:pb-24 lg:px-8">
        <ContactQuoteForm />
      </section>
    </StaggerMount>
  );
}
