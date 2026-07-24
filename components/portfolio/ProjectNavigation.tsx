import Link from "next/link";

import { portfolioProjects } from "@/data/portfolioProjects";

interface ProjectNavigationProps {
  currentSlug: string;
}

export default function ProjectNavigation({
  currentSlug,
}: ProjectNavigationProps) {
  const currentIndex = portfolioProjects.findIndex(
    (project) => project.slug === currentSlug
  );

  const previous =
    currentIndex > 0
      ? portfolioProjects[currentIndex - 1]
      : null;

  const next =
    currentIndex < portfolioProjects.length - 1
      ? portfolioProjects[currentIndex + 1]
      : null;

  return (
    <section className="project-navigation">
      {previous ? (
        <Link
          href={previous.href}
          className="project-nav-card"
        >
          <span>← Previous Project</span>

          <h3>{previous.title}</h3>
        </Link>
      ) : (
        <div />
      )}

      {next ? (
        <Link
          href={next.href}
          className="project-nav-card right"
        >
          <span>Next Project →</span>

          <h3>{next.title}</h3>
        </Link>
      ) : (
        <div />
      )}
    </section>
  );
}