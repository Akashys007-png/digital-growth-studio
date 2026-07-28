import { Dumbbell, Flame } from "lucide-react";
import PreviewNavbar from "./ui/PreviewNavbar";
import PreviewHero from "./ui/PreviewHero";
import PreviewButton from "./ui/PreviewButton";
import PreviewCard from "./ui/PreviewCard";

const tint: [string, string] = ["#ef4444", "#111827"];

export default function FitnessPreview() {
  return (
    <div className="preview fitness-preview">

      <PreviewNavbar />

      <PreviewHero icon={Dumbbell} tint={tint} image="/images/portfolio/fitness.svg" />

      <PreviewButton width="large" />

      <div className="fitness-preview-cards">

        <PreviewCard variant="image" icon={Flame} tint={tint} />

        <PreviewCard variant="image" icon={Dumbbell} tint={tint} />

      </div>

    </div>
  );
}