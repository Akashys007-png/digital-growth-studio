import Section from "@/components/ui/Section";
import type { ProjectTimelineStep } from "@/data/portfolioProjects";

interface ProjectTimelineProps {
  timeline: ProjectTimelineStep[];
}

export default function ProjectTimeline({
  timeline,
}: ProjectTimelineProps) {
  return (
    <Section>
      <div className="project-timeline">
        <div className="project-timeline-heading">
          <h2>Project Timeline</h2>
          <p>
            From discovery to launch, here&apos;s how the project
            was planned and delivered.
          </p>
        </div>

        <div className="timeline-list">
          {timeline.map((step) => (
            <div
              key={step.title}
              className="timeline-item"
            >
              <div className="timeline-dot" />

              <div className="timeline-content">
                <h3>{step.title}</h3>

                <p>{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}