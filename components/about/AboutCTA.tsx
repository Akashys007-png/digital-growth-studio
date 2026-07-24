"use client";

import { motion } from "motion/react";

import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";

export default function AboutCTA() {
  return (
    <Section className="about-cta section">
      <motion.div
        className="about-cta-card"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="about-cta-badge">
          It&apos;s Build Together
        </span>

        <h2>
          Ready to Grow Your
          <span> Business Online?</span>
        </h2>

        <p>
          Whether You&apos;re launching a new business, refreshing your website, or
          looking to improve your digital presence, We&apos;re here to help create
          solutions that support your long-term growth.
        </p>

        <div className="about-cta-actions">
          <Button href="/contact" icon>
            Schedule a Consultation
          </Button>

          <Button
            href="/services"
            variant="outline"
          >
            Explore Our Services
          </Button>
        </div>
      </motion.div>
    </Section>
  );
}