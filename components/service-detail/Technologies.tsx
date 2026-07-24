import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";

import type { Service } from "@/data/services";

interface TechnologiesProps {
  service: Service;
}

export default function Technologies({
  service,
}: TechnologiesProps) {
  return (
    <Section>
      <SectionHeading
        badge="Technology Stack"
        title="Modern Technologies We"
        highlight="Use"
        description="We select proven technologies that deliver performance, security, scalability, and long-term maintainability."
      />

      <div className="flex flex-wrap justify-center gap-4">
        {service.technologies.map((technology) => (
          <div
            key={technology.name}
            className="rounded-full border border-border bg-card px-6 py-3 text-sm font-medium shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            {technology.name}
          </div>
        ))}
      </div>
    </Section>
  );
}