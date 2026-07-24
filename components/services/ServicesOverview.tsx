"use client";

import { motion } from "motion/react";
import {
  Globe,
  Search,
  Bot,
  BarChart3,
  ArrowRight,
} from "lucide-react";

import Card from "@/components/ui/Card";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";

const services = [
  {
    icon: Globe,
    title: "Website Development",
    description:
      "Modern, responsive websites designed to build credibility, generate qualified leads, and convert visitors into loyal customers.",
    highlight: "Fast • Responsive • SEO Ready",
  },
  {
    icon: Search,
    title: "SEO & Local Visibility",
    description:
      "Improve your search rankings and local presence so potential customers can easily discover your business online.",
    highlight: "Higher Rankings • More Traffic",
  },
  {
    icon: Bot,
    title: "Automation & AI",
    description:
      "Reduce repetitive work with intelligent automation, AI assistants, and connected workflows that save valuable time.",
    highlight: "Smarter Workflows • Better Efficiency",
  },
  {
    icon: BarChart3,
    title: "Analytics & Growth",
    description:
      "Transform business data into actionable insights with dashboards, reporting, and performance tracking.",
    highlight: "Measure • Improve • Grow",
  },
];

export default function ServicesOverview() {
  return (
    <Section className="services-overview section">
      <SectionHeading
        badge="Services"
        title="Everything You Need to"
        highlight="Grow Digitally"
        description="Our services work together to help small businesses establish a stronger online presence, streamline operations, and make confident, data-driven decisions."
      />

      <div className="services-overview-grid">
        {services.map((service, index) => {
          const Icon = service.icon;

          return (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
            >
              <Card className="service-overview-card">
                <div className="service-overview-icon">
                  <Icon size={30} />
                </div>

                <h3>{service.title}</h3>

                <p>{service.description}</p>

                <div className="service-overview-highlight">
                  <ArrowRight size={16} />
                  <span>{service.highlight}</span>
                </div>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}