import type { Metadata } from "next";

import { portfolioProjects } from "@/data/portfolioProjects";

import PortfolioGrid from "@/components/shared/PortfolioGrid";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import CTA from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "Portfolio",

  description:
    "Explore our portfolio of websites, branding projects, digital experiences, and business growth solutions.",

  openGraph: {
    title: "Portfolio | Digital Growth Studio",
    description:
      "See how we've helped businesses transform their online presence with modern digital solutions.",
    images: [
      {
        url: "/images/og/portfolio.png",
        width: 1200,
        height: 630,
        alt: "Digital Growth Studio Portfolio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Portfolio | Digital Growth Studio",
    description:
      "See how we've helped businesses transform their online presence with modern digital solutions.",
    images: ["/images/og/portfolio.png"],
  },
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