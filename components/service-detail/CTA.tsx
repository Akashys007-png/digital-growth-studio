import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";

import type { Service } from "@/data/services";

interface CTAProps {
  service: Service;
}

export default function CTA({
  service,
}: CTAProps) {
  return (
    <Section>
      <div className="rounded-3xl border border-border bg-card p-10 text-center shadow-lg">
        <span className="inline-block rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
          Ready to Get Started?
        </span>

        <h2 className="mt-6 text-4xl font-bold">
          Let us Build Your Next{" "}
          <span className="text-primary">
            {service.name}
          </span>{" "}
          Project
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
          Whether you are starting from scratch or improving an existing
          solution, we will help you achieve measurable business results with
          modern technology and proven strategies.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Button
            href="/consultation"
            icon
          >
            Book a Free Consultation
          </Button>

          <Button
            href="/portfolio"
            variant="outline"
          >
            View Portfolio
          </Button>
        </div>
      </div>
    </Section>
  );
}