"use client";

import { motion } from "motion/react";
import SectionHeading from "@/components/ui/SectionHeading";
import {
  ArrowUpRight,
  Bot,
  Gauge,
  MonitorSmartphone,
  Search,
  ShieldCheck,
} from "lucide-react";

const reasons = [
  {
    icon: MonitorSmartphone,
    title: "Modern Website Design",
    description:
      "Professional websites designed to build trust and convert visitors into customers.",
  },
  {
    icon: Gauge,
    title: "Lightning Fast Performance",
    description:
      "Optimized for speed, Core Web Vitals, and an exceptional user experience.",
  },
  {
    icon: Search,
    title: "SEO Built In",
    description:
      "Every website is structured to help improve search engine visibility.",
  },
  {
    icon: Bot,
    title: "AI Automation",
    description:
      "Save time with smart automation, AI assistants, and streamlined workflows.",
  },
  {
    icon: ShieldCheck,
    title: "Reliable Support",
    description:
      "We don't disappear after launch. We're your long-term digital partner.",
  },
  {
    icon: ArrowUpRight,
    title: "Growth Focused",
    description:
      "Everything we build is designed to help your business attract more customers and grow.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="why-section">
      <div className="container">
        <SectionHeading
  badge="Why Choose Us"
  title="More Than"
  highlight="Just a Website"
  description="We combine strategy, technology, and ongoing support to help your business grow long after your website goes live."
/>

        <div className="why-grid">
          {reasons.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                className="why-card"
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.08,
                }}
                whileHover={{
                  y: -8,
                }}
              >
                <div className="why-icon">
                  <Icon size={28} />
                </div>

                <h3>{item.title}</h3>

                <p>{item.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
