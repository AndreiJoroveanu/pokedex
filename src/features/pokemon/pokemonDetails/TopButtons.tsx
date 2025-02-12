import { useParams } from "react-router";
import {
  ArrowUturnLeftIcon,
  StarIcon as StarIconOutline,
} from "@heroicons/react/24/outline";
import { StarIcon as StarIconSolid } from "@heroicons/react/24/solid";

import { useMoveBack } from "../../../hooks/useMoveBack.ts";
import { useStarredPokemon } from "../../../hooks/useStarredPokemon.ts";

import Button from "../../../ui/Button.tsx";

const TopButtons = () => {
  const moveBack = useMoveBack();

  const { name } = useParams() as { name: string };
  const { starredPokemon, toggleStarredPokemon } = useStarredPokemon();

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

      <Button
        onClick={() => toggleStarredPokemon(name)}
        style="gold"
        className="fixed top-22 right-2 z-20 flex items-center gap-2 px-4 sm:top-28 sm:right-4"
      >
        {starredPokemon.includes(name) ? (
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
};
export default TopButtons;
