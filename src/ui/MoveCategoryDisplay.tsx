import { moveCategories } from "@/data/moveCategories.ts";
import categories from "/move-categories.png";

const MoveCategoryDisplay = ({ category }: { category: string }) => (
  <div
    key={category}
    style={{ background: moveCategories[category]?.color }}
    className="flex h-6 w-26 items-center rounded-full saturate-150 dark:saturate-125"
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
