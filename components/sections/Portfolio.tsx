"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

import SectionHeading from "@/components/ui/SectionHeading";
import PortfolioGrid from "@/components/shared/PortfolioGrid";
import { portfolioProjects } from "@/data/portfolioProjects";

export default function Portfolio() {
  return (
    <section className="portfolio-section">
      <div className="container">
        <SectionHeading
          badge="Portfolio"
          title="Work That"
          highlight="Drives Results"
          description="Explore concept projects that demonstrate how thoughtful design and technology can help businesses grow online."
        />

        <div className="portfolio-filters">
          <button className="portfolio-filter active">All</button>

          <button className="portfolio-filter">Restaurant</button>

          <button className="portfolio-filter">Healthcare</button>

          <button className="portfolio-filter">Beauty</button>

          <button className="portfolio-filter">Real Estate</button>

          <button className="portfolio-filter">Legal</button>

          <button className="portfolio-filter">Fitness</button>
        </div>

        <PortfolioGrid
  items={portfolioProjects}
  limit={3}
/>

        <motion.div
          className="portfolio-footer"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Link href="/portfolio" className="btn btn-primary">
            Explore the Full Portfolio
            <ArrowRight size={18} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}