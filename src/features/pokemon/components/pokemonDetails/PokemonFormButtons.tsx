import type { Variety } from "pokedex-promise-v2";

import Button from "@/components/button/Button.tsx";

interface FormButtonProps {
  pokemonSpecies: Variety[] | undefined;
  currentForm: number;
  handleClick: (index: number) => void;
  placeholderName: string | undefined;
}

const PokemonFormButtons = ({
  pokemonSpecies,
  currentForm,
  handleClick,
  placeholderName,
}: FormButtonProps) => (
  <>
    <h2 className="ml-2 text-lg font-semibold sm:ml-4">Current Form:</h2>

    {pokemonSpecies ? (
      <div className="-mx-2 flex flex-nowrap gap-2 overflow-x-scroll p-2 pt-1 sm:-mx-4 sm:px-4 md:-mx-2 md:mask-x-from-99% md:mask-x-to-100% md:px-2">
        {pokemonSpecies.map((form, index) => (
          <Button
            key={form.pokemon.name}
            onClick={() => handleClick(index)}
            disabled={currentForm === index}
            variant={currentForm === index ? "indigo" : "normal"}
            className="px-4 text-nowrap capitalize disabled:cursor-default"
          >
            {form.pokemon.name.split("-").join(" ")}
          </Button>
        ))}
      </div>
    ) : placeholderName ? (
      <div className="mt-1 mb-2 flex items-center gap-2">
        <Button
          disabled={true}
          variant="indigo"
          className="cursor-default px-4 text-nowrap capitalize"
        >
          {placeholderName.split("-").join(" ")}
        </Button>

        <div className="h-10 w-full animate-pulse rounded-xl bg-base-500/50" />
      </div>
    ) : (
      <div className="mt-1 mb-2 h-10 w-full animate-pulse rounded-xl bg-base-500/50" />
    )}
  </>
);
export default PokemonFormButtons;
