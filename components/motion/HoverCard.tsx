"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";

interface HoverCardProps {
  children: ReactNode;
  className?: string;
}

export default function HoverCard({
  children,
  className = "",
}: HoverCardProps) {
  return (
    <motion.div
      className={className}
      whileHover={{
        y: -8,
        scale: 1.015,
      }}
      whileTap={{
        scale: 0.995,
      }}
      transition={{
        duration: 0.22,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}