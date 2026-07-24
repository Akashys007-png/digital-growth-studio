"use client";

import { motion } from "motion/react";

import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";

export default function ContactCTA() {
  return (
    <Section className="contact-cta section">
      <motion.div
        className="contact-cta-card"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="contact-cta-badge">
          Let Us Work Together
        </span>

        <h2>
          Ready to Bring Your
          <span> Ideas to Life?</span>
        </h2>

        <p>
          Whether you are launching a new website, redesigning an existing one,
          or exploring digital solutions for your business, we are excited to
          hear about your goals and help turn your vision into reality.
        </p>

        <div className="contact-cta-actions">
          <Button href="/consultation" icon>
            Schedule a Consultation
          </Button>
        </div>

        <p className="contact-cta-note">
          Prefer email? Reach us anytime at{" "}
          <a href="mailto:hello@digitalgrowthstudio.com">
            hello@digitalgrowthstudio.com
          </a>
        </p>
      </motion.div>
    </Section>
  );
}