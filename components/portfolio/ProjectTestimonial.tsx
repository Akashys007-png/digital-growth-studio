import Section from "@/components/ui/Section";
import type { PortfolioProject } from "@/data/portfolioProjects";
import CaseStudySectionHeader from "@/components/portfolio/CaseStudySectionHeader";

interface Props {
  project: PortfolioProject;
}

export default function ProjectTestimonial({
  project,
}: Props) {
  return (
    <Section>
      <CaseStudySectionHeader
    eyebrow="Client Feedback"
    title="Trusted by growing businesses"
    description="Every successful project is built on collaboration, communication, and measurable results."
  />
      <div className="project-testimonial">
        <div className="testimonial-stars">
          {"★".repeat(project.testimonial.rating)}
        </div>

        <blockquote>
          “{project.testimonial.quote}”
        </blockquote>

        <div className="testimonial-author">
          <strong>{project.testimonial.author}</strong>

          <span>
            {project.testimonial.role} · {project.testimonial.company}
          </span>
        </div>
      </div>
    </Section>
  );
}