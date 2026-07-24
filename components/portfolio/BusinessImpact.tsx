import Section from "@/components/ui/Section";
import type { PortfolioProject } from "@/data/portfolioProjects";
import CaseStudySectionHeader from "@/components/portfolio/CaseStudySectionHeader";

interface Props {
  project: PortfolioProject;
}

export default function BusinessImpact({
  project,
}: Props) {
  return (
    <Section>
      <div className="business-impact">

        <CaseStudySectionHeader
  eyebrow="Business Impact"
  title="Designed to deliver measurable business outcomes"
  description="Every design decision focused on improving user experience, website performance, and business growth."
/>

        <div className="impact-grid">

          {project.impact.map((item) => (

            <div
              key={item.label}
              className="impact-card"
            >

              <h3>{item.value}</h3>

              <strong>{item.label}</strong>

              <p>{item.description}</p>

            </div>

          ))}

        </div>

      </div>
    </Section>
  );
}