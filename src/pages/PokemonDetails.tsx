import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router";
import { Pokemon } from "pokedex-promise-v2";

import { usePokemonSpecies } from "../hooks/pokemon/useSpecificPokemon.ts";
import { usePokemonEvolutionChain } from "../hooks/pokemon/usePokemonEvolutionChain.ts";
import { api } from "../hooks/pokemon/usePokemonShared.ts";
import { capitalize } from "../utils/helpers.ts";

import TopButtons from "../features/pokemon/pokemonDetails/TopButtons.tsx";
import PokemonFormButtons from "../features/pokemon/pokemonDetails/PokemonFormButtons.tsx";
import PokemonImage from "../features/pokemon/pokemonDetails/PokemonImage.tsx";
import ToggleShinyButton from "../features/pokemon/pokemonDetails/ToggleShinyButton.tsx";
import PokemonCategory from "../features/pokemon/pokemonDetails/PokemonCategory.tsx";
import PokemonTypesDisplayText from "../features/pokemon/PokemonTypesDisplayText.tsx";
import PokemonAbilitiesDisplayText from "../features/pokemon/pokemonDetails/PokemonAbilitiesDisplayText.tsx";
import PokemonEvolutionChain from "../features/pokemon/pokemonDetails/PokemonEvolutionChain.tsx";
import PokemonStats from "../features/pokemon/pokemonDetails/PokemonStats.tsx";
import PokemonGenerationDisplay from "../features/pokemon/pokemonDetails/PokemonGenerationDisplay.tsx";
import FlavorTextEntries from "../features/pokemon/pokemonDetails/FlavorTextEntries.tsx";
import Footer from "../ui/Footer.tsx";

const PokemonDetails = () => {
  const [currentForm, setCurrentForm] = useState<number>(0);
  const [displayShiny, setDisplayShiny] = useState<boolean>(false);

  // Pokémon Species using the URL Parameter
  const { name } = useParams() as { name: string };
  const { data: pokemonSpecies } = usePokemonSpecies(name);

  // Evolution chain
  const { data: evolutionChain } = usePokemonEvolutionChain(
    pokemonSpecies?.evolution_chain.url,
  );

  // Pokémon passed as a state through React Router to avoid fetching it again
  // TS: state property from useLocation() hook doesn't have a specific type
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const { initialPokemon }: { initialPokemon: Pokemon } =
    useLocation().state ?? [];

  const [pokemon, setPokemon] = useState<Pokemon | undefined>(initialPokemon);

  // Fetch the Pokémon data if the form changes
  useEffect(() => {
    let ignore = false;

    void (async () => {
      if (currentForm === 0 && initialPokemon) {
        setPokemon(initialPokemon);
        return;
      }

      try {
        const pokemonName =
          currentForm === 0
            ? name
            : pokemonSpecies?.varieties[currentForm].pokemon.name;
        if (!ignore && pokemonName)
          setPokemon(await api.getPokemonByName(pokemonName));
      } catch (error) {
        if (error instanceof Error) console.error(error.message);
        setPokemon(undefined);
      }
    })();

    return () => void (ignore = true);
  }, [currentForm, initialPokemon, name, pokemonSpecies?.varieties]);

  return (
    <>
      {/* In React 19, you can now render the <title> tag in JSX */}
      <title>{`Pokédex - ${capitalize(name)}`}</title>

      <TopButtons />

      <div className="pt-0 md:pt-36 lg:pt-24">
        <div className="mx-auto max-w-3xl bg-slate-100 p-4 transition-colors max-md:pt-42 max-sm:pt-36 md:my-4 md:rounded-lg md:border-2 md:border-slate-400/40 dark:bg-slate-800">
          {/* List of Pokémon form buttons (if there is more than one) */}
          {pokemonSpecies && pokemonSpecies.varieties.length > 1 && (
            <div className="-mx-4 flex flex-nowrap gap-2 overflow-x-scroll px-2 pb-4 sm:px-4">
              <PokemonFormButtons
                pokemonSpecies={pokemonSpecies.varieties}
                currentForm={currentForm}
                onClick={(index) => {
                  setPokemon(undefined);
                  setCurrentForm(index);
                }}
              />
            </div>
          )}

          <PokemonImage
            key={`${currentForm}${displayShiny ? "-shiny" : ""}`}
            src={
              pokemon?.sprites.other.home[
                // Depending on the displayShiny state, display a different image
                displayShiny ? "front_shiny" : "front_default"
              ] ??
              // The default image is from Pokémon HOME, with the official artwork as a fallback
              pokemon?.sprites.other["official-artwork"][
                displayShiny ? "front_shiny" : "front_default"
              ]
            }
            alt={pokemon?.name}
          />

          <div className="flex items-end justify-between">
            {/* Name */}
            <h1 className="text-2xl font-bold capitalize">
              {currentForm
                ? (pokemon?.name.split("-").join(" ") ?? name)
                : name}
            </h1>

            <ToggleShinyButton
              displayShiny={displayShiny}
              setDisplayShiny={setDisplayShiny}
            />
          </div>

          <PokemonCategory
            category={pokemonSpecies?.genera.find(
              (genus) => genus.language.name === "en",
            )}
          />

          <PokemonTypesDisplayText types={pokemon?.types} />

          <PokemonAbilitiesDisplayText abilities={pokemon?.abilities} />

          <PokemonEvolutionChain
            chain={evolutionChain?.chain}
            pokemonName={pokemonSpecies?.name}
          />

          <PokemonStats pokemonStats={pokemon?.stats} />

          <PokemonGenerationDisplay
            generation={pokemonSpecies?.generation.name}
          />

          {/* All english Dex descriptions */}
          <FlavorTextEntries
            textEntries={pokemonSpecies?.flavor_text_entries.filter(
              (entry) => entry.language.name === "en",
            )}
          />

          <Footer className="md:hidden" />
        </div>

        <Footer className="mb-4 max-md:hidden" />
      </div>
    </>
  );
};
export default PokemonDetails;
