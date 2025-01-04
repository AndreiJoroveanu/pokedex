import { useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router";
import { Pokemon } from "pokedex-promise-v2";

import { usePokemonSpecies } from "../hooks/usePokemon.ts";

import Button from "../ui/Button.tsx";
import {
  PokemonInfo,
  PokemonInfoFromLink,
} from "../features/pokemon/PokemonInfo.tsx";
import PokemonSpeciesInfo from "../features/pokemon/PokemonSpeciesInfo.tsx";

const PokemonDetails = () => {
  const [currentForm, setCurrentForm] = useState<number>(0);

  const state: Pokemon = useLocation().state?.pokemon;
  const { name } = useParams() as { name: string };
  const navigate = useNavigate();

  const { data: pokemonSpecies /* isLoading, error */ } =
    usePokemonSpecies(name);

  return (
    <>
      <Button onClick={() => navigate(-1)} className="fixed ml-4 mt-28 px-4">
        Back
      </Button>

      <div className="mx-auto max-w-screen-md p-4 pt-24">
        <div className="my-4 rounded-lg border-2 border-gray-200 p-4">
          {/* List of Pokémon form buttons (if there is more than one form) */}
          {pokemonSpecies &&
            pokemonSpecies.varieties.length > 1 &&
            pokemonSpecies.varieties.map((form, index) => (
              <Button
                key={form.pokemon.name}
                onClick={() => setCurrentForm(index)}
                className="mr-2 px-4 capitalize"
              >
                {form.pokemon.name.split("-").join(" ")}
              </Button>
            ))}

          <p className="text-3xl font-bold">Pokémon</p>
          {state && !currentForm ? (
            // If the user clicked a link from the app, use the data passed from parameter state
            <PokemonInfo pokemon={state} />
          ) : (
            // If the user inputted the link manually, or they changed the form,
            // fetch the data from the parameter link
            <PokemonInfoFromLink
              name={pokemonSpecies?.varieties[currentForm].pokemon.name || name}
            />
          )}
        </div>

        <div className="my-4 rounded-lg border-2 border-gray-200 p-4">
          <p className="text-3xl font-bold">Pokémon Species</p>
          {pokemonSpecies && (
            <PokemonSpeciesInfo pokemonSpecies={pokemonSpecies} />
          )}
        </div>
      </div>
    </>
  );
};
export default PokemonDetails;
