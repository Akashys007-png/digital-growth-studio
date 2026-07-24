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

          {/* We'll replace this placeholder with actual previews in the next step */}
          <div className="gallery-placeholder">
            {current.type}
          </div>

        </div>

      </div>
    </Section>
  );
}