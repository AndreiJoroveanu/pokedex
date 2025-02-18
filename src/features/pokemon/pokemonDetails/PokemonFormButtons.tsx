import { memo } from "react";
import { Variety } from "pokedex-promise-v2";

import Button from "@/ui/Button.tsx";

interface FormButtonProps {
  pokemonSpecies: Variety[];
  currentForm: number;
  handleClick: (index: number) => void;
}

const PokemonFormButtons = memo(
  ({ pokemonSpecies, currentForm, handleClick }: FormButtonProps) => (
    <>
      {pokemonSpecies.map((form, index) => (
        <Button
          key={form.pokemon.name}
          onClick={() => handleClick(index)}
          disabled={currentForm === index}
          style={currentForm === index ? "indigo" : "normal"}
          className="z-10 px-4 text-nowrap capitalize disabled:cursor-default"
        >
          {form.pokemon.name.split("-").join(" ")}
        </Button>
      ))}
    </>
  ),
);
PokemonFormButtons.displayName = "PokemonFormButtons";
export default PokemonFormButtons;
