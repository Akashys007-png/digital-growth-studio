import { Scale } from "lucide-react";
import PreviewNavbar from "./ui/PreviewNavbar";
import PreviewHero from "./ui/PreviewHero";
import PreviewAvatar from "./ui/PreviewAvatar";
import PreviewButton from "./ui/PreviewButton";

const tint: [string, string] = ["#3b82f6", "#172554"];

export default function LawPreview()  {
  return (
    <div className="preview law-preview">

      <PreviewNavbar />

      <PreviewHero icon={Scale} tint={tint} image="/images/portfolio/law.svg" />

      <PreviewAvatar icon={Scale} tint={tint} />

      <PreviewButton width="large" />

    </div>
  );
}