import Link from "next/link";

import Card from "@/components/ui/Card";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";

import { services } from "@/data/services";
import type { Service } from "@/data/services";

interface RelatedServicesProps {
  service: Service;
}

export default function RelatedServices({
  service,
}: RelatedServicesProps) {
  const relatedServices = services
    .filter((item) => item.slug !== service.slug)
    .slice(0, 3);

  return (
    <Section>
      <SectionHeading
        badge="Explore More"
        title="Related"
        highlight="Services"
        description="Discover other services that can help your business grow."
      />

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {relatedServices.map((item) => (
          <Link
            key={item.slug}
            href={`/services/${item.slug}`}
          >
            <Card className="h-full p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
              <h3 className="text-xl font-semibold">
                {item.name}
              </h3>

              <p className="mt-3 text-muted-foreground leading-7">
                {item.description}
              </p>

              <div className="mt-6 text-primary font-semibold">
                Learn More →
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </Section>
  );
}