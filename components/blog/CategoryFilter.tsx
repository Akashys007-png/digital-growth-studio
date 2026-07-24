interface CategoryFilterProps {
  categories: string[];
  selected: string;
  onSelect: (category: string) => void;
}

export default function CategoryFilter({
  categories,
  selected,
  onSelect,
}: CategoryFilterProps) {
  return (
    <div className="category-filter">
      <button
        type="button"
        className={selected === "All" ? "active" : ""}
        onClick={() => onSelect("All")}
      >
        All
      </button>

      {categories.map((category) => (
        <button
          key={category}
          type="button"
          className={selected === category ? "active" : ""}
          onClick={() => onSelect(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}