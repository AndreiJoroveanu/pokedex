import { moveCategories } from "@/data/moveCategories.ts";

const MoveCategoryDisplay = ({ category }: { category: string }) => {
  const categoryInfo = moveCategories.find((c) => c.value === category);

  return (
    <div
      key={categoryInfo?.value}
      style={{ background: categoryInfo?.color }}
      className="flex h-6 w-26 items-center rounded-full saturate-150 dark:saturate-125"
    >
      <img
        src={categoryInfo?.icon}
        alt={categoryInfo?.value}
        className="ml-1.5 size-4"
      />

      <div className="-ml-2 flex w-full justify-center">
        <p className="scale-x-90 font-semibold text-white">
          {categoryInfo?.value.toUpperCase()}
        </p>
      </div>
    </div>
  );
};
export default MoveCategoryDisplay;
