import { useParams } from "react-router";
import { HiOutlineStar } from "react-icons/hi2";

import { useStarredPokemon } from "../../hooks/useStarredPokemon.ts";

import Button from "../../ui/Button.tsx";

const StarPokemonButton = () => {
  const { name } = useParams() as { name: string };

  const { starredPokemon, toggleStarredPokemon } = useStarredPokemon();

  return (
    <Button
      onClick={() => toggleStarredPokemon(name)}
      style="gold"
      className="fixed top-28 right-4 z-10 flex items-center gap-2 px-4"
    >
      <HiOutlineStar />
      {starredPokemon.includes(name) ? "Starred" : "Star"}
    </Button>
  );
};
export default StarPokemonButton;
