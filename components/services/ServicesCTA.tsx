"use client";

import { motion } from "motion/react";

import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Section from "@/components/ui/Section";

interface ServicesCTAProps {
  badge?: string;
  title?: string;
  highlight?: string;
  description?: string;
}

export default function ServicesCTA({
  badge = "Ready to Get Started?",
  title = "Let's Build a Digital Solution That Helps Your",
  highlight = "Business Grow",
  description = "Whether you're launching a new website, improving your online visibility, automating business processes, or looking for data-driven solutions, we'll work with you to create a strategy that supports your goals and long-term growth.",
}: ServicesCTAProps) {
  return (
    <Section className="services-cta section">
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <Card className="services-cta-card">
          <div className="services-cta-content">
            <span className="section-badge">
              {badge}
            </span>

            <h2>
              {title}
              <span> {highlight}</span>
            </h2>

            <p>{description}</p>

            <div className="services-cta-buttons">
              <Button href="/consultation" icon>
                Book a Free Consultation
              </Button>

              <Button
                href="/contact"
                variant="outline"
              >
                Contact Us
              </Button>
            </div>

            <div className="services-cta-benefits">
              <span>✓ Personalized recommendations</span>
              <span>✓ Clear project roadmap</span>
              <span>✓ No obligation consultation</span>
            </div>
          </div>
        </Card>
      </motion.div>
    </Section>
  );
}