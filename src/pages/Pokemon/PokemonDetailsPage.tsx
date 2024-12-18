import { useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router";
import { Pokemon } from "pokedex-promise-v2";
import { usePokemonSpecies } from "../../hooks/usePokemon.ts";
import {
  PokemonInfo,
  PokemonInfoFromLink,
} from "../../components/PokemonInfo.tsx";
import PokemonSpeciesInfo from "../../components/PokemonSpeciesInfo.tsx";

const PokemonDetailsPage = () => {
  const [currentForm, setCurrentForm] = useState<number>(0);

  const state: Pokemon = useLocation().state?.pokemon;
  const { name } = useParams() as { name: string };
  const navigate = useNavigate();

  const { data: pokemonSpecies /* isLoading, error */ } =
    usePokemonSpecies(name);

  return (
    <>
      <button
        onClick={() => navigate(-1)}
        className="fixed border px-4 py-2 mt-28 ml-4 rounded-full bg-white hover:bg-gray-100 shadow-md hover:shadow-lg transition-shadow"
      >
        Back
      </button>

      <div className="p-4 pt-24 max-w-screen-md mx-auto">
        <div className="p-4 my-4 border-2 border-gray-200 rounded-lg">
          {/* List of Pokémon form buttons (if there is more than one form) */}
          {pokemonSpecies &&
            pokemonSpecies.varieties.length > 1 &&
            pokemonSpecies.varieties.map((form, index) => (
              <button
                key={form.pokemon.name}
                onClick={() => setCurrentForm(index)}
                className="capitalize border px-4 py-2 mr-2 rounded-full bg-white hover:bg-gray-100 shadow-md hover:shadow-lg transition-shadow"
              >
                {form.pokemon.name.split("-").join(" ")}
              </button>
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

        <div className="p-4 my-4 border-2 border-gray-200 rounded-lg">
          <p className="text-3xl font-bold">Pokémon Species</p>
          {pokemonSpecies && (
            <PokemonSpeciesInfo pokemonSpecies={pokemonSpecies} />
          )}
        </div>
      </div>
    </>
  );
};
export default PokemonDetailsPage;
