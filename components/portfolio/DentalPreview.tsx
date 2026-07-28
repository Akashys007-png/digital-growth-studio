import { Stethoscope } from "lucide-react";
import PreviewNavbar from "./ui/PreviewNavbar";
import PreviewHero from "./ui/PreviewHero";
import PreviewAvatar from "./ui/PreviewAvatar";
import PreviewButton from "./ui/PreviewButton";
import PreviewCard from "./ui/PreviewCard";
import PreviewRating from "./ui/PreviewRating";

const tint: [string, string] = ["#38bdf8", "#0369a1"];

export default function DentalPreview()  {
  return (
    <div className="preview dental-preview">

      <PreviewNavbar />

      <PreviewHero icon={Stethoscope} tint={tint} image="/images/portfolio/dental.svg" />

      <div className="dental-preview-hero">

        <PreviewAvatar icon={Stethoscope} tint={tint} />

        <PreviewButton width="medium" />

      </div>

      <div className="dental-preview-services">

        <PreviewCard variant="compact" />

        <PreviewCard variant="compact" />

      </div>

      <PreviewRating />

    </div>
  );
}