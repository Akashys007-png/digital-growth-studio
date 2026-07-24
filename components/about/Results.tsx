"use client";

import { motion } from "motion/react";
import {
  TrendingUp,
  Users,
  Clock3,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";

import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";

const results = [
  {
    icon: TrendingUp,
    title: "Business Growth",
    description:
      "Our digital solutions are designed to help businesses generate more qualified leads, strengthen their online presence, and create sustainable long-term growth.",
    highlights: [
      "Increase online visibility",
      "Generate more qualified leads",
    ],
  },
  {
    icon: Users,
    title: "Better Customer Experience",
    description:
      "Modern, intuitive digital experiences that make it easier for customers to trust, engage with, and choose your business.",
    highlights: [
      "Simple customer journeys",
      "Stronger brand credibility",
    ],
  },
  {
    icon: Clock3,
    title: "Greater Efficiency",
    description:
      "Automation and streamlined workflows reduce repetitive work, improve productivity, and give your team more time to focus on growth.",
    highlights: [
      "Save valuable time",
      "Reduce manual work",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Long-Term Partnership",
    description:
      "We continue supporting our clients after launch with updates, improvements, and strategic guidance as their business evolves.",
    highlights: [
      "Continuous improvements",
      "Reliable ongoing support",
    ],
  },
];

export default function Results() {
  return (
    <Section className="about-results section">
      <SectionHeading
        badge="Results"
        title="Success Measured By"
        highlight="Business Outcomes"
        description="Every project is designed to create meaningful improvements that help businesses operate more efficiently, build stronger customer relationships, and grow with confidence."
      />

      <div className="results-grid">
        {results.map((result, index) => {
          const Icon = result.icon;

          return (
            <motion.div
              key={result.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.12,
              }}
            >
              <Card className="result-card">
                <div className="result-icon">
                  <Icon size={28} />
                </div>

                <h3>{result.title}</h3>

                <p>{result.description}</p>

                <ul className="result-list">
                  {result.highlights.map((highlight) => (
                    <li key={highlight}>
                      <ArrowRight size={16} />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}