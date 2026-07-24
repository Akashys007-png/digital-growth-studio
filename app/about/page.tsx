import AboutHero from "@/components/about/AboutHero";
import OurStory from "@/components/about/OurStory";
import MissionVision from "@/components/about/MissionVision";
import CoreValues from "@/components/about/CoreValues";
import Technologies from "@/components/about/Technologies";
import WhyUs from "@/components/about/WhyUs";
import Results from "@/components/about/Results";
import Industries from "@/components/about/Industries";
import AboutCTA from "@/components/about/AboutCTA";

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