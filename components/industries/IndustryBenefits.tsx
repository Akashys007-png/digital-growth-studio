"use client";

import { motion } from "motion/react";
import {
  Target,
  Users,
  TrendingUp,
  ShieldCheck,
} from "lucide-react";

import Card from "@/components/ui/Card";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";

const benefits = [
  {
    icon: Target,
    title: "Industry-Focused Strategy",
    description:
      "Every business operates differently. We tailor our digital solutions to match the goals, customers, and workflows of your specific industry.",
    highlight: "Built around your business",
  },
  {
    icon: Users,
    title: "Better Customer Experience",
    description:
      "We design intuitive experiences that make it easier for customers to find information, book services, or contact your business.",
    highlight: "Designed for your audience",
  },
  {
    icon: TrendingUp,
    title: "Support Long-Term Growth",
    description:
      "Our solutions are built to scale with your business, making it easier to expand your online presence as you grow.",
    highlight: "Ready for the future",
  },
  {
    icon: ShieldCheck,
    title: "Reliable Partnership",
    description:
      "From planning to launch and ongoing improvements, we're committed to helping your business succeed over the long term.",
    highlight: "Support beyond launch",
  },
];

export default function IndustryBenefits() {
  return (
    <Section className="industry-benefits section">
      <SectionHeading
        badge="Why Industry Experience Matters"
        title="Solutions Designed for"
        highlight="Your Industry"
        description="We don't believe in one-size-fits-all websites. Every industry has different goals, customer expectations, and operational needs, so every solution should reflect that."
      />

      <div className="industry-benefits-grid">
        {benefits.map((benefit, index) => {
          const Icon = benefit.icon;

          return (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
            >
              <Card className="industry-benefit-card">
                <div className="industry-benefit-icon">
                  <Icon size={30} />
                </div>

                <h3>{benefit.title}</h3>

                <p>{benefit.description}</p>

                <span className="industry-benefit-highlight">
                  {benefit.highlight}
                </span>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}