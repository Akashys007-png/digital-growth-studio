import { notFound } from "next/navigation";
import type { Metadata } from "next";

import {
  industries,
  getIndustryBySlug,
} from "@/data/industries";

import IndustryPageHero from "@/components/industries/IndustryPageHero";
import IndustryChallenges from "@/components/industries/IndustryChallenges";
import IndustrySolutions from "@/components/industries/IndustrySolutions";
import IndustryProject from "@/components/industries/IndustryProject";
import IndustryPageFAQ from "@/components/industries/IndustryPageFAQ";
import IndustryPageCTA from "@/components/industries/IndustryPageCTA";

interface IndustryPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return industries.map((industry) => ({
    slug: industry.slug,
  }));
}

export async function generateMetadata({
  params,
}: IndustryPageProps): Promise<Metadata> {
  const { slug } = await params;

  const industry = getIndustryBySlug(slug);

  if (!industry) {
    return {
      title: "Industry Not Found",
    };
  }

  return {
    title: industry.name,
    description: industry.description,

    openGraph: {
      title: `${industry.name} | Digital Growth Studio`,
      description: industry.description,
      images: [
        {
          url: "/images/og/home.png",
          width: 1200,
          height: 630,
          alt: `${industry.name} Digital Solutions`,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: `${industry.name} | Digital Growth Studio`,
      description: industry.description,
      images: ["/images/og/home.png"],
    },
  };
}

export default async function IndustryPage({
  params,
}: IndustryPageProps) {
  const { slug } = await params;

  const industry = getIndustryBySlug(slug);

  if (!industry) {
    notFound();
  }

  return (
    <>
      <IndustryPageHero
        badge={industry.badge}
        headline={industry.headline}
        highlight={industry.highlight}
        description={industry.description}
      />

      <IndustryChallenges
        challenges={industry.challenges}
      />

      <IndustrySolutions
        solutions={industry.solutions}
      />

      <IndustryProject
        project={industry.project}
      />

      <IndustryPageFAQ
        faqs={industry.faqs}
      />

      <IndustryPageCTA
        title={industry.ctaTitle}
        description={industry.ctaDescription}
      />
    </>
  );
}