"use client";

import type { ReactNode } from "react";
import { motion } from "motion/react";

interface StaggerContainerProps {
  children: ReactNode;
  className?: string;
  stagger?: number;
  delay?: number;
  amount?: number;
  once?: boolean;
}

export default function StaggerContainer({
  children,
  className = "",
  stagger = 0.12,
  delay = 0,
  amount = 0.15,
  once = true,
}: StaggerContainerProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once,
        amount,
      }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            delayChildren: delay,
            staggerChildren: stagger,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}