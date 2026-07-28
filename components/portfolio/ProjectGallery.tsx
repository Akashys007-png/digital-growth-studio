"use client";

import { useState } from "react";
import Section from "@/components/ui/Section";
import type { PortfolioProject } from "@/data/portfolioProjects";
import CaseStudySectionHeader from "@/components/portfolio/CaseStudySectionHeader";

interface Props {
  project: PortfolioProject;
}

export default function ProjectGallery({
  project,
}: Props) {
  const [active, setActive] = useState(0);

  const current = project.gallery[active];

  return (
    <Section>
      <div className="project-gallery">

        <CaseStudySectionHeader
  eyebrow="Project Gallery"
  title="Explore the complete experience"
  description="Browse the key screens designed for this project, from the landing page to the final conversion journey."
/>

        <div className="gallery-tabs">
          {project.gallery.map((item, index) => (
            <button
              key={item.title}
              onClick={() => setActive(index)}
              className={active === index ? "active" : ""}
            >
              {item.title}
            </button>
          ))}
        </div>

        <div className="gallery-preview">
          <h3>{current.title}</h3>

          <p>{current.description}</p>

          <div className="gallery-placeholder">
            <span className="gallery-placeholder-tag">{current.type}</span>

            <div className="gallery-placeholder-toolbar">
              <span />
              <span />
              <span />
            </div>

            <div className="gallery-placeholder-hero" />

            <div className="gallery-placeholder-row">
              <div className="gallery-placeholder-cta" />
              <div className="gallery-placeholder-lines">
                <span />
                <span />
              </div>
            </div>

            <div className="gallery-placeholder-grid">
              <div />
              <div />
              <div />
            </div>
          </div>

        </div>

      </div>
    </Section>
  );
}