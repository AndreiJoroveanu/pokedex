import { memo } from "react";
import { PokemonType } from "pokedex-promise-v2";

interface TypesProps {
  types: PokemonType[] | undefined;
  className?: string;
}

const PokemonTypesDisplayText = memo(({ types, className }: TypesProps) => (
  <p className={`capitalize ${className ?? ""}`.trim()}>
    {types?.length ? (
      <>
        {types.length === 1 ? "Type: " : "Types: "}
        {types.map((type) => type.type.name).join(", ")}
      </>
    ) : (
      "Loading..."
    )}
  </p>
));
PokemonTypesDisplayText.displayName = "PokemonTypesDisplayText";
export default PokemonTypesDisplayText;
