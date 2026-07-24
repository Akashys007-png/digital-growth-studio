"use client";

import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

import Card from "@/components/ui/Card";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";

export interface ProcessStep {
  title: string;
  description: string;
}

interface ServiceProcessProps {
  badge?: string;
  title?: string;
  highlight?: string;
  description?: string;
  steps?: ProcessStep[];
}

const defaultSteps: ProcessStep[] = [
  {
    title: "Discovery",
    description:
      "Understand your business goals, audience, and project requirements.",
  },
  {
    title: "Strategy",
    description:
      "Plan the structure, user experience, and technical approach.",
  },
  {
    title: "Development",
    description:
      "Build a fast, responsive, and scalable solution.",
  },
  {
    title: "Launch",
    description:
      "Test, deploy, and support your project after launch.",
  },
];

export default function ServiceProcess({
  badge = "Our Process",
  title = "A Proven Process for",
  highlight = "Long-Term Success",
  description = "Every project follows a structured process that helps us deliver high-quality digital solutions.",
  steps = defaultSteps,
}: ServiceProcessProps) {
  return (
    <Section className="service-process section">
      <SectionHeading
        badge={badge}
        title={title}
        highlight={highlight}
        description={description}
      />

      <div className="process-grid">
        {steps.map((step, index) => (
          <motion.div
            key={step.title}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: index * 0.08,
            }}
          >
            <Card className="process-card">
              <div className="process-number">
                {index + 1}
              </div>

              <h3>{step.title}</h3>

              <p>{step.description}</p>

              <div className="process-outcome">
                <ArrowRight size={18} />
                <span>Next Step</span>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}