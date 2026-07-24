import PreviewNavbar from "./ui/PreviewNavbar";
import PreviewAvatar from "./ui/PreviewAvatar";
import PreviewButton from "./ui/PreviewButton";
import PreviewCard from "./ui/PreviewCard";
import PreviewRating from "./ui/PreviewRating";

export default function DentalPreview()  {
  return (
    <div className="preview dental-preview">

      <PreviewNavbar />

      <div className="dental-preview-hero">

        <PreviewAvatar />

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