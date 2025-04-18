import { Variety } from "pokedex-promise-v2";

import Button from "@/components/button/Button.tsx";

interface FormButtonProps {
  pokemonSpecies: Variety[] | undefined;
  currentForm: number;
  handleClick: (index: number) => void;
}

const PokemonFormButtons = ({
  pokemonSpecies,
  currentForm,
  handleClick,
}: FormButtonProps) => (
  <>
    <h2 className="text-lg font-semibold">Current Form:</h2>

    {pokemonSpecies ? (
      <div
        style={{
          maskImage:
            // Adds a fade out effect to the horizontal edges of the button list
            "linear-gradient(to right, transparent, black 1%, black 99%, transparent)",
        }}
        className="-mx-2 flex flex-nowrap gap-2 overflow-x-scroll p-2 pt-1"
      >
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
      </div>
    ) : (
      <div className="mt-1 mb-2 h-10 w-full animate-pulse rounded-xl bg-slate-500/50" />
    )}
  </>
);
export default PokemonFormButtons;
