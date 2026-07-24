"use client";

import { motion } from "motion/react";
import {
  Code2,
  Database,
  Search,
  BarChart3,
  Bot,
  Workflow,
  ArrowRight,
} from "lucide-react";

import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";

const technologies = [
  {
    icon: Code2,
    title: "Modern Web Development",
    description:
      "Fast, responsive, and scalable websites built using modern frameworks and best development practices.",
    tools: ["Next.js", "React", "TypeScript"],
    benefit: "High-performance digital experiences",
  },
  {
    icon: Database,
    title: "Business Systems",
    description:
      "Connected digital systems that organize customer information and simplify everyday operations.",
    tools: ["CRM", "APIs", "Cloud Tools"],
    benefit: "Smarter business operations",
  },
  {
    icon: Search,
    title: "Search Optimization",
    description:
      "Technical and content-focused improvements that help customers discover your business online.",
    tools: ["SEO", "Local Search", "Analytics"],
    benefit: "Better online visibility",
  },
  {
    icon: BarChart3,
    title: "Data & Analytics",
    description:
      "Dashboards and reporting solutions that turn business data into clear, actionable insights.",
    tools: ["Power BI", "Google Analytics", "Reporting"],
    benefit: "Data-driven decisions",
  },
  {
    icon: Bot,
    title: "AI Solutions",
    description:
      "Practical AI tools that improve customer support, automate repetitive tasks, and enhance productivity.",
    tools: ["AI Chatbots", "Smart Assistants", "Automation"],
    benefit: "Improved customer experience",
  },
  {
    icon: Workflow,
    title: "Process Automation",
    description:
      "Automated workflows that reduce repetitive work, prevent errors, and save valuable time.",
    tools: ["Workflow Automation", "Integrations", "Notifications"],
    benefit: "Greater operational efficiency",
  },
];

export default function Technologies() {
  return (
    <Section className="about-technologies section">
      <SectionHeading
        badge="Technology"
        title="Modern Tools Built Around"
        highlight="Real Business Needs"
        description="We choose technology based on what helps your business perform better—not simply because it is new or popular."
      />

      <div className="technology-grid">
        {technologies.map((technology, index) => {
          const Icon = technology.icon;

          return (
            <motion.div
              key={technology.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
            >
              <Card className="technology-card">
                <div className="technology-icon">
                  <Icon size={28} />
                </div>

                <h3>{technology.title}</h3>

                <p>{technology.description}</p>

                <div className="technology-tags">
                  {technology.tools.map((tool) => (
                    <span key={tool}>{tool}</span>
                  ))}
                </div>

                <div className="technology-benefit">
                  <ArrowRight size={16} />
                  <span>{technology.benefit}</span>
                </div>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}