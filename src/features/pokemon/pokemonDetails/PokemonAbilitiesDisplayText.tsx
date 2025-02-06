import { PokemonAbility } from "pokedex-promise-v2";

interface AbilitiesProps {
  abilities: PokemonAbility[] | undefined;
  className?: string;
}

const PokemonAbilitiesDisplayText = ({
  abilities,
  className,
}: AbilitiesProps) => (
  <p className={`capitalize ${className ?? ""}`.trim()}>
    {abilities ? (
      <>
        {abilities.length === 1 ? "Ability: " : "Abilities: "}
        {abilities
          .map((ability) => ability.ability.name.split("-").join(" "))
          .join(", ")}
      </>
    ) : (
      "Loading..."
    )}
  </p>
);
export default PokemonAbilitiesDisplayText;
