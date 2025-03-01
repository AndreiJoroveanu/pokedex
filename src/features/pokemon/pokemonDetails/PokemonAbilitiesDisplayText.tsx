import { Fragment, memo } from "react";
import { PokemonAbility } from "pokedex-promise-v2";

interface AbilitiesProps {
  abilities: PokemonAbility[] | undefined;
  className?: string;
}

const removeDash = (string: string) => string.split("-").join(" ");

const PokemonAbilitiesDisplayText = memo(
  ({ abilities, className }: AbilitiesProps) => (
    <p className={`capitalize ${className ?? ""}`.trim()}>
      {abilities?.length ? (
        <>
          {/* Conditionally change the label depending on if there are multiple abilities */}
          {abilities.length === 1 ? "Ability: " : "Abilities: "}
          {abilities.map(({ ability, is_hidden }, index) => (
            <Fragment key={ability.name}>
              {is_hidden ? (
                // If this is a Hidden Ability, apply some styling
                <span className="text-purple-700 transition-colors dark:text-purple-300">
                  {removeDash(ability.name)}
                </span>
              ) : (
                removeDash(ability.name)
              )}

              {/* Conditionally add a comma if the ability isn't the last one to be displayed */}
              {index < abilities.length - 1 ? ", " : "."}
            </Fragment>
          ))}
        </>
      ) : (
        "Loading..."
      )}
    </p>
  ),
);
PokemonAbilitiesDisplayText.displayName = "PokemonAbilitiesDisplayText";
export default PokemonAbilitiesDisplayText;
