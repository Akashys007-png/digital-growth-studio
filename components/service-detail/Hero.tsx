import Section from "@/components/ui/Section";
import type { Service } from "@/data/services";

interface HeroProps {
  service: Service;
}

export default function Hero({ service }: HeroProps) {
  return (
    <Section className="py-20">
      <div className="max-w-4xl">
        <span className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
          {service.badge}
        </span>

        <h1 className="mt-6 text-5xl font-bold leading-tight">
          {service.headline}{" "}
          <span className="text-blue-600">
            {service.highlight}
          </span>
        </h1>

        <p className="mt-6 text-lg leading-8 text-gray-600">
          {service.description}
        </p>
      </div>
    </Section>
  );
}