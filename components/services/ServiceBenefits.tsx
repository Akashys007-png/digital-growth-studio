"use client";

import { motion } from "motion/react";
import {
  Clock3,
  TrendingUp,
  Users,
  ShieldCheck,
} from "lucide-react";

import Card from "@/components/ui/Card";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";

const benefits = [
  {
    icon: TrendingUp,
    title: "Grow Your Business",
    description:
      "Attract more customers with a professional online presence and data-driven digital strategies.",
  },
  {
    icon: Clock3,
    title: "Save Time",
    description:
      "Automate repetitive tasks so you can spend more time focusing on your customers and business.",
  },
  {
    icon: Users,
    title: "Improve Customer Experience",
    description:
      "Deliver a seamless experience across your website, booking system, and customer communication.",
  },
  {
    icon: ShieldCheck,
    title: "Reliable Long-Term Support",
    description:
      "We're more than a one-time developer—we're your long-term technology partner.",
  },
];

export default function ServiceBenefits() {
  return (
    <Section className="service-benefits">
      <SectionHeading
        badge="Services"
        title="Why Our Clients Choose Us"
        description="Technology That Creates Real Business Value — Every solution we build is designed to solve business problems, improve efficiency, and support sustainable growth."
      />

      <div className="benefits-grid">
        {benefits.map((benefit, index) => {
          const Icon = benefit.icon;

          return (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
            >
              <Card className="benefit-card">
                <div className="benefit-icon">
                  <Icon size={30} />
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