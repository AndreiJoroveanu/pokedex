import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router";
import { HiMiniArrowUturnLeft } from "react-icons/hi2";
import { Pokemon } from "pokedex-promise-v2";

import { usePokemonSpecies } from "../hooks/pokemon/useSpecificPokemon.ts";
import { useMoveBack } from "../hooks/useMoveBack.ts";

import Button from "../ui/Button.tsx";
import {
  PokemonInfo,
  PokemonInfoFromLink,
} from "../features/pokemon/PokemonInfo.tsx";
import PokemonSpeciesInfo from "../features/pokemon/PokemonSpeciesInfo.tsx";

const PokemonDetails = () => {
  const [currentForm, setCurrentForm] = useState<number>(0);

  // TS: state property from useLocation() hook doesn't have a specific type
  const { pokemon }: { pokemon: Pokemon } = useLocation().state;
  const { name } = useParams() as { name: string };

  const moveBack = useMoveBack();
  const { data: pokemonSpecies } = usePokemonSpecies(name);

  // Updates page title when changing page
  useEffect(() => {
    document.title = `Pokédex - ${name[0].toUpperCase() + name.slice(1)}`;
    return () => void (document.title = "Pokédex");
  }, [name]);

  return (
    <>
      <Button
        onClick={moveBack}
        isSelected={true}
        className="fixed z-10 ml-4 mt-24 flex items-center gap-2 px-4 md:mt-28"
      >
        <HiMiniArrowUturnLeft />
        Back
      </Button>

      <div className="pt-0 md:pt-36 lg:pt-24">
        <div className="mx-auto my-4 max-w-screen-md border-slate-400/40 bg-slate-100 p-4 pt-40 md:rounded-lg md:border-2 md:pt-4 dark:bg-slate-800">
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

          <h2 className="mt-4 text-3xl font-bold">Pokémon</h2>
          {pokemon && !currentForm ? (
            // If the user clicked a link from the app, use the data passed from parameter state
            <PokemonInfo pokemon={pokemon} />
          ) : (
            // If the user inputted the link manually, or they changed the form,
            // fetch the data from the parameter link
            <PokemonInfoFromLink
              name={pokemonSpecies?.varieties[currentForm].pokemon.name ?? name}
            />
          )}

          {/* Pokemon Species */}
          <h2 className="my-4 text-3xl font-bold">Pokémon Species</h2>
          {pokemonSpecies && (
            <PokemonSpeciesInfo pokemonSpecies={pokemonSpecies} />
          )}
        </div>
      </div>
    </>
  );
};
export default PokemonDetails;
