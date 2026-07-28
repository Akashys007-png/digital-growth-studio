import type { LucideIcon } from "lucide-react";
import { Sparkles } from "lucide-react";

interface PreviewCardProps {
  variant?: "default" | "image" | "compact";
  icon?: LucideIcon;
  tint?: [string, string];
}

export default function PreviewCard({
  variant = "default",
  icon: Icon = Sparkles,
  tint = ["#fdba74", "#ea580c"],
}: PreviewCardProps) {
  return (
    <div className={`mini-preview-card mini-preview-card-${variant}`}>

      {variant === "image" && (
        <div
          className="mini-preview-card-image"
          style={{
            background: `linear-gradient(135deg, ${tint[0]}, ${tint[1]})`,
          }}
        >
          <Icon size={16} strokeWidth={2} />
        </div>
      )}

      <div className="mini-preview-card-content">

        <span className="mini-preview-card-title" />

        <span className="mini-preview-card-text" />

      </div>

    </div>
  );
}