import { Link } from "@tanstack/react-router";
import { ChevronRightIcon } from "@heroicons/react/24/outline";

import { useMove } from "@/hooks/usePokeApi.ts";
import type { ItemResource } from "@/types/types.ts";

import TypeDisplay from "@/components/TypeDisplay.tsx";
import MoveCategoryDisplay from "@/components/MoveCategoryDisplay.tsx";

interface RowProps {
  move: ItemResource & { level: number };
  displayLevel: boolean;
}

const PokemonMoveTableRow = ({ move, displayLevel }: RowProps) => {
  const { data: moveData } = useMove(move.id);

  return (
    <tr className="group relative h-8 transition-[background-color] even:bg-base-500/15 hover:bg-blue-500/20 has-focus:bg-blue-500/20 pointer-coarse:h-12">
      {/* Invisible Link (has to be the first for the peer class to work) */}
      <td aria-hidden="true" className="peer">
        <Link
          to="/moves/$moveId"
          params={{ moveId: String(move.id) }}
          draggable="false"
          className="absolute inset-0"
        />
      </td>

      {/* Level at which the move is learned, if it is in the Level-Up Moves table */}
      {displayLevel && <td className="min-w-14">{move.level || "Evo."}</td>}

      {/* Move name */}
      <td className="min-w-36 font-semibold capitalize transition-[color] group-hover:text-blue-600 peer-focus-within:text-blue-600 dark:group-hover:text-blue-400 dark:peer-focus-within:text-blue-400">
        {move.name.split("-").join(" ")}
      </td>

      {/* Move type */}
      <td className="pointer-events-none w-26 min-w-26">
        {moveData ? (
          <TypeDisplay type={moveData.type.name} className="rounded-r-none" />
        ) : (
          <div className="h-6 w-26 animate-pulse rounded-l-full bg-base-500/50" />
        )}
      </td>

      {/* Move category (physical, special, status) */}
      <td className="pointer-events-none w-28 min-w-28">
        {moveData ? (
          <MoveCategoryDisplay
            category={moveData.damage_class.name}
            className="rounded-l-none"
          />
        ) : (
          <div className="h-6 w-26 animate-pulse rounded-r-full bg-base-500/50" />
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
      <td className="pointer-events-none scale-75 rounded-lg transition-[background-color_color] group-hover:bg-blue-500/25 group-hover:text-blue-600 peer-focus-within:bg-blue-500/25 peer-focus-within:text-blue-600 dark:group-hover:text-blue-400 dark:peer-focus-within:text-blue-400">
        <ChevronRightIcon className="size-8 pointer-coarse:size-12 pointer-coarse:scale-75" />
      </td>
    </tr>
  );
};
export default PokemonMoveTableRow;
