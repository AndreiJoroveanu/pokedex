import { useAllItemsParams } from "@/hooks/useUrlParams.ts";

import Button from "@/ui/Button.tsx";

const SidebarClearFilter = () => {
  const { getUrlParam, resetUrlParams } = useAllItemsParams();
  const isClearButtonDisabled =
    !getUrlParam("generation") &&
    !getUrlParam("type") &&
    !getUrlParam("onlyStarred") &&
    !getUrlParam("q");

  return (
    <Button
      onClick={resetUrlParams}
      disabled={isClearButtonDisabled}
      style={!isClearButtonDisabled ? "indigo" : "normal"}
      className="w-full disabled:cursor-not-allowed disabled:opacity-25 lg:mb-4"
    >
      Clear Filtering
    </Button>
  );
};
export default SidebarClearFilter;
