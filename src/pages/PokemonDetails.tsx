import { useState } from "react";
import { useLocation, useParams } from "react-router";
import { Pokemon } from "pokedex-promise-v2";

import { useMoveBack } from "../hooks/useMoveBack.tsx";
import { usePokemonSpecies } from "../hooks/usePokemon.ts";

import Button from "../ui/Button.tsx";
import {
  PokemonInfo,
  PokemonInfoFromLink,
} from "../features/pokemon/PokemonInfo.tsx";
import PokemonSpeciesInfo from "../features/pokemon/PokemonSpeciesInfo.tsx";

const PokemonDetails = () => {
  const [currentForm, setCurrentForm] = useState<number>(0);

  const pokemon: Pokemon = useLocation().state?.pokemon;
  const { name } = useParams() as { name: string };

  const moveBack = useMoveBack();
  const { data: pokemonSpecies } = usePokemonSpecies(name);

  return (
    <>
      <Button onClick={moveBack} className="fixed ml-4 mt-28 px-4">
        Back
      </Button>

      <div className="mx-auto max-w-screen-md p-4 pt-24">
        <div className="my-4 rounded-lg border-2 border-gray-200 p-4">
          {/* List of Pokémon form buttons (if there is more than one) */}
          {pokemonSpecies &&
            pokemonSpecies.varieties.length > 1 &&
            pokemonSpecies.varieties.map((form, index) => (
              <Button
                key={form.pokemon.name}
                onClick={() => setCurrentForm(index)}
                isSelected={currentForm === index}
                className="mr-2 px-4 capitalize"
              >
                {form.pokemon.name.split("-").join(" ")}
              </Button>
            ))}

          <h2 className="text-3xl font-bold">Pokémon</h2>
          {pokemon && !currentForm ? (
            // If the user clicked a link from the app, use the data passed from parameter state
            <PokemonInfo pokemon={pokemon} />
          ) : (
            // If the user inputted the link manually, or they changed the form,
            // fetch the data from the parameter link
            <PokemonInfoFromLink
              name={pokemonSpecies?.varieties[currentForm].pokemon.name || name}
            />
          )}
        </div>

        <div className="my-4 rounded-lg border-2 border-gray-200 p-4">
          <h2 className="text-3xl font-bold">Pokémon Species</h2>
          {pokemonSpecies && (
            <PokemonSpeciesInfo pokemonSpecies={pokemonSpecies} />
          )}
        </div>
      </div>
    </>
  );
};
export default PokemonDetails;
