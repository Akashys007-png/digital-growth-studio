import type { Metadata } from "next";

import ServicesHero from "@/components/services/ServicesHero";
import ServicesOverview from "@/components/services/ServicesOverview";
import FeaturedServices from "@/components/services/FeaturedServices";
import ServiceProcess from "@/components/services/ServiceProcess";
import ServiceBenefits from "@/components/services/ServiceBenefits";
import FAQ from "@/components/sections/FAQ";
import { servicesFaq } from "@/data/servicesFaq";
import ServicesCTA from "@/components/services/ServicesCTA";
import WhyChooseServices from "@/components/services/WhyChooseServices";
import TechnologyStack from "@/components/services/TechnologyStack";
import FeaturedProjects from "@/components/services/FeaturedProjects";
import ServicesFAQ from "@/components/services/ServicesFAQ";

export const metadata: Metadata = {
  title: "Services",

  description:
    "Explore our website development, branding, SEO, AI automation, analytics, and digital growth services for small businesses.",

  openGraph: {
    title: "Our Services | Digital Growth Studio",
    description:
      "Professional digital services designed to help small businesses grow online.",
    images: [
      {
        url: "/images/og/services.png",
        width: 1200,
        height: 630,
        alt: "Digital Growth Studio Services",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Our Services | Digital Growth Studio",
    description:
      "Professional digital services designed to help small businesses grow online.",
    images: ["/images/og/services.png"],
  },
};

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServicesOverview />
      <FeaturedServices />
      <WhyChooseServices />
      <ServiceProcess />
      <TechnologyStack />
      <FeaturedProjects />
      <ServicesFAQ />
      <ServiceBenefits />
      <FAQ
       items={servicesFaq}
       badge="Services FAQ"
       title="Questions About"
       highlight="Our Services"
       description="Everything you need to know before starting your project."
/>
      <ServicesCTA />
    </>
  );
}