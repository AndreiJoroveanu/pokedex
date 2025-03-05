import { useUrlParams } from "@/hooks/useUrlParams.ts";

import Button from "@/ui/Button.tsx";

const SidebarOnlyStarredToggle = () => {
  const { getUrlParam, setUrlParam } = useUrlParams();

  return (
    <Button
      onClick={() => setUrlParam("onlyStarred", "true")}
      style={getUrlParam("onlyStarred") ? "gold" : "normal"}
      className="mb-4 w-full"
    >
      Show{getUrlParam("onlyStarred") ? `ing ${length}` : " only"} starred
      Pokémon
    </Button>
  );
};
export default SidebarOnlyStarredToggle;
