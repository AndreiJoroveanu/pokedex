import { memo } from "react";

import { usePokemonMove } from "@/hooks/pokemon/usePokemonMove.ts";

interface RowProps {
  name: string;
  level: number;
  displayLevel: boolean;
}

const PokemonMoveTableRow = memo(({ name, level, displayLevel }: RowProps) => {
  const { data: moveData } = usePokemonMove(name);

  return (
    <tr key={name}>
      {/* Level at which the move is learned, if it is in the Level-Up Moves table */}
      {displayLevel && <td className="min-w-14">{level || "Evo."}</td>}

      {/* Move name */}
      <td className="min-w-36 capitalize">{name.split("-").join(" ")}</td>

      {/* Move type */}
      <td className="min-w-18 capitalize">
        {moveData?.type.name ?? "Loading"}
      </td>

      {/* Move category (physical, special, status) */}
      <td className="min-w-22 capitalize">
        {moveData?.damage_class.name ?? "-"}
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
