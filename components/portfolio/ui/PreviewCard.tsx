import type { LucideIcon } from "lucide-react";
import { Sparkles } from "lucide-react";

interface PreviewCardProps {
  variant?: "default" | "image" | "compact";
  icon?: LucideIcon;
  tint?: [string, string];
  image?: string;
}

export default function PreviewCard({
  variant = "default",
  icon: Icon = Sparkles,
  tint = ["#fdba74", "#ea580c"],
  image,
}: PreviewCardProps) {
  return (
    <div className={`mini-preview-card mini-preview-card-${variant}`}>

      {variant === "image" && (
        <div
          className="mini-preview-card-image"
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
            <Icon size={16} strokeWidth={2} />
          )}
        </div>
      )}

      <div className="mini-preview-card-content">

        <span className="mini-preview-card-title" />

        <span className="mini-preview-card-text" />

      </div>

    </div>
  );
}