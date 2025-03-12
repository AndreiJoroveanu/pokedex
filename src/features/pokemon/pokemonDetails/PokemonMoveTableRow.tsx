import { memo } from "react";
import { Link } from "react-router";
import { ChevronRightIcon } from "@heroicons/react/24/outline";

import { useMove } from "@/hooks/usePokeApi.ts";

import TypeDisplay from "@/ui/TypeDisplay.tsx";
import MoveCategoryDisplay from "@/ui/MoveCategoryDisplay.tsx";

interface RowProps {
  move: { id: number; name: string; level: number };
  displayLevel: boolean;
}

const PokemonMoveTableRow = memo(
  ({ move: { id, name, level }, displayLevel }: RowProps) => {
    const { data: moveData } = useMove(id);

    return (
      <tr className="group pointer-coarse:h-12 relative h-8 even:bg-slate-400/15 hover:bg-blue-400/20 has-focus:bg-blue-400/20">
        {/* Invisible Link (has to be the first for the peer class to work) */}
        <td aria-hidden="true" className="peer">
          <Link
            to={`/pokedex/moves/${id}`}
            state={{ initialMove: moveData }}
            draggable="false"
            className="absolute inset-0"
          />
        </td>

        {/* Level at which the move is learned, if it is in the Level-Up Moves table */}
        {displayLevel && <td className="min-w-14">{level || "Evo."}</td>}

        {/* Move name */}
        <td className="min-w-36 font-semibold capitalize group-hover:text-blue-600 peer-focus-within:text-blue-600 dark:group-hover:text-blue-400 dark:peer-focus-within:text-blue-400">
          {name.split("-").join(" ")}
        </td>

        {/* Move type */}
        <td className="pointer-events-none w-26 min-w-26">
          {moveData ? (
            <TypeDisplay type={moveData.type.name} className="rounded-r-none" />
          ) : (
            "Loading..."
          )}
        </td>

        {/* Move category (physical, special, status) */}
        <td className="pointer-events-none w-28 min-w-28">
          {moveData && (
            <MoveCategoryDisplay
              category={moveData.damage_class.name}
              className="rounded-l-none"
            />
          )}
        </td>

        {/* Move power, if applicable */}
        <td className="min-w-16">{moveData?.power ?? "-"}</td>

        {/* Move accuracy, if applicable */}
        <td className="min-w-22">
          {moveData?.accuracy ? `${moveData?.accuracy}%` : "-"}
        </td>

        {/* Move PP (Power Points) */}
        <td className="min-w-6">{moveData?.pp ?? "-"}</td>

        {/* Arrow indicating that the row is clickable */}
        <td className="pointer-events-none scale-75 rounded-lg group-hover:bg-blue-500/25 group-hover:text-blue-500 peer-focus-within:bg-blue-500/25 peer-focus-within:text-blue-500">
          <ChevronRightIcon className="pointer-coarse:size-12 pointer-coarse:scale-75 size-8" />
        </td>
      </tr>
    );
  },
);
PokemonMoveTableRow.displayName = "PokemonMoveTableRow";
export default PokemonMoveTableRow;
