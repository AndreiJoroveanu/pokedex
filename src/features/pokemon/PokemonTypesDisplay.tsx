import { memo } from "react";
import { PokemonType } from "pokedex-promise-v2";

import TypeDisplay from "@/ui/TypeDisplay.tsx";

interface TypesProps {
  types: PokemonType[] | undefined;
  className?: string;
}

const PokemonTypesDisplay = memo(({ types, className = "" }: TypesProps) =>
  types?.length ? (
    <div className={`flex gap-2 ${className}`.trim()}>
      {types.map(({ type }) => (
        <TypeDisplay key={type.name} type={type.name} />
      ))}
    </div>
  ) : (
    <p>Loading...</p>
  ),
);
PokemonTypesDisplay.displayName = "PokemonTypesDisplay";
export default PokemonTypesDisplay;
