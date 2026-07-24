"use client";

import { motion } from "motion/react";
import {
  UtensilsCrossed,
  Stethoscope,
  Dumbbell,
  Scale,
  Building2,
  Hammer,
} from "lucide-react";

import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";

const industries = [
  {
    icon: UtensilsCrossed,
    title: "Restaurants",
    description:
      "Modern websites with online menus, reservations, ordering, and local SEO to attract more diners.",
    href: "/industries/restaurants",
  },
  {
    icon: Stethoscope,
    title: "Healthcare",
    description:
      "Professional healthcare websites with appointment booking, patient resources, and accessible design.",
    href: "/industries/healthcare",
  },
  {
    icon: Dumbbell,
    title: "Fitness",
    description:
      "Help gyms and studios increase memberships with class schedules, online registration, and mobile-friendly experiences.",
    href: "/industries/fitness",
  },
  {
    icon: Scale,
    title: "Legal",
    description:
      "Build credibility with informative websites that highlight expertise, practice areas, and client contact options.",
    href: "/industries/legal",
  },
  {
    icon: Building2,
    title: "Real Estate",
    description:
      "Showcase listings, generate leads, and create engaging property experiences for buyers and sellers.",
    href: "/industries/real-estate",
  },
  {
    icon: Hammer,
    title: "Home Services",
    description:
      "Generate more local leads with service pages, quote requests, reviews, and location-based SEO.",
    href: "/industries/home-services",
  },
];

export default function IndustriesOverview() {
  return (
    <Section className="industries-overview section">
      <SectionHeading
        badge="Industries"
        title="Solutions Built for"
        highlight="Your Business"
        description="We understand that every industry has different customers, challenges, and goals. That's why every solution is tailored to your business instead of using a one-size-fits-all approach."
      />

      <div className="industries-grid">
        {industries.map((industry, index) => {
          const Icon = industry.icon;

          return (
            <motion.div
              key={industry.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
              }}
            >
              <Card className="industry-card">
                <div className="industry-icon">
                  <Icon size={30} />
                </div>

                <h3>{industry.title}</h3>

                <p>{industry.description}</p>

                <Button
                  href={industry.href}
                  variant="outline"
                >
                  Learn More
                </Button>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}