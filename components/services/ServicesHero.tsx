"use client";

import { motion } from "motion/react";

import Button from "@/components/ui/Button";
import Section from "@/components/ui/Section";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const stats = [
  {
    value: "Web",
    label: "Development",
  },
  {
    value: "SEO",
    label: "& Marketing",
  },
  {
    value: "AI",
    label: "& Automation",
  },
];

export default function ServicesHero() {
  return (
    <Section className="services-hero section">
      <motion.div
        className="services-hero-content"
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.65 }}
      >
        <span className="section-badge">
          Our Services
        </span>

        <h1 className="services-title">
          Digital Solutions That Help
          <span> Small Businesses Grow</span>
        </h1>

        <p className="services-description">
          We design and build high-performing websites, improve your online
          visibility, automate repetitive workflows, and create modern digital
          solutions that help businesses attract customers, improve efficiency,
          and grow with confidence.
        </p>

        <div className="services-actions">
          <Button href="/consultation" icon>
            Book a Free Consultation
          </Button>

          <Button
            href="/portfolio"
            variant="outline"
          >
            View Our Work
          </Button>
        </div>

        <motion.div
          className="services-hero-stats"
          variants={fadeUp}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.value}
              className="services-stat"
              whileHover={{
                y: -4,
                transition: { duration: 0.2 },
              }}
            >
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </Section>
  );
}