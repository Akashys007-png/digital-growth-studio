"use client";

import { motion } from "motion/react";
import {
  Utensils,
  ShoppingBag,
  HeartPulse,
  Briefcase,
  Dumbbell,
  Home,
  ArrowRight,
} from "lucide-react";

import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";

const industries = [
  {
    icon: Utensils,
    title: "Restaurants & Cafés",
    description:
      "Digital solutions that help restaurants attract more diners, simplify reservations, and strengthen their local online presence.",
    highlight: "Online ordering & reservations",
  },
  {
    icon: ShoppingBag,
    title: "Retail & E-commerce",
    description:
      "Modern online stores designed to improve customer experience, increase sales, and simplify inventory management.",
    highlight: "E-commerce & customer engagement",
  },
  {
    icon: HeartPulse,
    title: "Healthcare",
    description:
      "Professional healthcare websites focused on accessibility, appointment scheduling, and patient trust.",
    highlight: "Patient-first digital experiences",
  },
  {
    icon: Briefcase,
    title: "Professional Services",
    description:
      "Websites that help lawyers, consultants, accountants, and agencies establish credibility and generate qualified leads.",
    highlight: "Lead generation & credibility",
  },
  {
    icon: Dumbbell,
    title: "Fitness & Wellness",
    description:
      "Membership, scheduling, and marketing solutions that help fitness businesses grow their communities.",
    highlight: "Membership & booking systems",
  },
  {
    icon: Home,
    title: "Home Services",
    description:
      "Lead-focused websites for contractors, electricians, plumbers, landscapers, and other service businesses.",
    highlight: "More local customer inquiries",
  },
];

export default function Industries() {
  return (
    <Section className="about-industries section">
      <SectionHeading
        badge="Industries"
        title="Helping Businesses Across"
        highlight="Multiple Industries"
        description="Every industry has unique customers, challenges, and opportunities. We tailor every solution to fit your business instead of relying on one-size-fits-all approaches."
      />

      <div className="industry-grid">
        {industries.map((industry, index) => {
          const Icon = industry.icon;

          return (
            <motion.div
              key={industry.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
            >
              <Card className="industry-about-card">
                <div className="industry-about-icon">
                  <Icon size={28} />
                </div>

                <h3>{industry.title}</h3>

                <p>{industry.description}</p>

                <div className="industry-highlight">
                  <ArrowRight size={16} />
                  <span>{industry.highlight}</span>
                </div>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}