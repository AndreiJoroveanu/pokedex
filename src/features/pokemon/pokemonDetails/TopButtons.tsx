import { useParams } from "react-router";
import { ArrowUturnLeftIcon, StarIcon } from "@heroicons/react/24/outline";

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
        className="fixed top-22 left-4 z-50 flex items-center gap-2 px-4 sm:top-28"
      >
        <ArrowUturnLeftIcon className="size-4" />
        Back
      </Button>

      <Button
        onClick={() => toggleStarredPokemon(name)}
        style="gold"
        className="fixed top-22 right-4 z-50 flex items-center gap-2 px-4 sm:top-28"
      >
        <StarIcon className="size-4" />
        {starredPokemon.includes(name) ? "Starred" : "Star"}
      </Button>
    </>
  );
};
export default TopButtons;
