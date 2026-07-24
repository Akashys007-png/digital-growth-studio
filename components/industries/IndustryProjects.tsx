"use client";

import { motion } from "motion/react";

import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";

const projects = [
  {
    industry: "Restaurant",
    title: "Modern Restaurant Website",
    description:
      "A responsive restaurant website featuring online menus, reservation requests, location details, and local SEO optimization.",
  },
  {
    industry: "Healthcare",
    title: "Dental Clinic Platform",
    description:
      "A professional healthcare website with appointment requests, service pages, and an accessible patient experience.",
  },
  {
    industry: "Fitness",
    title: "Gym & Fitness Studio",
    description:
      "A modern fitness website with membership information, class schedules, and lead generation features.",
  },
];

export default function IndustryProjects() {
  return (
    <Section className="industry-projects section">
      <SectionHeading
        badge="Featured Projects"
        title="Digital Solutions for"
        highlight="Real Businesses"
        description="Every business is different. Here are examples of the types of digital experiences we build across the industries we serve."
      />

      <div className="industry-projects-grid">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: index * 0.1,
            }}
          >
            <Card className="industry-project-card">
              <span className="industry-tag">
                {project.industry}
              </span>

              <h3>{project.title}</h3>

              <p>{project.description}</p>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="industry-project-action">
        <Button href="/portfolio" icon>
          Explore Our Portfolio
        </Button>
      </div>
    </Section>
  );
}