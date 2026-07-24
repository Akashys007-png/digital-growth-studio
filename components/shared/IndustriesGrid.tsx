"use client";

import Link from "next/link";
import { motion } from "motion/react";

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
    <div className="industries-grid">
      {visibleItems.map((industry, index) => {
        const Icon = icons[industry.icon];

        return (
          <motion.div
            key={industry.slug}
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: index * 0.06,
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
        );
      })}
    </div>
  );
}