"use client";

import Link from "next/link";
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
    <Link
      href={href}
      className={`btn btn-${variant} ${className}`}
    >
      {children}

      {icon && <ArrowRight size={18} />}
    </Link>
  );
}