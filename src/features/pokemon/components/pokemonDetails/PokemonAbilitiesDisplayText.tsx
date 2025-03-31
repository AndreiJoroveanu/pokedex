import { Fragment, memo } from "react";
import { PokemonAbility } from "pokedex-promise-v2";
import { capitalize } from "@/utils/capitalize.ts";

interface AbilitiesProps {
  abilities: PokemonAbility[] | undefined;
}

const PokemonAbilitiesDisplayText = memo(({ abilities }: AbilitiesProps) => (
  <p className="my-2">
    {abilities?.length ? (
      <>
        {/* Conditionally change the label depending on if there are multiple abilities */}
        <span className="font-bold text-slate-700 transition-[color] dark:text-slate-300">
          {abilities.length === 1 ? "Ability: " : "Abilities: "}
        </span>

        {abilities.map(({ ability, is_hidden }, index) => (
          <Fragment key={ability.name}>
            {is_hidden ? (
              // If this is a Hidden Ability, apply some styling
              <span className="text-purple-700 transition-[color] dark:text-purple-300">
                {capitalize(ability.name)}
              </span>
            ) : (
              capitalize(ability.name)
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
));
PokemonAbilitiesDisplayText.displayName = "PokemonAbilitiesDisplayText";
export default PokemonAbilitiesDisplayText;
