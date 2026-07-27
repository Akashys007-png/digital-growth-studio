"use client";

import Link from "next/link";
import { motion } from "motion/react";

import StaggerContainer from "@/components/motion/StaggerContainer";
import StaggerItem from "@/components/motion/StaggerItem";

import {
  ArrowRight,
  UtensilsCrossed,
  ShoppingBag,
  Stethoscope,
  Scissors,
  Dumbbell,
  Building2,
  Scale,
  Hammer,
} from "lucide-react";

import Card from "@/components/ui/Card";

const icons = {
  UtensilsCrossed,
  ShoppingBag,
  Stethoscope,
  Scissors,
  Dumbbell,
  Building2,
  Scale,
  Hammer,
};

type IndustryIcon =
  | "UtensilsCrossed"
  | "ShoppingBag"
  | "Stethoscope"
  | "Scissors"
  | "Dumbbell"
  | "Building2"
  | "Scale"
  | "Hammer";

interface Industry {
  slug: string;
  title: string;
  description: string;
  icon: IndustryIcon;
  href: string;
  pain: string;
  features: string[];
}

interface IndustriesGridProps {
  items: Industry[];
  limit?: number;
}

export default function IndustriesGrid({
  items,
  limit,
}: IndustriesGridProps) {
  const visibleItems = limit ? items.slice(0, limit) : items;

  return (
    <StaggerContainer className="industries-grid">
      {visibleItems.map((industry) => {
        const Icon = icons[industry.icon];

        return (
          <StaggerItem key={industry.slug}>
            <motion.div
              whileHover={{
                y: -8,
                scale: 1.015,
                transition: {
                  duration: 0.22,
                },
              }}
            >
              <Card className="industry-card">
                <div className="industry-icon">
                  <Icon size={26} />
                </div>

                <h3>{industry.title}</h3>

                <p>{industry.description}</p>

                <Link
                  href={industry.href}
                  className="industry-link"
                >
                  Learn More
                  <ArrowRight size={17} />
                </Link>
              </Card>
            </motion.div>
          </StaggerItem>
        );
      })}
    </StaggerContainer>
  );
}