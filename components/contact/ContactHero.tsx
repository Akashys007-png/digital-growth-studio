"use client";

import { motion } from "motion/react";

import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";

export default function ContactHero() {
  return (
    <Section className="contact-hero section">
      <motion.div
        className="contact-hero-content"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <span className="contact-badge">Contact Us</span>

        <h1>
          Let's Start Your
          <span> Next Project</span>
        </h1>

        <p>
          Whether you're launching a new business, redesigning your website, or
          looking to improve your digital presence, we'd love to learn about
          your goals and discuss how we can help.
        </p>

        <div className="contact-hero-actions">
          <Button href="/consultation" icon>
            Schedule a Consultation
          </Button>

          <Button href="/services" variant="outline">
            Explore Services
          </Button>
        </div>
      </motion.div>
    </Section>
  );
}