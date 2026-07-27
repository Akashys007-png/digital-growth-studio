"use client";

import Link from "next/link";

import Reveal from "@/components/motion/Reveal";

import { ArrowRight } from "lucide-react";

import SectionHeading from "@/components/ui/SectionHeading";
import PortfolioGrid from "@/components/shared/PortfolioGrid";
import { portfolioProjects } from "@/data/portfolioProjects";

export default function Portfolio() {
  return (
    <section className="portfolio-section">
      <div className="container">
        <Reveal>
          <SectionHeading
            badge="Portfolio"
            title="Work That"
            highlight="Drives Results"
            description="Explore concept projects that demonstrate how thoughtful design and technology can help businesses grow online."
          />
        </Reveal>

        <Reveal delay={0.1}>
          <div className="portfolio-filters">
            <button className="portfolio-filter active">All</button>

            <button className="portfolio-filter">Restaurant</button>

            <button className="portfolio-filter">Healthcare</button>

            <button className="portfolio-filter">Beauty</button>

            <button className="portfolio-filter">Real Estate</button>

            <button className="portfolio-filter">Legal</button>

            <button className="portfolio-filter">Fitness</button>
          </div>
        </Reveal>

        <PortfolioGrid
          items={portfolioProjects}
          limit={3}
        />

        <Reveal delay={0.25}>
          <div className="portfolio-footer">
            <Link href="/portfolio" className="btn btn-primary">
              Explore the Full Portfolio
              <ArrowRight size={18} />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}