import { StarIcon as StarIconSolid } from "@heroicons/react/24/solid";
import { StarIcon as StarIconOutline } from "@heroicons/react/24/outline";

import { Route } from "@/routes/pokemon.$pokemonId.tsx";
import { useStarredPokemon } from "@/features/pokemon/hooks/useStarredPokemon.ts";

import Button from "@/components/button/Button.tsx";

const StarButton = () => {
  const { pokemonId } = Route.useLoaderData();
  const { starredPokemonIds, toggleStarredPokemonIds } = useStarredPokemon();

  return (
    <Button
      onClick={() => toggleStarredPokemonIds(Number(pokemonId))}
      style="gold"
      className="pointer-events-auto ml-auto flex items-center gap-2 px-4"
    >
      {starredPokemonIds.includes(Number(pokemonId)) ? (
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
