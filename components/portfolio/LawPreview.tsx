import { Scale } from "lucide-react";
import PreviewNavbar from "./ui/PreviewNavbar";
import PreviewAvatar from "./ui/PreviewAvatar";
import PreviewButton from "./ui/PreviewButton";

const tint: [string, string] = ["#3b82f6", "#172554"];

export default function LawPreview()  {
  return (
    <div className="preview law-preview">

      <PreviewNavbar />

      <PreviewAvatar icon={Scale} tint={tint} />

      <PreviewButton width="large" />

    </div>
  );
}