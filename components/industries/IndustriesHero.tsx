"use client";

import { motion } from "motion/react";

import Button from "@/components/ui/Button";
import Section from "@/components/ui/Section";

const industries = [
  "Restaurants",
  "Healthcare",
  "Fitness",
  "Legal",
  "Real Estate",
  "Home Services",
];

export default function IndustriesHero() {
  return (
    <Section className="industries-hero section">
      <motion.div
        className="industries-hero-content"
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="section-badge">
          Industries We Serve
        </span>

        <h1>
          Digital Solutions Built for
          <span> Your Industry</span>
        </h1>

        <p>
          Every industry has unique customers, challenges, and goals. We create
          modern websites and digital solutions tailored to your business,
          helping you attract more customers, improve efficiency, and build a
          stronger online presence.
        </p>

        <div className="industries-hero-buttons">
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

        <div className="industries-highlights">
          {industries.map((industry) => (
            <span
              key={industry}
              className="industry-pill"
            >
              {industry}
            </span>
          ))}
        </div>
      </motion.div>
    </Section>
  );
}