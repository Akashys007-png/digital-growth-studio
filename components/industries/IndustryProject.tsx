"use client";

import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";

interface Project {
  title: string;
  description: string;
  href: string;
}

interface IndustryProjectProps {
  project: Project;
}

export default function IndustryProject({
  project,
}: IndustryProjectProps) {
  return (
    <Section className="industry-project section">
      <SectionHeading
        badge="Featured Project"
        title="See What's"
        highlight="Possible"
        description="Here's an example of the type of digital solution we can build for businesses in your industry."
      />

      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <Card className="industry-project-feature">
          <h3>{project.title}</h3>

          <p>{project.description}</p>

          <Button
            href={project.href}
            variant="outline"
          >
            View Similar Project
            <ArrowRight size={18} />
          </Button>
        </Card>
      </motion.div>
    </Section>
  );
}