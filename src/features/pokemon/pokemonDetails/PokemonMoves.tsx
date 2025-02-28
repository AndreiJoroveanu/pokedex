import { memo, useState } from "react";
import { MoveElement } from "pokedex-promise-v2";

import filterLearnsetData from "@/utils/filterLearnsetData.ts";
import { versionGroups } from "@/data/versionGroups.ts";

import Button from "@/ui/Button.tsx";
import PokemonMovesTable from "./PokemonMovesTable.tsx";

interface MovesProps {
  moves: MoveElement[] | undefined;
}

const PokemonMoves = memo(({ moves }: MovesProps) => {
  const [currentVersionIndex, setCurrentVersionIndex] = useState(0);

  if (!moves) return <p>Loading...</p>;

  // All version groups that this Pokémon is in
  const availableVersionGroups = Object.entries(versionGroups).filter(
    ([group]) =>
      moves.some((move) =>
        move.version_group_details.some(
          (vg) => vg.version_group.name === group,
        ),
      ),
  );

  const [selectedVersionGroup] = availableVersionGroups[currentVersionIndex];
  const learnset = filterLearnsetData(moves, selectedVersionGroup);

  return (
    <>
      {availableVersionGroups.length > 1 && (
        <div className="-mx-2 flex flex-nowrap gap-2 overflow-x-scroll px-2 pb-4 sm:-mx-4 sm:px-4">
          {/* Buttons to select the game from which to display the data */}
          {availableVersionGroups.map(([group, { label }], index) => (
            <Button
              key={group}
              onClick={() => setCurrentVersionIndex(index)}
              disabled={currentVersionIndex === index}
              style={currentVersionIndex === index ? "indigo" : "normal"}
              className="px-4 text-nowrap capitalize disabled:cursor-default"
            >
              {label}
            </Button>
          ))}
        </div>
      )}

      {/* Render move categories if they have moves */}
      {Object.values(learnset)
        .filter((categoryMoves) => categoryMoves.moves.length)
        .map((categoryMoves) => (
          <PokemonMovesTable
            key={categoryMoves.label}
            moves={categoryMoves.moves}
            label={categoryMoves.label}
          />
        ))}
    </>
  );
});
PokemonMoves.displayName = "PokemonMoves";
export default PokemonMoves;
