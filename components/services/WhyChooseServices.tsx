"use client";

import { motion } from "motion/react";
import {
  Target,
  Rocket,
  Users,
  Headphones,
} from "lucide-react";

import Card from "@/components/ui/Card";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";

const reasons = [
  {
    icon: Target,
    title: "Business-Focused Strategy",
    description:
      "Every solution starts with your business goals. We focus on creating digital experiences that support growth and deliver measurable value.",
  },
  {
    icon: Rocket,
    title: "Modern Technology",
    description:
      "We use modern tools and best practices to build fast, secure, responsive, and scalable digital solutions.",
  },
  {
    icon: Users,
    title: "Designed Around Your Customers",
    description:
      "Every website and solution is built with your customers in mind, creating intuitive experiences that encourage engagement and conversions.",
  },
  {
    icon: Headphones,
    title: "Long-Term Partnership",
    description:
      "Our relationship doesn't end after launch. We provide ongoing guidance, improvements, and support as your business evolves.",
  },
];

export default function WhyChooseServices() {
  return (
    <Section className="why-services section">
      <SectionHeading
        badge="Why Choose Us"
        title="More Than Just"
        highlight="Digital Services"
        description="We combine technology, strategy, and long-term support to help small businesses build a stronger digital presence."
      />

      <div className="why-services-grid">
        {reasons.map((reason, index) => {
          const Icon = reason.icon;

          return (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
            >
              <Card className="why-services-card">
                <div className="why-services-icon">
                  <Icon size={30} />
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