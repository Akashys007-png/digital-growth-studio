"use client";

import { motion } from "motion/react";
import {
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Section from "@/components/ui/Section";

const benefits = [
  "Free consultation",
  "Tailored recommendations",
  "Clear project roadmap",
];

export default function IndustriesCTA() {
  return (
    <Section className="industries-cta section">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <Card className="industries-cta-card">
          <span className="section-badge">
            Let Us Build Something Great
          </span>

          <h2>
            Ready to Grow Your Business
            <span> Online?</span>
          </h2>

          <p>
            Whether you are launching a new business or improving an existing
            website, we will help you build a digital presence that attracts more
            customers and supports your long-term growth.
          </p>

          <div className="industries-cta-benefits">
            {benefits.map((benefit) => (
              <div
                key={benefit}
                className="industries-cta-benefit"
              >
                <CheckCircle2 size={18} />

                <span>{benefit}</span>
              </div>
            ))}
          </div>

          <div className="industries-cta-buttons">
            <Button
              href="/consultation"
              icon
            >
              Book a Free Consultation
            </Button>

            <Button
              href="/contact"
              variant="outline"
            >
              Contact Us
              <ArrowRight size={18} />
            </Button>
          </div>
        </Card>
      </motion.div>
    </Section>
  );
}