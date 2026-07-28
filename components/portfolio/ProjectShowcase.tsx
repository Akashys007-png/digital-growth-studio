import PortfolioPreview from "@/components/portfolio/PortfolioPreview";
import Section from "@/components/ui/Section";
import type { PortfolioProject } from "@/data/portfolioProjects";
import BrowserMockup from "@/components/portfolio/BrowserMockup";
import MobileMockup from "@/components/portfolio/MobileMockup";
import CaseStudySectionHeader from "@/components/portfolio/CaseStudySectionHeader";

interface ProjectShowcaseProps {
  project: PortfolioProject;
}

export default function ProjectShowcase({
  project,
}: ProjectShowcaseProps) {
  return (
    <Section className="project-showcase-section">
      <div className="project-showcase">
        <CaseStudySectionHeader
  eyebrow="Project Showcase"
  title="Designed for a modern digital experience"
  description="A responsive website concept focused on usability, performance, visual consistency, and business growth."
/>

        <div className="project-showcase-devices">
          <BrowserMockup>
            <div
              className={`project-showcase-preview ${project.className}`}
            >
              <PortfolioPreview type={project.previewType} />
            </div>
          </BrowserMockup>

          <MobileMockup>
            <div
              className={`project-showcase-preview mobile ${project.className}`}
            >
              <PortfolioPreview type={project.previewType} />
            </div>
          </MobileMockup>
        </div>
      </div>
    </Section>
  );
}