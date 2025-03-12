import { useAllItemsParams } from "@/hooks/useUrlParams.ts";

import Button from "@/ui/Button.tsx";

const FilterErrorMessage = ({ itemType }: { itemType: string }) => {
  const { resetUrlParams } = useAllItemsParams();

  return (
    <div className="flex flex-col items-center justify-center gap-4 py-8 text-center lg:h-screen">
      <h2 className="text-3xl font-bold">No {itemType} Found</h2>

      <p className="mb-2 font-semibold text-slate-600 dark:text-slate-400">
        Try other filtering options or another search query
      </p>

      <Button
        onClick={resetUrlParams}
        style="indigo"
        className="w-full max-lg:hidden"
      >
        Clear Filtering
      </Button>
    </div>
  );
};
export default FilterErrorMessage;
