"use client";

import { motion } from "motion/react";
import { AlertTriangle } from "lucide-react";

import Card from "@/components/ui/Card";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";

interface Challenge {
  title: string;
  description: string;
}

interface IndustryChallengesProps {
  challenges: Challenge[];
}

export default function IndustryChallenges({
  challenges,
}: IndustryChallengesProps) {
  return (
    <Section className="industry-challenges section">
      <SectionHeading
        badge="Common Challenges"
        title="Problems Businesses"
        highlight="Often Face"
        description="Every industry has unique challenges. We design digital solutions that directly address these pain points."
      />

      <div className="industry-challenges-grid">
        {challenges.map((challenge, index) => (
          <motion.div
            key={challenge.title}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: index * 0.08,
            }}
          >
            <Card className="industry-challenge-card">
              <div className="industry-challenge-icon">
                <AlertTriangle size={30} />
              </div>

              <h3>{challenge.title}</h3>

              <p>{challenge.description}</p>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}