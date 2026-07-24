"use client";

import { motion } from "motion/react";

interface SectionHeadingProps {
  badge: string;
  title: string;
  highlight?: string;
  description: string;
  align?: "left" | "center";
}

export default function SectionHeading({
  badge,
  title,
  highlight,
  description,
  align = "center",
}: SectionHeadingProps) {
  return (
    <motion.div
      className={`section-heading section-heading-${align}`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <span className="section-badge">{badge}</span>

      <h2>
        {title}
        {highlight && <span>{highlight}</span>}
      </h2>

      <p>{description}</p>
    </motion.div>
  );
}