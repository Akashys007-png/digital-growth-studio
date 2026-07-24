"use client";

import { motion } from "motion/react";

import Card from "@/components/ui/Card";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";

import type { Service } from "@/data/services";

interface ProcessProps {
  service: Service;
}

export default function Process({
  service,
}: ProcessProps) {
  return (
    <Section>
      <SectionHeading
        badge="Our Process"
        title="How We Deliver"
        highlight={service.name}
        description="Every project follows a structured process that keeps communication clear, reduces risk, and delivers measurable results."
      />

      <div className="space-y-6">
        {service.process.map((step, index) => (
          <motion.div
            key={step.title}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: index * 0.08,
            }}
          >
            <Card className="flex gap-6 items-start p-6">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-white font-bold">
                {index + 1}
              </div>

              <div>
                <h3 className="text-xl font-semibold">
                  {step.title}
                </h3>

                <p className="mt-2 text-muted-foreground leading-7">
                  {step.description}
                </p>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}