import { memo } from "react";

import { usePokemonMove } from "../../../hooks/pokemon/usePokemonMove.ts";

interface RowProps {
  name: string;
  level: number;
  isLevel: boolean;
}

const PokemonMoveTableRow = memo(({ name, level, isLevel }: RowProps) => {
  const { data: moveData } = usePokemonMove(name);

  return (
    <tr key={name}>
      {isLevel && <td className="min-w-14">{level || "Evo."}</td>}
      <td className="min-w-36 capitalize">{name.split("-").join(" ")}</td>

      <td className="min-w-18 capitalize">
        {moveData?.type.name ?? "Loading"}
      </td>
      <td className="min-w-22 capitalize">
        {moveData?.damage_class.name ?? "-"}
      </td>
      <td className="min-w-16 capitalize">{moveData?.power ?? "-"}</td>
      <td className="min-w-22 capitalize">{moveData?.accuracy ?? "-"}</td>
      <td className="min-w-6 capitalize">{moveData?.pp ?? "-"}</td>
    </tr>
  );
});
PokemonMoveTableRow.displayName = "PokemonMoveTableRow";
export default PokemonMoveTableRow;
