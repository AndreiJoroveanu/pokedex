import { useResetAllItemsUrlParams } from "@/hooks/useResetAllItemsUrlParams.ts";

import Button from "@/components/button/Button.tsx";

const SidebarClearFilter = () => {
  const { canReset, reset } = useResetAllItemsUrlParams();

  return (
    <Button
      onClick={reset}
      disabled={!canReset}
      variant={canReset ? "indigo" : "normal"}
      className="w-full disabled:cursor-not-allowed disabled:opacity-25 lg:mb-4"
    >
      Clear Filtering
    </Button>
  );
};
export default SidebarClearFilter;
