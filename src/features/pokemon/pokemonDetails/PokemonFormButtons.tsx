import { Variety } from "pokedex-promise-v2";

import Button from "../../../ui/Button.tsx";

interface FormButtonProps {
  pokemonSpecies: Variety[];
  currentForm: number;
  onClick: (index: number) => void;
}

const PokemonFormButtons = ({
  pokemonSpecies,
  currentForm,
  onClick,
}: FormButtonProps) => (
  <>
    {pokemonSpecies.map((form, index) => (
      <Button
        key={form.pokemon.name}
        onClick={() => onClick(index)}
        disabled={currentForm === index}
        style={currentForm === index ? "indigo" : "normal"}
        className="z-10 px-4 text-nowrap capitalize disabled:cursor-default"
      >
        {form.pokemon.name.split("-").join(" ")}
      </Button>
    ))}
  </>
);
export default PokemonFormButtons;
