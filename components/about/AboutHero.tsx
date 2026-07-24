"use client";

import { motion } from "motion/react";
import Button from "@/components/ui/Button";
import Section from "@/components/ui/Section";
import { fadeUp } from "@/constants/animations";

export default function AboutHero() {
  return (
    <Section className="about-hero-section">
      
        <motion.div
          className="about-hero-content"
          initial="hidden"
          variants={fadeUp}

          animate="visible"
          transition={{ duration: 0.6 }}
        >
          <span className="hero-badge">
            About Digital Growth Studio
          </span>

          <h1 className="about-title">
            Helping Small Businesses
            <span> Grow Through Technology</span>
          </h1>

          <p className="about-description">
            We believe every small business deserves access to modern
            digital solutions. Our mission is to combine strategy,
            design, technology, and long-term support to help businesses
            attract more customers and grow with confidence.
          </p>

          <div className="hero-actions">
            <motion.div
  className="about-hero-stats"
  variants={fadeUp}
  initial="hidden"
  animate="visible"
  transition={{ delay: 0.3, duration: 0.6 }}
>
  <div className="hero-stat">
    <strong>50+</strong>
    <span>Projects Designed</span>
  </div>

  <div className="hero-stat">
    <strong>8+</strong>
    <span>Industries Served</span>
  </div>

  <div className="hero-stat">
    <strong>100%</strong>
    <span>Client-Focused Solutions</span>
  </div>
</motion.div>
            <Button
              href="/consultation"
              icon
            >
              Book a Free Consultation
            </Button>

            <Button
              href="/portfolio"
              variant="outline"
            >
              View Our Work
            </Button>
          </div>
        </motion.div>
      
    </Section>
  );
}