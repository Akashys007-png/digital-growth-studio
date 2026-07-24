import type { ProjectMetric } from "@/data/portfolioProjects";

interface ProjectMetricsProps {
  metrics: ProjectMetric[];
}

export default function ProjectMetrics({
  metrics,
}: ProjectMetricsProps) {
  return (
    <section className="project-metrics">
      {metrics.map((metric) => (
        <div
          key={metric.label}
          className="metric-card"
        >
          <h3>{metric.value}</h3>

          <p>{metric.label}</p>
        </div>
      ))}
    </section>
  );
}