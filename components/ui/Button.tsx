"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";

type ButtonVariant = "primary" | "outline";

interface ButtonProps {
  children: ReactNode;
  href: string;
  variant?: ButtonVariant;
  icon?: boolean;
  className?: string;
}

export default function Button({
  children,
  href,
  variant = "primary",
  icon = false,
  className = "",
}: ButtonProps) {
  return (
    <motion.div
      whileHover={{
        y: -2,
      }}
      whileTap={{
        scale: 0.98,
      }}
      transition={{
        duration: 0.18,
      }}
    >
      <Link
        href={href}
        className={`btn btn-${variant} ${className}`}
      >
        <span>{children}</span>

        {icon && (
          <motion.span
            className="btn-icon"
            whileHover={{
              x: 4,
            }}
            transition={{
              duration: 0.18,
            }}
          >
            <ArrowRight size={18} />
          </motion.span>
        )}
      </Link>
    </motion.div>
  );
}