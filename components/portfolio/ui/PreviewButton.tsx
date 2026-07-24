interface PreviewButtonProps {
  width?: "small" | "medium" | "large";
}

export default function PreviewButton({
  width = "medium",
}: PreviewButtonProps) {
  return (
    <div
      className={`preview-button preview-button-${width}`}
    />
  );
}