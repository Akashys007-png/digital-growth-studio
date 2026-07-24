import Card from "@/components/ui/Card";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";

import type { Service } from "@/data/services";

interface BenefitsProps {
  service: Service;
}

export default function Benefits({
  service,
}: BenefitsProps) {
  return (
    <Section>
      <SectionHeading
        badge="Business Benefits"
        title="Why Businesses Choose"
        highlight={service.name}
        description="Our solutions are designed to deliver measurable business outcomes, not just great-looking technology."
      />

      <div className="grid gap-6 md:grid-cols-2">
        {service.benefits.map((benefit) => (
          <Card
            key={benefit.title}
            className="h-full p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            <h3 className="mb-3 text-xl font-semibold">
              {benefit.title}
            </h3>

            <p className="leading-7 text-muted-foreground">
              {benefit.description}
            </p>
          </Card>
        ))}
      </div>
    </Section>
  );
}