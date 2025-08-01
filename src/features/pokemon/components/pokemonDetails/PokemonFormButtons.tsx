import type { Variety } from "pokedex-promise-v2";

import Button from "@/components/button/Button.tsx";

interface FormButtonProps {
  pokemonSpecies: Variety[] | undefined;
  placeholderName: string | undefined;
  currentForm: number;
  handleClick: (index: number) => void;
}

const PokemonFormButtons = ({
  pokemonSpecies,
  placeholderName,
  currentForm,
  handleClick,
}: FormButtonProps) => (
  <>
    <h2 className="ml-2 text-lg font-semibold sm:ml-4">Current Form:</h2>

    <div className="-mx-2 flex flex-nowrap gap-2 overflow-x-scroll p-2 pt-1 sm:-mx-4 sm:px-4 md:-mx-2 md:mask-x-from-99% md:mask-x-to-100% md:px-2">
      {pokemonSpecies?.map((form, index) => (
        <Button
          key={form.pokemon.name}
          onClick={() => handleClick(index)}
          disabled={currentForm === index}
          variant={currentForm === index ? "indigo" : "normal"}
          className="px-4 text-nowrap capitalize disabled:cursor-default"
        >
          {form.pokemon.name.split("-").join(" ")}
        </Button>
      )) ?? (
        <>
          {placeholderName && (
            <Button
              disabled={true}
              variant="indigo"
              className="cursor-default px-4 text-nowrap capitalize"
            >
              {placeholderName.split("-").join(" ")}
            </Button>
          )}

          <div className="h-10 flex-grow animate-pulse rounded-xl bg-base-500/50" />
        </>
      )}
    </div>
  </>
);
export default PokemonFormButtons;
