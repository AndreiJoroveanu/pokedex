import { useAllItemsParam } from "@/hooks/useAllItemsParam.ts";
import { useStarredPokemon } from "@/features/pokemon/hooks/useStarredPokemon.ts";

import Button from "@/components/button/Button.tsx";

const SidebarOnlyStarredToggle = () => {
  const [onlyStarred, setOnlyStarred] = useAllItemsParam("onlyStarred");
  const { length } = useStarredPokemon();

  return (
    <Button
      onClick={() => setOnlyStarred(onlyStarred ? undefined : true)}
      style={onlyStarred ? "gold" : "normal"}
      className="mb-4 w-full"
    >
      {`Show${onlyStarred ? `ing ${length}` : " only"} starred Pokémon`}
    </Button>
  );
};
export default SidebarOnlyStarredToggle;
