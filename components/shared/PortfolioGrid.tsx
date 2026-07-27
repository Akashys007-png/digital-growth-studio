"use client";

import Link from "next/link";
import { motion } from "motion/react";

import StaggerContainer from "@/components/motion/StaggerContainer";
import StaggerItem from "@/components/motion/StaggerItem";

import {
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

import PortfolioPreview from "@/components/portfolio/PortfolioPreview";

import type { PortfolioProject } from "@/data/portfolioProjects";

interface PortfolioGridProps {
  items: PortfolioProject[];
  limit?: number;
}

export default function PortfolioGrid({
  items,
  limit,
}: PortfolioGridProps) {
  const projects = items.slice(0, limit ?? items.length);

  return (
    <StaggerContainer className="portfolio-grid">
      {projects.map((project) => {
        return (
          <StaggerItem key={project.title}>
            <motion.article
              className="portfolio-card"
              whileHover={{
                y: -8,
                scale: 1.015,
                transition: {
                  duration: 0.22,
                },
              }}
            >
              <div
                className={`portfolio-visual ${project.className}`}
                aria-hidden="true"
              >
                <div className="portfolio-browser">
                  <div className="portfolio-browser-bar">
                    <span />
                    <span />
                    <span />
                  </div>

                  <div className="portfolio-browser-content">
                    <PortfolioPreview
                      type={project.previewType}
                    />
                  </div>
                </div>
              </div>

              <div className="portfolio-content">
                <span className="portfolio-category">
                  {project.category}
                </span>

                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <ul className="portfolio-results">
                  {project.results.map((result) => (
                    <li key={result}>
                      <CheckCircle2 size={17} />
                      <span>{result}</span>
                    </li>
                  ))}
                </ul>

                <div className="portfolio-tags">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>

                <Link
                  href={project.href}
                  className="portfolio-link"
                >
                  View Concept Case Study
                  <ArrowRight size={17} />
                </Link>
              </div>
            </motion.article>
          </StaggerItem>
        );
      })}
    </StaggerContainer>
  );
}