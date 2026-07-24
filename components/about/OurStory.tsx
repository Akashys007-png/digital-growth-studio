"use client";

import { motion } from "motion/react";
import { CheckCircle2 } from "lucide-react";

import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";

export default function OurStory() {
  return (
    <Section className="about-story section">
      <SectionHeading
        badge="Our Story"
        title="Built to Help"
        highlight="Small Businesses Succeed"
        description="Digital Growth Studio was created with one simple belief: every small business deserves the same digital opportunities as large companies."
      />

      <div className="story-grid">
        <motion.div
          className="story-content"
          initial={{ opacity: 0, x: -35 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p>
            Many small businesses struggle with outdated websites,
            inconsistent branding, poor search visibility, and manual
            business processes. Large companies often have dedicated
            teams and expensive agencies, while smaller businesses are
            left trying to manage everything on their own.
          </p>

          <p>
            We started Digital Growth Studio to change that. Our goal is
            to make professional digital solutions accessible, practical,
            and focused on measurable business growth rather than
            unnecessary complexity.
          </p>

          <p>
            Every solution we create is designed with one goal in mind:
            helping business owners spend less time worrying about
            technology and more time growing their business. We believe
            great digital experiences should not only look professional
            but also deliver measurable business results.
          </p>

          <div className="story-points">
            <div className="story-point">
              <CheckCircle2 size={20} />
              <span>Client-first approach</span>
            </div>

            <div className="story-point">
              <CheckCircle2 size={20} />
              <span>Transparent communication</span>
            </div>

            <div className="story-point">
              <CheckCircle2 size={20} />
              <span>Modern scalable technology</span>
            </div>

            <div className="story-point">
              <CheckCircle2 size={20} />
              <span>Long-term partnership</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="story-highlight"
          initial={{ opacity: 0, x: 35 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="story-card">
            <span>Our Goal</span>

            <h3>Building Long-Term Digital Partnerships</h3>

            <p>
              We do not measure success by launching a website. We measure
              success by helping businesses build trust, attract
              customers, improve efficiency, and continue growing long
              after the project is complete.
            </p>

            <blockquote>
              &quot;Technology should empower businesses—not complicate them.&quot;
            </blockquote>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}