import { memo, useState } from "react";
import { MoveElement } from "pokedex-promise-v2";

import { versionGroups } from "../../../data/versionGroups.ts";

import Button from "../../../ui/Button.tsx";

interface MovesProps {
  moves: MoveElement[] | undefined;
}

const PokemonMovesList = memo(({ moves }: MovesProps) => {
  const [currentVersionGroup, setCurrentVersionGroup] = useState(0);

  if (!moves) return <p>Loading...</p>;

  // All version groups that this Pokémon is in
  const availableVersionGroups = versionGroups.filter((group) =>
    // Create a set with all the version groups that are available
    new Set(
      moves.flatMap((move) =>
        move.version_group_details
          // Get only the moves where there are moves learned by level-up
          .filter((vg) => vg.move_learn_method.name === "level-up")
          .map((vg) => vg.version_group.name),
      ),
      // And filter a hardcoded array with it to have a consistent order of version groups
    ).has(group),
  );

  // All moves learned by level-up from the selected version group
  const displayMoves = moves
    .map((move) => {
      const moveDetails = move.version_group_details.find(
        (vg) =>
          vg.move_learn_method.name === "level-up" &&
          vg.version_group.name === availableVersionGroups[currentVersionGroup],
      );

      return moveDetails
        ? { name: move.move.name, level: moveDetails.level_learned_at }
        : null;
    })
    // Remove moves that don’t match the conditions
    .filter((move) => move !== null)
    // Sort by level
    .sort((a, b) => a.level - b.level);

  return (
    <>
      <div className="-mx-2 flex flex-nowrap gap-2 overflow-x-scroll px-2 pb-4 sm:-mx-4 sm:px-4">
        {/* Buttons of all available version groups (games) */}
        {availableVersionGroups.map((versionGroup, index) => (
          <Button
            key={versionGroup}
            onClick={() => setCurrentVersionGroup(index)}
            disabled={currentVersionGroup === index}
            style={currentVersionGroup === index ? "indigo" : "normal"}
            className="px-4 text-nowrap capitalize disabled:cursor-default"
          >
            {versionGroup.split("-").join(" ")}
          </Button>
        ))}
      </div>

      {/* Table displaying the moveset from the selected version group */}
      <table>
        <thead className="border-b border-slate-500">
          <tr>
            <th className="pr-4 pb-1 text-start">Level</th>
            <th className="pr-4 pb-1 text-start">Move</th>
          </tr>
        </thead>

        <tbody>
          {displayMoves.map((move) => (
            <tr key={move?.name}>
              <td className="pr-4">{move?.level || "Evo."}</td>

              <td className="pr-4 capitalize">
                {move?.name.split("-").join(" ")}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
});
PokemonMovesList.displayName = "PokemonMovesList";
export default PokemonMovesList;
