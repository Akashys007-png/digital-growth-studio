import Section from "@/components/ui/Section";
import type { PortfolioProject } from "@/data/portfolioProjects";

interface CaseStudyHeroProps {
  project: PortfolioProject;
}

export default function CaseStudyHero({
  project,
}: CaseStudyHeroProps) {
  return (
    <Section className="case-study-hero">
      <div className="case-study-header">
        <span className="case-study-category">
          {project.category}
        </span>

        <h1>{project.title}</h1>

        <p>{project.description}</p>
      </div>
    </Section>
  );
}