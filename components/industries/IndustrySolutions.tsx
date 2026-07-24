"use client";

import { motion } from "motion/react";
import { CheckCircle2 } from "lucide-react";

import Card from "@/components/ui/Card";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";

interface Solution {
  title: string;
  description: string;
}

interface IndustrySolutionsProps {
  solutions: Solution[];
}

export default function IndustrySolutions({
  solutions,
}: IndustrySolutionsProps) {
  return (
    <Section className="industry-solutions section">
      <SectionHeading
        badge="Our Solution"
        title="How We Help"
        highlight="Your Business"
        description="Our solutions are designed to solve real business problems while creating a better experience for your customers."
      />

      <div className="industry-solutions-grid">
        {solutions.map((solution, index) => (
          <motion.div
            key={solution.title}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: index * 0.08,
            }}
          >
            <Card className="industry-solution-card">
              <div className="industry-solution-icon">
                <CheckCircle2 size={30} />
              </div>

              <h3>{solution.title}</h3>

              <p>{solution.description}</p>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}