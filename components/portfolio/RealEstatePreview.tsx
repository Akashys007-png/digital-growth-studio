import { Home, Building2 } from "lucide-react";
import PreviewNavbar from "./ui/PreviewNavbar";
import PreviewHero from "./ui/PreviewHero";
import PreviewButton from "./ui/PreviewButton";
import PreviewCard from "./ui/PreviewCard";

const tint: [string, string] = ["#2dd4bf", "#0f766e"];

export default function RealEstatePreview()  {
  return (
    <div className="preview realestate-preview">

      <PreviewNavbar />

      <PreviewHero icon={Home} tint={tint} image="/images/portfolio/realestate.svg" />

      <PreviewButton width="large" />

      <div className="realestate-preview-grid">
        <PreviewCard variant="image" icon={Building2} tint={tint} />
        <PreviewCard variant="image" icon={Home} tint={tint} />
      </div>

    </div>
  );
}