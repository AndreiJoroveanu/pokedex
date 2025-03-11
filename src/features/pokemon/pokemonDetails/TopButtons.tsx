import { memo } from "react";
import { useParams } from "react-router";
import { StarIcon as StarIconSolid } from "@heroicons/react/24/solid";
import { StarIcon as StarIconOutline } from "@heroicons/react/24/outline";

import { useStarredPokemon } from "@/hooks/useStarredPokemon.ts";

import BackButton from "@/ui/BackButton.tsx";
import Button from "@/ui/Button.tsx";

const TopButtons = memo(() => {
  const { id } = useParams() as { id: string };
  const { starredPokemonIds, toggleStarredPokemonIds } = useStarredPokemon();

  return (
    <>
      <BackButton />

      {/* Star (Favorite) button */}
      <Button
        onClick={() => toggleStarredPokemonIds(Number(id))}
        style="gold"
        className="fixed top-22 right-2 z-20 flex items-center gap-2 px-4 sm:top-28 sm:right-4"
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
    </>
  );
});
TopButtons.displayName = "TopButtons";
export default TopButtons;
