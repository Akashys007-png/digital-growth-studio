import { UtensilsCrossed, Coffee, Soup } from "lucide-react";
import PreviewNavbar from "./ui/PreviewNavbar";
import PreviewHero from "./ui/PreviewHero";
import PreviewButton from "./ui/PreviewButton";
import PreviewCard from "./ui/PreviewCard";
import PreviewRating from "./ui/PreviewRating";

const tint: [string, string] = ["#fb923c", "#9a3412"];

export default function RestaurantPreview() {
  return (
    <div className="preview restaurant-preview">
      <PreviewNavbar />

      <PreviewHero icon={UtensilsCrossed} tint={tint} />

      <div className="restaurant-preview-actions">
        <PreviewButton width="medium" />
        <PreviewRating />
      </div>

      <div className="restaurant-preview-section-heading">
        <span />
        <span />
      </div>

      <div className="restaurant-preview-cards">
        <PreviewCard variant="image" icon={Soup} tint={tint} />
        <PreviewCard variant="image" icon={Coffee} tint={tint} />
        <PreviewCard variant="image" icon={UtensilsCrossed} tint={tint} />
      </div>
    </div>
  );
}