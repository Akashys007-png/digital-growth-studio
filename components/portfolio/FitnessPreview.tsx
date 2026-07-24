import PreviewNavbar from "./ui/PreviewNavbar";
import PreviewHero from "./ui/PreviewHero";
import PreviewButton from "./ui/PreviewButton";
import PreviewCard from "./ui/PreviewCard";

export default function FitnessPreview() {
  return (
    <div className="preview fitness-preview">

      <PreviewNavbar />

      <PreviewHero />

      <PreviewButton width="large" />

      <div className="fitness-preview-cards">

        <PreviewCard />

        <PreviewCard />

      </div>

    </div>
  );
}