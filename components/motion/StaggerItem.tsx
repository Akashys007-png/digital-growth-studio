"use client";

import type { ReactNode } from "react";
import { motion } from "motion/react";

interface StaggerItemProps {
  children: ReactNode;
  className?: string;
}

export default function StaggerItem({
  children,
  className = "",
}: StaggerItemProps) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: {
          opacity: 0,
          y: 32,
          scale: 0.98,
        },

        visible: {
          opacity: 1,
          y: 0,
          scale: 1,
          transition: {
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}