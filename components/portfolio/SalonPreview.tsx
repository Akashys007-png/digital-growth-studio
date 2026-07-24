import PreviewNavbar from "./ui/PreviewNavbar";
import PreviewHero from "./ui/PreviewHero";
import PreviewButton from "./ui/PreviewButton";
import PreviewCard from "./ui/PreviewCard";

export default function SalonPreview()  {
  return (
    <div className="preview salon-preview">

      <PreviewNavbar />

      <PreviewHero />

      <div className="salon-preview-actions">
        <PreviewButton width="medium" />
      </div>

      <div className="salon-preview-services">
        <PreviewCard />
        <PreviewCard />
        <PreviewCard />
      </div>

    </div>
  );
}