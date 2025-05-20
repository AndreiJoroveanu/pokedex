import type { ItemResource } from "@/types/types.ts";

import PokemonMoveTableRow from "@/features/pokemon/components/pokemonDetails/learnset/PokemonMoveTableRow.tsx";

interface MovesProps {
  moves: (ItemResource & { level: number })[];
  label: string;
}

const PokemonMovesTable = ({ moves, label }: MovesProps) => (
  <>
    <h3 className="mt-2 mb-1 pl-3 text-2xl font-bold capitalize sm:pl-5">
      {label}
    </h3>

    <div className="overflow-x-scroll px-2 pb-3 sm:px-4">
      {/* Table displaying the learnset from the selected version group */}
      <table className="min-w-full text-nowrap">
        <thead className="border-b border-slate-500">
          <tr>
            {/* Empty th because the first element is an invisible Link */}
            <th className="w-2 min-w-2" />
            {label === "Level-Up Moves" && (
              <th className="min-w-14 pb-1 text-start">Level</th>
            )}
            <th className="min-w-36 pb-1 text-start">Move</th>

            <th className="w-26 min-w-26 pb-1 text-start">Type</th>
            <th className="w-28 min-w-28 pb-1 text-start">Category</th>
            <th className="min-w-16 pb-1 text-start">Power</th>
            <th className="min-w-22 pb-1 text-start">Accuracy</th>
            <th className="min-w-6 pb-1 text-start">PP</th>
            {/* Empty th for the arrow at the end */}
            <th className="w-6" />
          </tr>
        </thead>

        <tbody>
          {moves.map((move) => (
            <PokemonMoveTableRow
              key={`${move.level}-${move.name}`}
              move={move}
              displayLevel={label === "Level-Up Moves"}
            />
          ))}
        </tbody>
      </table>
    </div>
  </>
);
export default PokemonMovesTable;
