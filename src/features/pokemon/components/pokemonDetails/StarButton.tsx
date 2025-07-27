import { getRouteApi } from "@tanstack/react-router";
import { StarIcon as StarIconSolid } from "@heroicons/react/24/solid";
import { StarIcon as StarIconOutline } from "@heroicons/react/24/outline";

import { useStarredPokemon } from "@/features/pokemon/hooks/useStarredPokemon.ts";

import Button from "@/components/button/Button.tsx";

const route = getRouteApi("/pokemon/$pokemonId");

const StarButton = () => {
  const { pokemonId } = route.useParams();
  const { starredPokemonIds, toggleStarredPokemonIds } = useStarredPokemon();
  const isStarred = starredPokemonIds.includes(Number(pokemonId));

  return (
    <Button
      onClick={() => toggleStarredPokemonIds(Number(pokemonId))}
      variant="gold"
      className="pointer-events-auto ml-auto flex items-center gap-2 px-4"
    >
      {isStarred ? (
        <StarIconSolid className="size-4" />
      ) : (
        <StarIconOutline className="size-4" />
      )}
      {`Star${isStarred ? "red" : ""}`}
    </Button>
  );
};
export default StarButton;
