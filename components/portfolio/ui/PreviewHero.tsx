import type { LucideIcon } from "lucide-react";
import { Sparkles } from "lucide-react";

interface PreviewHeroProps {
  icon?: LucideIcon;
  tint?: [string, string];
  image?: string;
}

export default function PreviewHero({
  icon: Icon = Sparkles,
  tint = ["#fb923c", "#9a3412"],
  image,
}: PreviewHeroProps) {
  return (
    <div className="preview-hero">
      <div
        className="preview-hero-image"
        style={
          image
            ? undefined
            : { background: `linear-gradient(135deg, ${tint[0]}, ${tint[1]})` }
        }
      >
        {image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={image} alt="" />
        ) : (
          <Icon size={22} strokeWidth={2} />
        )}
      </div>

      <div className="preview-hero-text">
        <span />
        <span />
      </div>
    </div>
  );
}