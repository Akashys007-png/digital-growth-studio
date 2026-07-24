import FAQ from "@/components/sections/FAQ";

import type { Service } from "@/data/services";

interface ServiceFAQProps {
  service: Service;
}

export default function ServiceFAQ({
  service,
}: ServiceFAQProps) {
  return (
    <FAQ
      items={service.faqs}
      badge="Frequently Asked Questions"
      title="Questions About"
      highlight={service.name}
      description="Here are some of the most common questions we receive before starting a project."
    />
  );
}