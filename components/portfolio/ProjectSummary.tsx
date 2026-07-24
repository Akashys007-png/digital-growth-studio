import Section from "@/components/ui/Section";
import type { PortfolioProject } from "@/data/portfolioProjects";

interface ProjectSummaryProps {
  project: PortfolioProject;
}

export default function ProjectSummary({
  project,
}: ProjectSummaryProps) {
  return (
    <Section>
      <div className="case-study-summary">
        <div className="summary-card">
          <span>Client</span>
          <strong>{project.clientType}</strong>
        </div>

        <div className="summary-card">
          <span>Duration</span>
          <strong>{project.duration}</strong>
        </div>

        <div className="summary-card">
          <span>Year</span>
          <strong>{project.year}</strong>
        </div>

        <div className="summary-card">
          <span>Services</span>
          <strong>{project.services.join(", ")}</strong>
        </div>
      </div>
    </Section>
  );
}