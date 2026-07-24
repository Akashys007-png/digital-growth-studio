"use client";

import { CheckCircle2, Sparkles } from "lucide-react";
import Button from "@/components/ui/Button";
import { motion } from "motion/react";

const benefits = [
  "Professional websites",
  "SEO and digital growth",
  "Automation and analytics",
];

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-background hero-background-one" />
      <div className="hero-background hero-background-two" />

      <div className="container hero-container">
        {/* Left Side */}

        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
        >
          <div className="hero-badge">
            <Sparkles size={16} />
            Digital Growth Solutions for Small Businesses
          </div>

          <h1 className="hero-title">
            Building Digital Success for{" "}
            <span>Small Businesses</span>
          </h1>

          <p className="hero-description">
            We help small businesses grow with professional websites,
            branding, SEO, automation, analytics, and modern digital
            technology.
          </p>

          <div className="hero-actions">
            <Button
  href="/consultation"
  className="hero-primary-button"
  icon
>
  Book a Free Consultation
</Button>

            <Button
  href="/portfolio"
  variant="outline"
>
  View Our Work
</Button>
          </div>

          <div className="hero-benefits">
            {benefits.map((benefit) => (
              <div
                key={benefit}
                className="hero-benefit"
              >
                <CheckCircle2 size={18} />
                <span>{benefit}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right Side */}

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.7,
            delay: 0.15,
          }}
        >
          <div className="dashboard-card">
            <div className="dashboard-header">
              <div>
                <p className="dashboard-label">
                  Business Growth
                </p>

                <h2>Digital Performance</h2>
              </div>

              <span className="dashboard-status">
                Live
              </span>
            </div>

            <div className="dashboard-metric">
              <p>Monthly Website Visitors</p>

              <strong>24,850</strong>

              <span>+38.4% this month</span>
            </div>

            <div className="dashboard-chart">
              <div style={{ height: "35%" }} />
              <div style={{ height: "52%" }} />
              <div style={{ height: "44%" }} />
              <div style={{ height: "67%" }} />
              <div style={{ height: "58%" }} />
              <div style={{ height: "82%" }} />
              <div style={{ height: "96%" }} />
            </div>

            <div className="dashboard-grid">
              <div>
                <span>Leads Generated</span>
                <strong>428</strong>
              </div>

              <div>
                <span>Conversion Rate</span>
                <strong>12.8%</strong>
              </div>

              <div>
                <span>Search Growth</span>
                <strong>+64%</strong>
              </div>
            </div>
          </div>

          <div className="floating-card floating-card-top">
            <span>Website Performance</span>
            <strong>98 / 100</strong>
          </div>

          <div className="floating-card floating-card-bottom">
            <span>New Customer Lead</span>
            <strong>Just Received</strong>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
