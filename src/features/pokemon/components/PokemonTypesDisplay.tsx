import type { PokemonType } from "pokedex-promise-v2";

import TypeDisplay from "@/components/TypeDisplay.tsx";

interface TypesProps {
  types: PokemonType[] | undefined;
  className?: string;
}

const PokemonTypesDisplay = ({ types, className = "" }: TypesProps) =>
  types?.length ? (
    <div className={`flex ${className}`.trim()}>
      {types.map(({ type }) => (
        <TypeDisplay key={type.name} type={type.name} />
      ))}
    </div>
  ) : (
    <div
      className={`h-6 max-w-54 min-w-50 animate-pulse rounded-full bg-base-500/50 ${className}`.trim()}
    />
  );
export default PokemonTypesDisplay;
