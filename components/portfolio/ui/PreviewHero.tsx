import type { LucideIcon } from "lucide-react";
import { Sparkles } from "lucide-react";

interface PreviewHeroProps {
  icon?: LucideIcon;
  tint?: [string, string];
}

export default function PreviewHero({
  icon: Icon = Sparkles,
  tint = ["#fb923c", "#9a3412"],
}: PreviewHeroProps) {
  return (
    <div className="preview-hero">
      <div
        className="preview-hero-image"
        style={{
          background: `linear-gradient(135deg, ${tint[0]}, ${tint[1]})`,
        }}
      >
        <Icon size={22} strokeWidth={2} />
      </div>

      <div className="preview-hero-text">
        <span />
        <span />
      </div>
    </div>
  );
}