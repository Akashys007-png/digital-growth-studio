"use client";

import { motion } from "motion/react";
import {
  Handshake,
  Rocket,
  MessageSquare,
  ShieldCheck,
} from "lucide-react";

import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";

const benefits = [
  {
    icon: Handshake,
    title: "Business-First Strategy",
    description:
      "Every recommendation starts with understanding your business goals, customers, and long-term vision.",
  },
  {
    icon: Rocket,
    title: "Modern Technology",
    description:
      "We build scalable, responsive, and future-ready digital solutions using proven technologies.",
  },
  {
    icon: MessageSquare,
    title: "Transparent Communication",
    description:
      "You'll always know what we're building, why we're building it, and what comes next.",
  },
  {
    icon: ShieldCheck,
    title: "Long-Term Partnership",
    description:
      "Our relationship doesn't end at launch. We continue supporting your growth as your business evolves.",
  },
];

export default function ContactBenefits() {
  return (
    <Section className="contact-benefits section">
      <SectionHeading
        badge="Why Work With Us"
        title="More Than Just"
        highlight="Another Agency"
        description="We focus on building long-term partnerships and practical digital solutions that create real business value."
      />

      <div className="contact-benefits-grid">
        {benefits.map((benefit, index) => {
          const Icon = benefit.icon;

          return (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
            >
              <Card className="contact-benefit-card">
                <div className="contact-benefit-icon">
                  <Icon size={28} />
                </div>

                <h3>{benefit.title}</h3>

                <p>{benefit.description}</p>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}