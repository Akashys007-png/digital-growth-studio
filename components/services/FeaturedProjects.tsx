"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";

export interface FeaturedProject {
  title: string;
  category?: string;
  description: string;
  href: string;
}

interface FeaturedProjectsProps {
  project?: FeaturedProject;
}

const defaultProjects: FeaturedProject[] = [
  {
    title: "Restaurant Website",
    category: "Website Development",
    description:
      "A modern restaurant website focused on online reservations, menu presentation, and mobile-first design.",
    href: "/portfolio",
  },
  {
    title: "Dental Clinic Platform",
    category: "Healthcare",
    description:
      "Professional healthcare website with appointment booking, service pages, and patient-friendly navigation.",
    href: "/portfolio",
  },
  {
    title: "Fitness Studio",
    category: "Business Growth",
    description:
      "Responsive fitness website designed to increase memberships and simplify class scheduling.",
    href: "/portfolio",
  },
];

export default function FeaturedProjects({
  project,
}: FeaturedProjectsProps) {
  const projects = project ? [project] : defaultProjects;

  return (
    <Section className="featured-projects section">
      <SectionHeading
        badge="Featured Work"
        title="Solutions Built for"
        highlight="Real Businesses"
        description="Every project is designed around the unique goals of each business. Here are a few examples of the types of solutions we create."
      />

      <div className="featured-projects-grid">
        {projects.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: index * 0.1,
            }}
          >
            <Card className="featured-project-card">
              {item.category && (
                <span className="project-category">
                  {item.category}
                </span>
              )}

              <h3>{item.title}</h3>

              <p>{item.description}</p>

              <Link
                href={item.href}
                className="project-link"
              >
                View Portfolio
                <ArrowRight size={18} />
              </Link>
            </Card>
          </motion.div>
        ))}
      </div>

      {!project && (
        <div className="featured-projects-action">
          <Button href="/portfolio" icon>
            Explore Our Portfolio
          </Button>
        </div>
      )}
    </Section>
  );
}