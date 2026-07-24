"use client";

import { motion } from "motion/react";
import {
  HeartHandshake,
  Lightbulb,
  Users,
  TrendingUp,
  ArrowRight,
} from "lucide-react";

import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";

const values = [
  {
    icon: HeartHandshake,
    title: "Client Partnership",
    description:
      "We believe in long-term relationships, not one-time projects. Your success is our success.",
    points: [
      "Long-term collaboration",
      "Business-first mindset",
    ],
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "We continuously adopt modern technologies and creative ideas to help businesses stay ahead of the competition.",
    points: [
      "Modern technology",
      "Creative problem solving",
    ],
  },
  {
    icon: Users,
    title: "Transparency",
    description:
      "Open communication, honest advice, and clear expectations throughout every stage of every project.",
    points: [
      "Clear communication",
      "Honest recommendations",
    ],
  },
  {
    icon: TrendingUp,
    title: "Growth Mindset",
    description:
      "Every decision we make is focused on helping businesses attract customers, increase revenue, and grow sustainably.",
    points: [
      "Measurable results",
      "Continuous improvement",
    ],
  },
];

export default function CoreValues() {
  return (
    <Section className="core-values section">
      <SectionHeading
        badge="Core Values"
        title="The Principles"
        highlight="That Guide Every Project"
        description="Our values shape the way we design, build, and support digital experiences for every client."
      />

      <div className="values-grid">
        {values.map((value, index) => {
          const Icon = value.icon;

          return (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
            >
              <Card className="value-card">
                <div className="value-icon">
                  <Icon size={30} />
                </div>

                <h3>{value.title}</h3>

                <p>{value.description}</p>

                <ul className="value-list">
                  {value.points.map((point) => (
                    <li key={point}>
                      <ArrowRight size={16} />
                      <span>{point}</span>
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