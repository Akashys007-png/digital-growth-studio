"use client";

import type { ReactNode } from "react";
import { motion } from "motion/react";

type RevealDirection =
  | "up"
  | "down"
  | "left"
  | "right"
  | "scale"
  | "none";

interface RevealProps {
  children: ReactNode;
  className?: string;
  direction?: RevealDirection;
  delay?: number;
  duration?: number;
  amount?: number;
  once?: boolean;
}

const directionVariants = {
  up: {
    hidden: {
      opacity: 0,
      y: 40,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  },

  down: {
    hidden: {
      opacity: 0,
      y: -40,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  },

  left: {
    hidden: {
      opacity: 0,
      x: 40,
    },
    visible: {
      opacity: 1,
      x: 0,
    },
  },

  right: {
    hidden: {
      opacity: 0,
      x: -40,
    },
    visible: {
      opacity: 1,
      x: 0,
    },
  },

  scale: {
    hidden: {
      opacity: 0,
      scale: 0.96,
    },
    visible: {
      opacity: 1,
      scale: 1,
    },
  },

  none: {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    },
  },
};

export default function Reveal({
  children,
  className = "",
  direction = "up",
  delay = 0,
  duration = 0.65,
  amount = 0.2,
  once = true,
}: RevealProps) {
  const variant = directionVariants[direction];

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once,
        amount,
      }}
      variants={variant}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}