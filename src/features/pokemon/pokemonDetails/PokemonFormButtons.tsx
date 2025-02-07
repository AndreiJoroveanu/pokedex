import { Variety } from "pokedex-promise-v2";

import Button from "../../../ui/Button.tsx";

interface FormButtonProps {
  pokemonSpecies: Variety[];
  currentForm: number;
  setCurrentForm: (value: number) => void;
}

const PokemonFormButtons = ({
  pokemonSpecies,
  currentForm,
  setCurrentForm,
}: FormButtonProps) => (
  <>
    {pokemonSpecies.map((form, index) => (
      <Button
        key={form.pokemon.name}
        onClick={() => setCurrentForm(index)}
        disabled={currentForm === index}
        style={currentForm === index ? "indigo" : "normal"}
        className="z-10 border-2 px-4 capitalize disabled:cursor-not-allowed disabled:border-transparent disabled:bg-origin-border"
      >
        {form.pokemon.name.split("-").join(" ")}
      </Button>
    ))}
  </>
);
export default PokemonFormButtons;
