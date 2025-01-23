import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router";
import { HiMiniArrowUturnLeft } from "react-icons/hi2";
import { Pokemon } from "pokedex-promise-v2";

import { usePokemonSpecies } from "../hooks/pokemon/useSpecificPokemon.ts";
import { useMoveBack } from "../hooks/useMoveBack.ts";
import { capitalize } from "../utils/helpers.ts";

import Button from "../ui/Button.tsx";
import {
  PokemonInfo,
  PokemonInfoFromLink,
} from "../features/pokemon/PokemonInfo.tsx";
import PokemonSpeciesInfo from "../features/pokemon/PokemonSpeciesInfo.tsx";

const PokemonDetails = () => {
  const [currentForm, setCurrentForm] = useState<number>(0);

  // Pokémon passed as a state through React
  // Router to avoid fetching it again
  // TS: state property from useLocation() hook doesn't have a specific type
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const { pokemon }: { pokemon: Pokemon } = useLocation().state;

  // URL Parameter
  const { name } = useParams() as { name: string };

  const { data: pokemonSpecies } = usePokemonSpecies(name);
  const moveBack = useMoveBack();

  // Updates page title when changing page
  useEffect(() => {
    document.title = `Pokédex - ${capitalize(name)}`;
    return () => void (document.title = "Pokédex");
  }, [name]);

  return (
    <>
      {/* Back button */}
      <Button
        onClick={moveBack}
        isSelected={true}
        className="fixed z-10 mt-24 ml-4 flex items-center gap-2 px-4 md:mt-28"
      >
        <HiMiniArrowUturnLeft />
        Back
      </Button>

      <div className="pt-0 md:pt-36 lg:pt-24">
        <div className="mx-auto my-4 max-w-3xl bg-slate-100 p-4 pt-40 transition-colors md:rounded-lg md:border-2 md:border-slate-400/40 md:pt-4 dark:bg-slate-800">
          {/* List of Pokémon form buttons (if there is more than one) */}
          <div className="flex flex-wrap gap-2">
            {pokemonSpecies &&
              pokemonSpecies.varieties.length > 1 &&
              pokemonSpecies.varieties.map((form, index) => (
                <Button
                  key={form.pokemon.name}
                  onClick={() => setCurrentForm(index)}
                  disabled={currentForm === index}
                  isSelected={currentForm === index}
                  className="capitalize enabled:px-4 disabled:px-[17.5px]"
                >
                  {form.pokemon.name.split("-").join(" ")}
                </Button>
              ))}
          </div>

          {pokemon && !currentForm ? (
            // If the user clicked a link from the app, use the data passed from passed state
            <PokemonInfo pokemon={pokemon} />
          ) : (
            // If the user inputted the link manually, or they changed
            // the Pokémon form, fetch the data of the specific form
            <PokemonInfoFromLink
              name={pokemonSpecies?.varieties[currentForm].pokemon.name ?? name}
            />
          )}

          {/* Pokemon Species */}
          {pokemonSpecies && (
            <PokemonSpeciesInfo pokemonSpecies={pokemonSpecies} />
          )}
        </div>
      </div>
    </>
  );
};
export default PokemonDetails;
