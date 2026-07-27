"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { Check } from "lucide-react";

import Reveal from "@/components/motion/Reveal";
import StaggerContainer from "@/components/motion/StaggerContainer";
import StaggerItem from "@/components/motion/StaggerItem";

import SectionHeading from "@/components/ui/SectionHeading";

import { pricingPlans } from "@/data/pricing";

export default function Pricing() {
  return (
    <section className="pricing section">
      <div className="container">
        <Reveal>
          <SectionHeading
            badge="Pricing"
            title="Simple Pricing"
            highlight="Built for Growth"
            description="Transparent pricing with scalable solutions for businesses at every stage."
          />
        </Reveal>

        <Reveal delay={0.1}>
          <div className="pricing-toggle">
            <div>
              <button className="active">One-Time Project</button>
              <button>Monthly Care Plans</button>
            </div>
          </div>
        </Reveal>

        <StaggerContainer className="pricing-grid">
          {pricingPlans.map((plan) => (
            <StaggerItem key={plan.name}>
              <motion.div
                className={`pricing-card ${
                  plan.popular ? "pricing-popular" : ""
                }`}
                whileHover={{
                  y: -10,
                  scale: 1.02,
                  transition: {
                    duration: 0.22,
                  },
                }}
              >
                {plan.popular && (
                  <div className="popular-badge">
                    Most Popular
                  </div>
                )}

                <h3>{plan.name}</h3>

                <div className="price">{plan.price}</div>

                <p>{plan.description}</p>

                <ul>
                  {plan.features.map((feature) => (
                    <li key={feature}>
                      <Check size={18} />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  href="/consultation"
                  className="pricing-btn"
                >
                  {plan.button}
                </Link>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}