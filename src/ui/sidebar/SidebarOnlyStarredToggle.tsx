import { useAllItemsParams } from "@/hooks/useUrlParams.ts";
import { useStarredPokemon } from "@/hooks/useStarredPokemon.ts";

import Button from "@/ui/Button.tsx";

const SidebarOnlyStarredToggle = () => {
  const { getUrlParam, setUrlParam } = useAllItemsParams();
  const isButtonSelected = getUrlParam("onlyStarred");

  const { length } = useStarredPokemon();

  return (
    <Button
      onClick={() => setUrlParam("onlyStarred", "true")}
      style={isButtonSelected ? "gold" : "normal"}
      className="mb-4 w-full"
    >
      Show{isButtonSelected ? `ing ${length}` : " only"} starred Pokémon
    </Button>
  );
};
export default SidebarOnlyStarredToggle;
