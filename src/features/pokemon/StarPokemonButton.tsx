import { useParams } from "react-router";
import { StarIcon } from "@heroicons/react/24/outline";

import { useStarredPokemon } from "../../hooks/useStarredPokemon.ts";

import Button from "../../ui/Button.tsx";

const StarPokemonButton = () => {
  const { name } = useParams() as { name: string };

  const { starredPokemon, toggleStarredPokemon } = useStarredPokemon();

  return (
    <Button
      onClick={() => toggleStarredPokemon(name)}
      style="gold"
      className="fixed top-22 right-4 z-10 flex items-center gap-2 px-4 sm:top-28"
    >
      <StarIcon className="size-4" />
      {starredPokemon.includes(name) ? "Starred" : "Star"}
    </Button>
  );
};
export default StarPokemonButton;
