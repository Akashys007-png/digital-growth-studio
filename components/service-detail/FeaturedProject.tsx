


import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";

import type { Service } from "@/data/services";

interface FeaturedProjectProps {
  service: Service;
}

export default function FeaturedProject({
  service,
}: FeaturedProjectProps) {
  return (
    <Section>
      <SectionHeading
        badge="Featured Project"
        title="See How We've Applied"
        highlight={service.name}
        description="Every service is backed by practical experience and real business outcomes."
      />

      <Card className="p-8">
        <h3 className="text-3xl font-bold">
          {service.project.title}
        </h3>

        <p className="mt-4 max-w-3xl leading-8 text-muted-foreground">
          {service.project.description}
        </p>

        <div className="mt-8">
          <Button
            href={service.project.href}
            icon
          >
           View Portfolio
          </Button>
        </div>
      </Card>
    </Section>
  );
}