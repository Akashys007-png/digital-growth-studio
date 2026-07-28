import { Scissors } from "lucide-react";
import PreviewNavbar from "./ui/PreviewNavbar";
import PreviewHero from "./ui/PreviewHero";
import PreviewButton from "./ui/PreviewButton";
import PreviewCard from "./ui/PreviewCard";

const tint: [string, string] = ["#e879f9", "#7e22ce"];

export default function SalonPreview()  {
  return (
    <div className="preview salon-preview">

      <PreviewNavbar />

      <PreviewHero icon={Scissors} tint={tint} image="/images/portfolio/salon.svg" />

      <div className="salon-preview-actions">
        <PreviewButton width="medium" />
      </div>

      <div className="salon-preview-services">
        <PreviewCard variant="image" icon={Scissors} tint={tint} />
        <PreviewCard variant="image" icon={Scissors} tint={tint} />
        <PreviewCard variant="image" icon={Scissors} tint={tint} />
      </div>

    </div>
  );
}