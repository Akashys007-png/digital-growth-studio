"use client";

import { motion } from "motion/react";
import Card from "@/components/ui/Card";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";

import {
  Handshake,
  Rocket,
  ShieldCheck,
  BarChart3,
  Headphones,
  Sparkles,
} from "lucide-react";

const reasons = [
  {
    icon: Handshake,
    title: "Business-First Approach",
    description:
      "Every recommendation starts with understanding your business goals, customers, and long-term vision before choosing the right technology.",
  },
  {
    icon: Rocket,
    title: "Modern Digital Solutions",
    description:
      "We build fast, scalable, and future-ready websites using proven technologies that grow with your business.",
  },
  {
    icon: ShieldCheck,
    title: "Honest & Transparent",
    description:
      "Clear communication, realistic expectations, and no unnecessary upselling throughout every project.",
  },
  {
    icon: BarChart3,
    title: "Results That Matter",
    description:
      "Our success is measured by better customer experiences, stronger online visibility, and real business growth.",
  },
  {
    icon: Headphones,
    title: "Long-Term Support",
    description:
      "We stay with our clients beyond launch, helping improve performance, security, and future digital growth.",
  },
  {
    icon: Sparkles,
    title: "Tailored Solutions",
    description:
      "Every business is different. We create customized digital solutions instead of relying on one-size-fits-all templates.",
  },
];

export default function WhyUs() {
  return (
    <Section className="about-why-us section">
      <SectionHeading
        badge="Why Choose Us"
        title="What Makes Us"
        highlight="Different"
        description="We focus on building long-term partnerships and practical digital solutions that help businesses grow with confidence."
      />

      <div className="approach-grid">
        {reasons.map((reason, index) => {
          const Icon = reason.icon;

          return (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.12,
              }}
            >
              <Card className="approach-card">
                <div className="approach-icon">
                  <Icon size={28} />
                </div>

                <h3>{reason.title}</h3>

                <p>{reason.description}</p>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}