interface PreviewCardProps {
  variant?: "default" | "image" | "compact";
}

export default function PreviewCard({
  variant = "default",
}: PreviewCardProps) {
  return (
    <div className={`mini-preview-card mini-preview-card-${variant}`}>

      {variant === "image" && (
        <div className="mini-preview-card-image" />
      )}

      <div className="mini-preview-card-content">

        <span className="mini-preview-card-title" />

        <span className="mini-preview-card-text" />

      </div>

    </div>
  );
}