"use client";

import { motion } from "motion/react";
import {
  Code2,
  Database,
  Smartphone,
  Search,
  Bot,
  BarChart3,
  ShieldCheck,
  Cloud,
} from "lucide-react";

import Card from "@/components/ui/Card";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";

const technologies = [
  {
    icon: Code2,
    title: "Modern Web Development",
    description:
      "Fast, responsive websites built with modern frameworks and best development practices.",
  },
  {
    icon: Database,
    title: "Database & Backend",
    description:
      "Reliable data management, secure storage, and scalable backend architecture.",
  },
  {
    icon: Smartphone,
    title: "Responsive Design",
    description:
      "Optimized experiences across desktop, tablet, and mobile devices.",
  },
  {
    icon: Search,
    title: "SEO Optimization",
    description:
      "Technical and on-page optimization to improve visibility in search engines.",
  },
  {
    icon: Bot,
    title: "AI & Automation",
    description:
      "Workflow automation and AI-powered solutions that improve business efficiency.",
  },
  {
    icon: BarChart3,
    title: "Analytics",
    description:
      "Track business performance with dashboards and actionable reporting.",
  },
  {
    icon: ShieldCheck,
    title: "Security",
    description:
      "Secure development practices that help protect your business and customers.",
  },
  {
    icon: Cloud,
    title: "Cloud Deployment",
    description:
      "Reliable hosting and deployment solutions for speed, scalability, and uptime.",
  },
];

export default function TechnologyStack() {
  return (
    <Section className="technology-stack section">
      <SectionHeading
        badge="Technology"
        title="Powered by"
        highlight="Modern Technology"
        description="We use trusted technologies and industry best practices to build secure, scalable, and high-performing digital solutions."
      />

      <div className="technology-grid">
        {technologies.map((tech, index) => {
          const Icon = tech.icon;

          return (
            <motion.div
              key={tech.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
              }}
            >
              <Card className="technology-card">
                <div className="technology-icon">
                  <Icon size={30} />
                </div>

                <h3>{tech.title}</h3>

                <p>{tech.description}</p>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}