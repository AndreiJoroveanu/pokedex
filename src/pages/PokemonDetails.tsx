import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router";
import axios from "axios";
import { Pokemon } from "pokedex-promise-v2";

import { usePokemonSpecies } from "@/hooks/pokemon/useSpecificPokemon.ts";
import { usePokemonEvolutionChain } from "@/hooks/pokemon/usePokemonEvolutionChain.ts";
import { getIdFromUrl } from "@/utils/getIdFromUrl.ts";
import { api } from "@/hooks/pokemon/usePokemonShared.ts";
import { capitalize } from "@/utils/helpers.ts";

import ErrorMessage from "@/ui/ErrorMessage.tsx";
import TopButtons from "@/features/pokemon/pokemonDetails/TopButtons.tsx";
import PokemonFormButtons from "@/features/pokemon/pokemonDetails/PokemonFormButtons.tsx";
import PokemonImage from "@/features/pokemon/pokemonDetails/PokemonImage.tsx";
import ToggleShinyButton from "@/features/pokemon/pokemonDetails/ToggleShinyButton.tsx";
import PokemonCategory from "@/features/pokemon/pokemonDetails/PokemonCategory.tsx";
import PokemonTypesDisplay from "@/features/pokemon/PokemonTypesDisplay.tsx";
import PokemonAbilitiesDisplayText from "@/features/pokemon/pokemonDetails/PokemonAbilitiesDisplayText.tsx";
import PokemonStats from "@/features/pokemon/pokemonDetails/PokemonStats.tsx";
import PokemonEvolutionChain from "@/features/pokemon/pokemonDetails/PokemonEvolutionChain.tsx";
import PokemonGenerationDisplay from "@/features/pokemon/pokemonDetails/PokemonGenerationDisplay.tsx";
import PokemonTypeEffectiveness from "@/features/pokemon/pokemonDetails/PokemonTypeEffectiveness.tsx";
import CollapsingPanel from "@/ui/CollapsingPanel.tsx";
import PokemonMoves from "@/features/pokemon/pokemonDetails/PokemonMoves.tsx";
import FlavorTextEntries from "@/features/pokemon/pokemonDetails/FlavorTextEntries.tsx";
import Footer from "@/ui/Footer.tsx";

const PokemonDetails = () => {
  const [currentForm, setCurrentForm] = useState<number>(0);
  const [displayShiny, setDisplayShiny] = useState<boolean>(false);

  // Pokémon Species using the URL Parameter
  const { id } = useParams() as { id: string };
  const { data: pokemonSpecies, error: errorPS } = usePokemonSpecies(id);

  // Evolution chain
  const { data: evolutionChain, error: errorEC } = usePokemonEvolutionChain(
    Number(getIdFromUrl(pokemonSpecies?.evolution_chain.url)),
  );

  // Pokémon passed as a state through React Router to avoid fetching it again
  // TS: state property from useLocation() hook doesn't have a specific type
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const { initialPokemon }: { initialPokemon: Pokemon } =
    useLocation().state ?? {};

  const [pokemon, setPokemon] = useState<Pokemon | undefined>(initialPokemon);
  const [errorP, setErrorP] = useState<string | null>(null);

  // Fetch the Pokémon data if the form changes
  useEffect(() => {
    let ignore = false;

    void (async () => {
      if (currentForm === 0 && initialPokemon) {
        setPokemon(initialPokemon);
        return;
      }

      try {
        const pokemonId =
          currentForm === 0
            ? id
            : getIdFromUrl(pokemonSpecies?.varieties[currentForm].pokemon.url);

        if (!ignore && pokemonId)
          setPokemon(await api.getPokemonByName(pokemonId));
      } catch (error) {
        let errorMessage = "An unknown error occurred.";

        if (axios.isAxiosError(error)) {
          switch (error.response?.status) {
            case 404:
              errorMessage =
                "The requested resource was not found. Please check the URL or try again.";
              break;
            case 500:
              errorMessage = "Internal server error. Try again later.";
              break;
            case 503:
              errorMessage = "Service unavailable. Check back later.";
              break;
            default:
              errorMessage = error.message;
          }
        } else if (error instanceof Error) errorMessage = error.message;

        setErrorP(errorMessage ?? "An unknown error occurred.");
        setPokemon(undefined);
      }
    })();

    return () => void (ignore = true);
  }, [currentForm, id, initialPokemon, pokemonSpecies?.varieties]);

  // Play the Pokémon's cry when the page first loads, or when the form is changed
  useEffect(() => {
    const cry = new Audio(pokemon?.cries.latest);
    cry.volume = 0.1;

    void (async () => {
      try {
        await cry.play();
      } catch {
        // No need to do anything
      }
    })();

    return () => {
      cry.pause();
      cry.currentTime = 0;
    };
  }, [pokemon?.cries.latest]);

  // Display an error message if there is an error whole fetching data
  if (errorPS || errorEC || errorP)
    return (
      <ErrorMessage
        errors={[errorPS, errorEC, errorP].filter((e): e is string =>
          Boolean(e),
        )}
      />
    );

  return (
    <>
      {/* In React 19, you can now render the <title> tag in JSX */}
      <title>{`Pokédex - ${capitalize(pokemon?.name ?? "Loading")}`}</title>

      <TopButtons />

      <div className="pt-0 md:pt-36 lg:pt-24">
        <div className="mx-auto max-w-3xl bg-slate-100 p-2 pt-36 transition-colors sm:p-4 sm:pt-42 md:my-4 md:rounded-lg md:border-2 md:border-slate-400/40 md:pt-4 dark:bg-slate-800">
          {/* List of Pokémon form buttons (if there is more than one) */}
          {pokemonSpecies && pokemonSpecies.varieties.length > 1 && (
            <div className="-mx-2 flex flex-nowrap gap-2 overflow-x-scroll px-2 pb-4 sm:-mx-4 sm:px-4">
              <PokemonFormButtons
                pokemonSpecies={pokemonSpecies.varieties}
                currentForm={currentForm}
                handleClick={(index) => {
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
              {pokemon?.name.split("-").join(" ") ?? "Loading..."}
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

          <div className="my-1">
            <PokemonTypesDisplay types={pokemon?.types} />
          </div>

          <PokemonAbilitiesDisplayText abilities={pokemon?.abilities} />

          <PokemonStats pokemonStats={pokemon?.stats} />

          <PokemonEvolutionChain
            chain={evolutionChain?.chain}
            pokemonName={pokemonSpecies?.name}
          />

          <PokemonGenerationDisplay
            generation={pokemonSpecies?.generation.name}
          />

          <PokemonTypeEffectiveness
            types={pokemon?.types.map((type) => type.type.name)}
          />

          <CollapsingPanel label="Learnset" className="p-2 sm:p-4">
            <PokemonMoves moves={pokemon?.moves} />
          </CollapsingPanel>

          <CollapsingPanel label="Dex Entries" className="px-2">
            {/* All english Dex descriptions */}
            <FlavorTextEntries
              textEntries={pokemonSpecies?.flavor_text_entries.filter(
                (entry) => entry.language.name === "en",
              )}
            />
          </CollapsingPanel>

          <Footer className="md:hidden" />
        </div>

        <Footer className="mb-4 max-md:hidden" />
      </div>
    </>
  );
};
export default PokemonDetails;
