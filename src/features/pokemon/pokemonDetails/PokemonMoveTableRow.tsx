import { memo } from "react";

import { usePokemonMove } from "@/hooks/pokemon/usePokemonMove.ts";
import TypeDisplay from "@/ui/TypeDisplay.tsx";
import MoveCategoryDisplay from "@/ui/MoveCategoryDisplay.tsx";

interface RowProps {
  name: string;
  level: number;
  displayLevel: boolean;
}

const PokemonMoveTableRow = memo(({ name, level, displayLevel }: RowProps) => {
  const { data: moveData } = usePokemonMove(name);

  return (
    <tr key={name} className="h-8 even:bg-slate-400/15">
      {/* Level at which the move is learned, if it is in the Level-Up Moves table */}
      {displayLevel && <td className="min-w-14">{level || "Evo."}</td>}

      {/* Move name */}
      <td className="min-w-36 font-semibold capitalize">
        {name.split("-").join(" ")}
      </td>

      {/* Move type */}
      <td className="w-26 min-w-26 capitalize">
        {moveData ? (
          <TypeDisplay type={moveData.type.name} className="rounded-r-none" />
        ) : (
          "Loading..."
        )}
      </td>

      {/* Move category (physical, special, status) */}
      <td className="w-28 min-w-28 capitalize">
        {moveData && (
          <MoveCategoryDisplay
            category={moveData.damage_class.name}
            className="rounded-l-none"
          />
        )}
      </td>

      {/* Move power, if applicable */}
      <td className="min-w-16 capitalize">{moveData?.power ?? "-"}</td>

      {/* Move accuracy, if applicable */}
      <td className="min-w-22 capitalize">
        {moveData?.accuracy ? `${moveData?.accuracy}%` : "-"}
      </td>

      {/* Move PP (Power Points) */}
      <td className="min-w-6 capitalize">{moveData?.pp ?? "-"}</td>
    </tr>
  );
});
PokemonMoveTableRow.displayName = "PokemonMoveTableRow";
export default PokemonMoveTableRow;
