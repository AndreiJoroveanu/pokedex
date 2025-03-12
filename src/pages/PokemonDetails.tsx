import { useEffect } from "react";
import { useParams } from "react-router";
import { useShallow } from "zustand/react/shallow";

import useAppStore from "@/store/useAppStore.ts";
import { usePokemonDetailsParams } from "@/hooks/useUrlParams.ts";
import {
  useEvolutionChain,
  usePokemon,
  usePokemonSpecies,
} from "@/hooks/usePokeApi.ts";
import { getIdFromUrl } from "@/utils/getIdFromUrl.ts";
import { capitalize } from "@/utils/capitalize.ts";

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
  // State specific to this page
  const { getUrlParam, setUrlParam } = usePokemonDetailsParams();
  // Indexing from 1 instead of 0 since this value can be seen by the user
  const currentFormIndex = Number(getUrlParam("form") ?? 1) - 1;
  const displayShiny = Boolean(getUrlParam("displayShiny"));

  const [
    isLearnsetPanelOpen,
    toggleLearnsetPanelOpen,
    isDexEntriesPanelOpen,
    toggleDexEntriesPanelOpen,
  ] = useAppStore(
    useShallow((state) => [
      state.isLearnsetPanelOpen,
      state.toggleLearnsetPanelOpen,
      state.isDexEntriesPanelOpen,
      state.toggleDexEntriesPanelOpen,
    ]),
  );

  // Fetching data
  // Pokémon Species using the URL Parameter
  const { id } = useParams() as { id: string };
  const { data: pokemonSpecies, error: errorPS } = usePokemonSpecies(
    Number(id),
  );

  // Pokémon based on the selected Form
  const { data: pokemon, error: errorP } = usePokemon(
    currentFormIndex === 0
      ? Number(id)
      : getIdFromUrl(pokemonSpecies?.varieties[currentFormIndex].pokemon.url),
  );

  // Pokémon Evolution chain
  const { data: evolutionChain, error: errorEC } = useEvolutionChain(
    getIdFromUrl(pokemonSpecies?.evolution_chain.url),
  );

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
        errors={[errorPS, errorEC, errorP]
          .filter((e): e is Error => Boolean(e))
          .map((e) => e.message)}
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
                currentForm={currentFormIndex}
                handleClick={(index) => setUrlParam("form", String(index + 1))}
              />
            </div>
          )}

          <PokemonImage
            key={`${currentFormIndex}${displayShiny ? "-shiny" : ""}`}
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
              setDisplayShiny={() => setUrlParam("displayShiny", "true")}
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

          <CollapsingPanel
            label="Learnset"
            initialIsOpen={isLearnsetPanelOpen}
            toggleOpen={toggleLearnsetPanelOpen}
            className="p-2 sm:p-4"
          >
            <PokemonMoves moves={pokemon?.moves} />
          </CollapsingPanel>

          <CollapsingPanel
            label="Dex Entries"
            initialIsOpen={isDexEntriesPanelOpen}
            toggleOpen={toggleDexEntriesPanelOpen}
            className="px-2"
          >
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
