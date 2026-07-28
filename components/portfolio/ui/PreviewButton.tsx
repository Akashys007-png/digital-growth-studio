import { ArrowRight } from "lucide-react";

interface PreviewButtonProps {
  width?: "small" | "medium" | "large";
}

export default function PreviewButton({
  width = "medium",
}: PreviewButtonProps) {
  return (
    <div className={`preview-button preview-button-${width}`}>
      <ArrowRight size={12} strokeWidth={2.5} />
    </div>
  );
}