import { ContactHero } from "@/components/contact/ContactHero";
import { ContactInfoGrid } from "@/components/contact/ContactInfoGrid";
import { ContactQuoteForm } from "@/components/forms/ContactQuoteForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Primquisite Real Estate",
  description: "Reach out to Primquisite Real Estate — visit us or leave a message.",
};

export default function ContactPage() {
  return (
    <div>
      <ContactHero />

      <section className="bg-white px-4 py-14 md:px-6 md:py-20 lg:px-8">
        <div className="mx-auto w-full max-w-5xl">
          <h2 className="mb-12 text-center text-xl font-bold uppercase tracking-wide text-black md:text-2xl">
            Visit us or leave a message
          </h2>
          <ContactInfoGrid />
        </div>
      </section>

      <section className="bg-[#FAF9F6] px-4 pb-16 pt-4 md:px-6 md:pb-24 lg:px-8">
        <ContactQuoteForm />
      </section>
    </div>
  );
}
