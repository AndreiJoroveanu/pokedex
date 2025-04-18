import { useAllItemsParams } from "@/hooks/useUrlParams.ts";
import { useStarredPokemon } from "@/features/pokemon/hooks/useStarredPokemon.ts";

import Button from "@/components/button/Button.tsx";

const SidebarOnlyStarredToggle = () => {
  const { getUrlParam, setUrlParam } = useAllItemsParams();
  const isButtonSelected = getUrlParam("onlyStarred");

  const { length } = useStarredPokemon();

  return (
    <Button
      onClick={() => setUrlParam("onlyStarred", true)}
      style={isButtonSelected ? "gold" : "normal"}
      className="mb-4 w-full"
    >
      Show{isButtonSelected ? `ing ${length}` : " only"} starred Pokémon
    </Button>
  );
};
export default SidebarOnlyStarredToggle;
