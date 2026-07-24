"use client";

import { motion } from "motion/react";
import SectionHeading from "@/components/ui/SectionHeading";
import {
  Search,
  ClipboardCheck,
  Palette,
  Code2,
  Rocket,
  TrendingUp,
} from "lucide-react";

const processSteps = [
  {
    icon: Search,
    title: "Discovery",
    description:
      "We learn about your business, goals, audience, and competitors before writing a single line of code.",
  },
  {
    icon: ClipboardCheck,
    title: "Strategy",
    description:
      "We create a clear roadmap covering design, branding, SEO, content, and business objectives.",
  },
  {
    icon: Palette,
    title: "Design",
    description:
      "We design a modern, user-friendly experience that reflects your brand and builds trust.",
  },
  {
    icon: Code2,
    title: "Development",
    description:
      "Using modern technologies, we build a fast, responsive, and scalable website.",
  },
  {
    icon: Rocket,
    title: "Launch",
    description:
      "After testing everything thoroughly, we launch your website with confidence.",
  },
  {
    icon: TrendingUp,
    title: "Growth",
    description:
      "We continue improving SEO, performance, and digital strategy as your business grows.",
  },
];

export default function Process() {
  return (
    <section className="process-section">
      <div className="container">
        <SectionHeading
  badge="Process"
  title="A Proven Process"
  highlight="From Idea to Launch"
  description="We follow a structured approach that keeps every project transparent, efficient, and focused on delivering measurable business results."
/>

        <div className="timeline">
          {processSteps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={step.title}
                className="timeline-item"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.08,
                }}
              >
                <div className="timeline-icon">
                  <Icon size={28} />
                </div>

                <div className="timeline-content">
                  <h3>
                    {index + 1}. {step.title}
                  </h3>

                  <p>{step.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}