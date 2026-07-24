"use client";

import { motion } from "motion/react";

import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Section from "@/components/ui/Section";

interface IndustryPageCTAProps {
  title: string;
  description: string;
}

export default function IndustryPageCTA({
  title,
  description,
}: IndustryPageCTAProps) {
  return (
    <Section className="industry-page-cta section">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <Card className="industry-page-cta-card">
          <span className="section-badge">
            Ready to Get Started?
          </span>

          <h2>{title}</h2>

          <p>{description}</p>

          <Button href="/consultation" icon>
            Book Your Free Consultation
          </Button>
        </Card>
      </motion.div>
    </Section>
  );
}