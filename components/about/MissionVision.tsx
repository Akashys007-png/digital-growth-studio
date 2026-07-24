"use client";

import { motion } from "motion/react";
import {
  Target,
  Eye,
  ArrowRight,
} from "lucide-react";

import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";

export default function MissionVision() {
  return (
    <Section className="mission-vision section">
      <SectionHeading
        badge="Mission & Vision"
        title="Driven by Purpose"
        highlight="Focused on Growth"
        description="Everything we do is centered around helping businesses grow through thoughtful strategy, modern technology, and long-term partnerships."
      />

      <div className="mission-grid">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Card className="mission-card">
            <div className="mission-icon">
              <Target size={30} />
            </div>

            <h3>Our Mission</h3>

            <p>
              To empower small businesses with modern websites, digital
              marketing, automation, branding, and technology solutions
              that generate measurable business growth and long-term
              success.
            </p>

            <ul className="mission-list">
              <li>
                <ArrowRight size={16} />
                Deliver practical digital solutions
              </li>

              <li>
                <ArrowRight size={16} />
                Focus on measurable business results
              </li>

              <li>
                <ArrowRight size={16} />
                Build lasting client relationships
              </li>
            </ul>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.25 }}
        >
          <Card className="mission-card">
            <div className="mission-icon">
              <Eye size={30} />
            </div>

            <h3>Our Vision</h3>

            <p>
              To become the trusted digital growth partner for ambitious
              businesses by combining creativity, innovation, and modern
              technology into solutions that continue creating value long
              after launch.
            </p>

            <ul className="mission-list">
              <li>
                <ArrowRight size={16} />
                Inspire business innovation
              </li>

              <li>
                <ArrowRight size={16} />
                Build trusted partnerships
              </li>

              <li>
                <ArrowRight size={16} />
                Support sustainable long-term growth
              </li>
            </ul>
          </Card>
        </motion.div>
      </div>
    </Section>
  );
}