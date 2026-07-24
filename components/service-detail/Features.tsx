import Card from "@/components/ui/Card";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";

import type { Service } from "@/data/services";

interface FeaturesProps {
  service: Service;
}

export default function Features({
  service,
}: FeaturesProps) {
  return (
    <Section>
      <SectionHeading
        badge="What's Included"
        title="Everything You Need for"
        highlight={service.name}
        description="Our solutions are designed to help your business grow with modern technology and proven best practices."
      />

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {service.features.map((feature) => (
          <Card
            key={feature.title}
            className="p-6 h-full"
          >
            <h3 className="text-xl font-semibold mb-3">
              {feature.title}
            </h3>

            <p className="text-muted-foreground leading-7">
              {feature.description}
            </p>
          </Card>
        ))}
      </div>
    </Section>
  );
}