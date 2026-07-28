import type { LucideIcon } from "lucide-react";
import { User } from "lucide-react";

interface PreviewAvatarProps {
  icon?: LucideIcon;
  tint?: [string, string];
}

export default function PreviewAvatar({
  icon: Icon = User,
  tint = ["#bae6fd", "#0284c7"],
}: PreviewAvatarProps) {
  return (
    <div className="preview-avatar">
      <div
        className="preview-avatar-image"
        style={{
          background: `linear-gradient(135deg, ${tint[0]}, ${tint[1]})`,
        }}
      >
        <Icon size={20} strokeWidth={2} />
      </div>

      <div className="preview-avatar-content">
        <span className="preview-avatar-name" />
        <span className="preview-avatar-role" />
      </div>
    </div>
  );
}