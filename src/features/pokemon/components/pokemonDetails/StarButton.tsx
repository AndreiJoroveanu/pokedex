import { getRouteApi } from "@tanstack/react-router";
import { StarIcon as StarIconSolid } from "@heroicons/react/24/solid";
import { StarIcon as StarIconOutline } from "@heroicons/react/24/outline";

import { useStarredPokemon } from "@/features/pokemon/hooks/useStarredPokemon.ts";

import Button from "@/components/button/Button.tsx";

const route = getRouteApi("/pokemon/$pokemonId");

const StarButton = () => {
  const { pokemonId } = route.useParams();
  const pokemonIdAsNumber = Number(pokemonId);
  const { starredPokemonIds, toggleStarredPokemonIds } = useStarredPokemon();

  return (
    <Button
      onClick={() => toggleStarredPokemonIds(pokemonIdAsNumber)}
      variant="gold"
      className="pointer-events-auto ml-auto flex items-center gap-2 px-4"
    >
      {starredPokemonIds.includes(pokemonIdAsNumber) ? (
        <>
          <StarIconSolid className="size-4" /> Starred
        </>
      ) : (
        <>
          <StarIconOutline className="size-4" /> Star
        </>
      )}
    </Button>
  );
};
export default StarButton;
