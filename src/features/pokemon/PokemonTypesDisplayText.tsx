import { PokemonType } from "pokedex-promise-v2";

interface TypesProps {
  types: PokemonType[] | undefined;
  className?: string;
}

const PokemonTypesDisplayText = ({ types, className }: TypesProps) => (
  <p className={`capitalize ${className ?? ""}`.trim()}>
    {types ? (
      <>
        {types.length === 1 ? "Type: " : "Types: "}
        {types.map((type) => type.type.name).join(", ")}
      </>
    ) : (
      "Loading..."
    )}
  </p>
);
export default PokemonTypesDisplayText;
