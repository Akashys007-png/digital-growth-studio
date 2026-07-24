import Section from "@/components/ui/Section";
import type { PortfolioProject } from "@/data/portfolioProjects";
import CaseStudySectionHeader from "@/components/portfolio/CaseStudySectionHeader";

interface Props {
  project: PortfolioProject;
}

export default function BeforeAfter({
  project,
}: Props) {
  return (
    <Section>
      <div className="before-after">

        <CaseStudySectionHeader
  eyebrow="Transformation"
  title="From outdated to high-performing"
  description="Every redesign focused on creating a faster, more modern, and conversion-focused digital experience."
/>

        <div className="comparison-grid">

          <div className="comparison-card before">

            <h3>{project.beforeAfter.before.title}</h3>

            <ul>
              {project.beforeAfter.before.points.map((item) => (
                <li key={item}>❌ {item}</li>
              ))}
            </ul>

          </div>

          <div className="comparison-card after">

            <h3>{project.beforeAfter.after.title}</h3>

            <ul>
              {project.beforeAfter.after.points.map((item) => (
                <li key={item}>✅ {item}</li>
              ))}
            </ul>

          </div>

        </div>

      </div>
    </Section>
  );
}