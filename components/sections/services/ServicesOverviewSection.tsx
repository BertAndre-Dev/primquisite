import { SectionWrapper } from "@/components/ui/SectionWrapper";

export function ServicesOverviewSection() {
  return (
    <SectionWrapper
      title="Services"
      description="Advisory and execution across product teams."
    >
      <ul className="list-inside list-disc space-y-1 text-black/80">
        <li>Product discovery and roadmap planning</li>
        <li>Web application engineering</li>
        <li>Platform and process optimization</li>
      </ul>
    </SectionWrapper>
  );
}
