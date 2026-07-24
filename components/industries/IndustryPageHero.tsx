"use client";

import { motion } from "motion/react";

import Button from "@/components/ui/Button";
import Section from "@/components/ui/Section";

interface IndustryPageHeroProps {
  badge: string;
  headline: string;
  highlight: string;
  description: string;
}

export default function IndustryPageHero({
  badge,
  headline,
  highlight,
  description,
}: IndustryPageHeroProps) {
  return (
    <Section className="industry-page-hero section">
      <motion.div
        className="industry-page-hero-content"
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="section-badge">
          {badge}
        </span>

        <h1>
          {headline} <span>{highlight}</span>
        </h1>

        <p>{description}</p>

        <div className="industry-page-buttons">
          <Button href="/consultation" icon>
            Book a Free Consultation
          </Button>

          <Button
            href="/portfolio"
            variant="outline"
          >
            View Portfolio
          </Button>
        </div>
      </motion.div>
    </Section>
  );
}