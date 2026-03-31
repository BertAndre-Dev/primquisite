import { ContactQuoteForm } from "@/components/forms/ContactQuoteForm";

/** Inquiry form block for portfolio project pages (matches contact page styling). */
export function PortfolioContactSection() {
  return (
    <section className="border-t border-black/5 bg-[#FAF9F6] px-4 py-16 md:px-6 md:py-20 lg:px-8">
      <ContactQuoteForm />
    </section>
  );
}
