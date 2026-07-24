import PreviewNavbar from "./ui/PreviewNavbar";
import PreviewHero from "./ui/PreviewHero";
import PreviewButton from "./ui/PreviewButton";
import PreviewCard from "./ui/PreviewCard";
import PreviewRating from "./ui/PreviewRating";

export default function RestaurantPreview() {
  return (
    <div className="preview restaurant-preview">
      <PreviewNavbar />

      <PreviewHero />

      <div className="restaurant-preview-actions">
        <PreviewButton width="medium" />
        <PreviewRating />
      </div>

      <div className="restaurant-preview-section-heading">
        <span />
        <span />
      </div>

      <div className="restaurant-preview-cards">
        <PreviewCard variant="image" />
        <PreviewCard variant="image" />
        <PreviewCard variant="image" />
      </div>
    </div>
  );
}