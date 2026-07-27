import AboutHero from "@/components/about/AboutHero";
import OurStory from "@/components/about/OurStory";
import MissionVision from "@/components/about/MissionVision";
import CoreValues from "@/components/about/CoreValues";
import Technologies from "@/components/about/Technologies";
import WhyUs from "@/components/about/WhyUs";
import Results from "@/components/about/Results";
import Industries from "@/components/about/Industries";
import AboutCTA from "@/components/about/AboutCTA";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",

  description:
    "Learn more about Digital Growth Studio, our mission, our values, and how we help small businesses succeed online.",

  openGraph: {
    title: "About Digital Growth Studio",
    description:
      "Meet the team and discover our mission to empower small businesses through technology.",
    images: [
      {
        url: "/images/og/about.png",
        width: 1200,
        height: 630,
        alt: "About Digital Growth Studio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "About Digital Growth Studio",
    description:
      "Meet the team and discover our mission to empower small businesses through technology.",
    images: ["/images/og/about.png"],
  },
};
export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <OurStory />
      <MissionVision />
      <CoreValues />
      <Technologies />
      <WhyUs />
      <Results />
      <Industries />
      <AboutCTA />
    </>
  );
}