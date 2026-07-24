import PreviewNavbar from "./ui/PreviewNavbar";
import PreviewHero from "./ui/PreviewHero";
import PreviewButton from "./ui/PreviewButton";
import PreviewCard from "./ui/PreviewCard";

export default function RealEstatePreview()  {
  return (
    <div className="preview realestate-preview">

      <PreviewNavbar />

      <PreviewHero />

      <PreviewButton width="large" />

      <div className="realestate-preview-grid">
        <PreviewCard variant="image" />
        <PreviewCard variant="image" />
      </div>

    </div>
  );
}