import type { Metadata } from "next";

import { industries } from "@/data/site";
import { servicesFaq } from "@/data/servicesFaq";

import IndustriesHero from "@/components/industries/IndustriesHero";
import IndustriesGrid from "@/components/shared/IndustriesGrid";
import FAQ from "@/components/sections/FAQ";
import CTA from "@/components/sections/CTA";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import IndustryBenefits from "@/components/industries/IndustryBenefits";
import IndustriesOverview from "@/components/industries/IndustriesOverview";
import IndustryProjects from "@/components/industries/IndustryProjects";
import IndustriesFAQ from "@/components/industries/IndustriesFAQ";
import IndustriesCTA from "@/components/industries/IndustriesCTA";


export const metadata: Metadata = {
  title: "Industries",
  description:
    "Digital solutions tailored for restaurants, healthcare, retail, fitness, real estate, contractors, and professional services.",

  openGraph: {
    title: "Industries | Digital Growth Studio",
    description:
      "Digital solutions tailored for restaurants, healthcare, retail, fitness, real estate, contractors, and professional services.",
    images: [
      {
        url: "/images/og/home.png",
        width: 1200,
        height: 630,
        alt: "Digital Growth Studio Industries",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Industries | Digital Growth Studio",
    description:
      "Digital solutions tailored for restaurants, healthcare, retail, fitness, real estate, contractors, and professional services.",
    images: ["/images/og/home.png"],
  },
};

export default function IndustriesPage() {
  return (
    <>
      <IndustriesHero />
      <IndustriesOverview />

      <Section>
        <SectionHeading
          badge="Industries"
          title="Industries We"
          highlight="Serve"
          description="Every industry has unique challenges. We create digital experiences designed around your customers, workflows, and business goals."
        />

        <IndustriesGrid items={industries} />
      </Section>
      
      <IndustryBenefits />
      <IndustryProjects />
      <IndustriesFAQ />
      <IndustriesCTA />


      <FAQ
        items={servicesFaq}
        badge="Industries FAQ"
        title="Frequently Asked"
        highlight="Questions"
        description="Common questions about working with Digital Growth Studio."
      />

      <CTA />
    </>
  );
}