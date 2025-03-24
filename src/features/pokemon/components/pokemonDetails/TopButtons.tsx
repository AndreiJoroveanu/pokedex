import { memo } from "react";
import { useParams } from "react-router";
import { StarIcon as StarIconSolid } from "@heroicons/react/24/solid";
import { StarIcon as StarIconOutline } from "@heroicons/react/24/outline";

import { useStarredPokemon } from "@/features/pokemon/hooks/useStarredPokemon.ts";

import BackButton from "@/components/button/BackButton.tsx";
import Button from "@/components/button/Button.tsx";

const TopButtons = memo(() => {
  const { id } = useParams() as { id: string };
  const { starredPokemonIds, toggleStarredPokemonIds } = useStarredPokemon();

  return (
    <div className="pointer-events-none sticky top-4 z-20 flex w-full justify-between px-2 sm:fixed sm:top-28 sm:px-4">
      <BackButton />

      {/* Star (Favorite) button */}
      <Button
        onClick={() => toggleStarredPokemonIds(Number(id))}
        style="gold"
        className="pointer-events-auto flex items-center gap-2 px-4"
      >
        {starredPokemonIds.includes(Number(id)) ? (
          <>
            <StarIconSolid className="size-4" /> Starred
          </>
        ) : (
          <>
            <StarIconOutline className="size-4" /> Star
          </>
        )}
      </Button>
    </div>
  );
});
TopButtons.displayName = "TopButtons";
export default TopButtons;
