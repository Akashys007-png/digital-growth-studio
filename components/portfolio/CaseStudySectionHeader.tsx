interface CaseStudySectionHeaderProps {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
}

export default function CaseStudySectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
}: CaseStudySectionHeaderProps) {
  return (
    <div
      className={`case-study-section-header case-study-section-header--${align}`}
    >
      <span className="case-study-eyebrow">
        {eyebrow}
      </span>

      <h2>{title}</h2>

      <p>{description}</p>
    </div>
  );
}