import { moveCategories } from "@/data/moveCategories.ts";
import categories from "/move-categories.webp";

interface DisplayProps {
  category: string;
  className?: string;
}

const MoveCategoryDisplay = ({ category, className = "" }: DisplayProps) => (
  <div
    style={{ background: moveCategories[category]?.color }}
    className={`flex h-6 w-26 items-center rounded-full ${className}`.trimEnd()}
  >
    {/* CSS image sprite icon */}
    <div
      style={{
        backgroundImage: `url(${categories})`,
        backgroundPosition: `${moveCategories[category].sprite.x}px 0`,
      }}
      className="-ml-2.5 inline-block h-10 min-w-12.5 scale-40"
    />

    <p className="-ml-5 flex w-full scale-x-90 justify-center font-semibold text-white uppercase">
      {category}
    </p>
  </div>
);
export default MoveCategoryDisplay;
