import { Star } from "lucide-react";

export default function PreviewRating() {
  return (
    <div className="preview-rating">
      <div className="preview-rating-stars">
        {Array.from({ length: 5 }).map((_, index) => (
          <Star key={index} size={11} fill="#f59e0b" strokeWidth={0} />
        ))}
      </div>

      <div className="preview-rating-line" />
    </div>
  );
}