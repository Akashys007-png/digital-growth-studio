import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { portfolioProjects } from "@/data/portfolioProjects";

import CTA from "@/components/sections/CTA";
import Section from "@/components/ui/Section";
import ProjectMetrics from "@/components/portfolio/ProjectMetrics";
import ProjectNavigation from "@/components/portfolio/ProjectNavigation";
import CaseStudyHero from "@/components/portfolio/CaseStudyHero";
import ProjectSummary from "@/components/portfolio/ProjectSummary";
import ProjectTimeline from "@/components/portfolio/ProjectTimeline";
import ProjectShowcase from "@/components/portfolio/ProjectShowcase";
import BrandPalette from "@/components/portfolio/BrandPalette";
import BusinessImpact from "@/components/portfolio/BusinessImpact";
import ProjectGallery from "@/components/portfolio/ProjectGallery";
import BeforeAfter from "@/components/portfolio/BeforeAfter";
import FadeIn from "@/components/ui/FadeIn";
import ProjectTestimonial from "@/components/portfolio/ProjectTestimonial";
import ReadingProgress from "@/components/portfolio/ui/ReadingProgress";
import ScrollToTop from "@/components/ui/ScrollToTop";
interface PortfolioPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return portfolioProjects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: PortfolioPageProps): Promise<Metadata> {
  const { slug } = await params;

  const project = portfolioProjects.find(
    (item) => item.slug === slug
  );

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: project.title,
    description: project.description,
  };
}

export default async function PortfolioCaseStudyPage({
  params,
}: PortfolioPageProps) {
  const { slug } = await params;

  const project = portfolioProjects.find(
    (item) => item.slug === slug
  );

  if (!project) {
    notFound();
  }

  return (
    <>
      <ReadingProgress />

      <CaseStudyHero project={project} />

      <ProjectSummary project={project} />

      <FadeIn delay={0.1}>
       <ProjectShowcase project={project} />
      </FadeIn>

      <ProjectGallery project={project} />

      <FadeIn delay={0.2}>
  <BeforeAfter project={project} />
</FadeIn>

     <FadeIn>
      <BrandPalette project={project} />
     </FadeIn>

     <FadeIn delay={0.5}>
  <ProjectTestimonial project={project} />
</FadeIn>
      <FadeIn delay={0.3}>
  <ProjectMetrics metrics={project.metrics} />
</FadeIn>

      <FadeIn delay={0.4}>
  <BusinessImpact project={project} />
</FadeIn>

      <FadeIn delay={0.5}>
  <ProjectTimeline timeline={project.timeline} />
</FadeIn>

      <Section>
        <div className="case-study-content">
          <div className="case-study-block">
            <h2>Project Overview</h2>
            <p>{project.overview}</p>
          </div>

          <div className="case-study-block">
            <h2>The Challenge</h2>
            <p>{project.challenge}</p>
          </div>

          <div className="case-study-block">
            <h2>Our Solution</h2>
            <p>{project.solution}</p>
          </div>

          <div className="case-study-block">
            <h2>Key Results</h2>

            <ul>
              {project.results.map((result) => (
                <li key={result}>{result}</li>
              ))}
            </ul>
          </div>

          <div className="case-study-block">
            <h2>Technologies Used</h2>

            <div className="case-study-tags">
              {project.technologies.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <ProjectNavigation currentSlug={project.slug} />

      <CTA />
      <ScrollToTop />
    </>
  );
}