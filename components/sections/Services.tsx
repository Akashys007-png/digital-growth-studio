"use client";

import Link from "next/link";
import { motion } from "motion/react";
import SectionHeading from "@/components/ui/SectionHeading";

import { fadeUp } from "@/constants/animations";
import {
  ArrowRight,
  Bot,
  ChartNoAxesCombined,
  Code2,
  Palette,
  Search,
  ShoppingCart,
} from "lucide-react";

const services = [
  {
    title: "Website Development",
    description:
      "Fast, responsive, and professional websites designed to attract customers and grow your business.",
    href: "/services/website-development",
    icon: Code2,
  },
  {
    title: "E-Commerce Solutions",
    description:
      "Secure online stores with product management, payments, shopping carts, and customer-friendly experiences.",
    href: "/services/ecommerce",
    icon: ShoppingCart,
  },
  {
    title: "SEO Optimization",
    description:
      "Improve your visibility on Google, reach local customers, and generate consistent organic website traffic.",
    href: "/services/seo",
    icon: Search,
  },
  {
    title: "Branding and Identity",
    description:
      "Build a professional brand with a memorable logo, color palette, typography, and consistent visual identity.",
    href: "/services/branding",
    icon: Palette,
  },
  {
    title: "AI and Business Automation",
    description:
      "Save time by automating repetitive tasks, customer communication, scheduling, and internal workflows.",
    href: "/services/automation",
    icon: Bot,
  },
  {
    title: "Analytics and Reporting",
    description:
      "Transform business data into useful dashboards, performance reports, and actionable insights.",
    href: "/services/analytics",
    icon: ChartNoAxesCombined,
  },
];

export default function Services() {
  return (
  <section className="services-section">
    
      <SectionHeading
        badge="Services"
        title="Everything Your Business Needs"
        highlight="To Grow Online"
        description="From high-converting websites to automation and SEO, we build digital solutions that help small businesses attract customers and grow."
      />

      <div className="services-grid">
        {services.map((service, index) => {
          const Icon = service.icon;

          return (
            <motion.article
              key={service.title}
              className="service-card"
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              whileHover={{
                y: -10,
                transition: {
                  duration: 0.2,
                },
              }}
            >
              <div className="service-icon">
                <Icon size={26} strokeWidth={2} />
              </div>

              <h3>{service.title}</h3>

              <p>{service.description}</p>

              <Link href={service.href} className="service-link">
                Learn More
                <ArrowRight size={17} />
              </Link>
            </motion.article>
          );
        })}
      </div>

      <motion.div
        className="services-footer"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Link href="/services" className="btn btn-outline">
          Explore All Services
          <ArrowRight size={18} />
        </Link>
      </motion.div>
    
  </section>
);
}