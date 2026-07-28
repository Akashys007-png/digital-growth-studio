import Section from "@/components/ui/Section";
import type { PortfolioProject } from "@/data/portfolioProjects";
import { industryPreviewMeta } from "@/data/industryPreviewMeta";

interface CaseStudyHeroProps {
  project: PortfolioProject;
}

export default function CaseStudyHero({
  project,
}: CaseStudyHeroProps) {
  const meta = industryPreviewMeta[project.previewType];
  const Icon = meta.icon;

  return (
    <Section className="case-study-hero">
      <div
        className="case-study-header"
        style={{
          background: `linear-gradient(135deg, ${meta.tint[0]}, ${meta.tint[1]})`,
        }}
      >
        <div
          className="case-study-header-illustration"
          style={{ backgroundImage: `url(${meta.image})` }}
        />

        <div className="case-study-header-icon">
          <Icon size={28} strokeWidth={2} />
        </div>

        <span className="case-study-category">
          {project.category}
        </span>

        <h1>{project.title}</h1>

        <p>{project.description}</p>
      </div>
    </Section>
  );
}
