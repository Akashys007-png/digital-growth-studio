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
    "Website development, SEO, AI automation, branding, analytics, CRM, and digital growth services for small businesses.",
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