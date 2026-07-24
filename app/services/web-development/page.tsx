import type { Metadata } from "next";

import ServicesHero from "@/components/services/ServicesHero";

export const metadata: Metadata = {
  title: "Website Development",
  description:
    "Professional website development services for small businesses.",
};

export default function WebDevelopmentPage() {
  return (
    <>
      <ServicesHero />

      {/* Next Sections */}
    </>
  );
}