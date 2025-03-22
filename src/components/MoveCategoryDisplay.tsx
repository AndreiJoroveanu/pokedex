import { moveCategories } from "@/data/moveCategories.ts";
import categories from "/move-categories.webp";

interface DisplayProps {
  category: string;
  className?: string;
}

const MoveCategoryDisplay = ({ category, className }: DisplayProps) => (
  <div
    key={category}
    style={{ background: moveCategories[category]?.color }}
    className={`flex h-6 w-26 items-center rounded-full ${className}`.trim()}
  >
    {/* CSS image sprite icon */}
    <div
      className="-ml-2.5 inline-block h-10 min-w-12.5 scale-40"
      style={{
        backgroundImage: `url(${categories})`,
        backgroundPosition: `${moveCategories[category].sprite.x}px 0`,
      }}
    />

    <div className="-ml-5 flex w-full justify-center">
      <p className="scale-x-90 font-semibold text-white">
        {category.toUpperCase()}
      </p>
    </div>
  </div>
);
export default MoveCategoryDisplay;
