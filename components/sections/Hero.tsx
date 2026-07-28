"use client";

import {
  CheckCircle2,
  Sparkles,
  ArrowUpRight,
  Users,
  Target,
  TrendingUp,
  Bell,
} from "lucide-react";
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
                  Sample Client Dashboard
                </p>

                <h2>What Growth Looks Like</h2>
              </div>

              <span className="dashboard-status">
                <span className="dashboard-status-dot" />
                Example
              </span>
            </div>

            <div className="dashboard-metric">
              <p>Monthly Website Visitors</p>

              <strong>24,850</strong>

              <span>
                <ArrowUpRight size={14} strokeWidth={2.5} />
                +38.4% this month
              </span>
            </div>

            <div className="dashboard-chart">
              <svg
                className="dashboard-chart-trend"
                viewBox="0 0 280 100"
                preserveAspectRatio="none"
              >
                <polyline
                  points="10,65 50,48 90,56 130,33 170,42 210,18 260,4"
                  fill="none"
                  stroke="#0f9d8a"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <div style={{ height: "35%" }} />
              <div style={{ height: "52%" }} />
              <div style={{ height: "44%" }} />
              <div style={{ height: "67%" }} />
              <div style={{ height: "58%" }} />
              <div style={{ height: "82%" }} />
              <div style={{ height: "96%" }} />
            </div>

            <div className="dashboard-grid">
              <div className="dashboard-grid-item dashboard-grid-item-blue">
                <div className="dashboard-grid-icon">
                  <Users size={16} strokeWidth={2} />
                </div>
                <span>Leads Generated</span>
                <strong>428</strong>
              </div>

              <div className="dashboard-grid-item dashboard-grid-item-teal">
                <div className="dashboard-grid-icon">
                  <Target size={16} strokeWidth={2} />
                </div>
                <span>Conversion Rate</span>
                <strong>12.8%</strong>
              </div>

              <div className="dashboard-grid-item dashboard-grid-item-orange">
                <div className="dashboard-grid-icon">
                  <TrendingUp size={16} strokeWidth={2} />
                </div>
                <span>Search Growth</span>
                <strong>+64%</strong>
              </div>
            </div>
          </div>

          <div className="floating-card floating-card-top">
            <div className="floating-card-icon floating-card-icon-teal">
              <TrendingUp size={16} strokeWidth={2} />
            </div>
            <div>
              <span>Site Performance Score</span>
              <strong>98 / 100</strong>
            </div>
          </div>

          <div className="floating-card floating-card-bottom">
            <div className="floating-card-icon floating-card-icon-blue">
              <Bell size={16} strokeWidth={2} />
            </div>
            <div>
              <span>Sample Lead</span>
              <strong>New Inquiry</strong>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
