"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { Check } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

import { pricingPlans } from "@/data/pricing";

export default function Pricing() {
    
  return (
    <section className="pricing section">
      <div className="container">
        <SectionHeading
  badge="Pricing"
  title="Simple Pricing"
  highlight="Built for Growth"
  description="Transparent pricing with scalable solutions for businesses at every stage."
/>
        <div className="pricing-toggle">
  <div>
    <button className="active">One-Time Project</button>
    <button>Monthly Care Plans</button>
  </div>
</div>

        <div className="pricing-grid">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              className={`pricing-card ${
                plan.popular ? "pricing-popular" : ""
              }`}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.15,
              }}
            >
              {plan.popular && (
                <div className="popular-badge">Most Popular</div>
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

              <Link href="/consultation" className="pricing-btn">
                {plan.button}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}