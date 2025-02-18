import { memo } from "react";
import { useParams } from "react-router";
import {
  ArrowUturnLeftIcon,
  StarIcon as StarIconOutline,
} from "@heroicons/react/24/outline";
import { StarIcon as StarIconSolid } from "@heroicons/react/24/solid";

import { useMoveBack } from "@/hooks/useMoveBack.ts";
import { useStarredPokemon } from "@/hooks/useStarredPokemon.ts";

import Button from "@/ui/Button.tsx";

const TopButtons = memo(() => {
  const moveBack = useMoveBack();

  const { id } = useParams() as { id: string };
  const { starredPokemonIds, toggleStarredPokemonIds } = useStarredPokemon();

  return (
    <>
      {/* Back button */}
      <Button
        onClick={moveBack}
        style="indigo"
        className="fixed top-22 left-2 z-20 flex items-center gap-2 px-4 sm:top-28 sm:left-4"
      >
        <ArrowUturnLeftIcon className="size-4" /> Back
      </Button>

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
