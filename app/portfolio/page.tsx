import type { Metadata } from "next";

import { portfolioProjects } from "@/data/portfolioProjects";

import PortfolioGrid from "@/components/shared/PortfolioGrid";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import CTA from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Explore our portfolio of modern website concepts built for restaurants, healthcare, beauty, fitness, legal, and real estate businesses.",
};

export default function PortfolioPage() {
  return (
    <>
      <Section className="portfolio-page-hero">
        <SectionHeading
          badge="Portfolio"
          title="Projects That"
          highlight="Deliver Results"
          description="Explore our collection of website concepts designed to help businesses grow through thoughtful design, user experience, and modern technology."
        />
      </Section>

      <Section>
        <PortfolioGrid items={portfolioProjects} />
      </Section>

      <CTA />
    </>
  );
}