import { MoveElement } from "pokedex-promise-v2";

import { usePokemonDetailsParam } from "@/hooks/useUrlParam.ts";
import filterLearnsetData from "@/features/pokemon/utils/filterLearnsetData.ts";
import { versionGroups } from "@/data/versionGroups.ts";

import Loader from "@/components/Loader.tsx";
import Button from "@/components/button/Button.tsx";
import PokemonMovesTable from "@/features/pokemon/components/pokemonDetails/learnset/PokemonMovesTable.tsx";

interface MovesProps {
  moves: MoveElement[] | undefined;
}

const PokemonMoves = ({ moves }: MovesProps) => {
  const [versionGroup, setVersionGroup] =
    usePokemonDetailsParam("versionGroup");
  // Indexing from 1 instead of 0 since this value can be seen by the user
  const currentVersionIndex = (versionGroup ?? 1) - 1;

  if (!moves)
    return (
      <div className="h-60">
        <Loader size={24} displaysText={true} />
      </div>
    );

  if (!moves?.length)
    return (
      <p className="p-2 sm:p-4">
        There seems to be no learnset data regarding this Pokémon&apos;s Form.
        Please try another Form.
      </p>
    );

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
        <div className="flex flex-nowrap gap-2 overflow-x-scroll px-2 py-4 sm:px-4">
          {/* Buttons to select the game from which to display the data */}
          {availableVersionGroups.map(([group, { label }], index) => (
            <Button
              key={group}
              onClick={() => setVersionGroup(index + 1)}
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
};
export default PokemonMoves;
