import { useEffect } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { AxiosError } from "axios";

import { usePokemonDetailsParam } from "@/features/pokemon/hooks/usePokemonDetailsParam.ts";
import { usePokemon, usePokemonSpecies } from "@/hooks/usePokeApi.ts";
import { getIdFromUrl } from "@/utils/getIdFromUrl.ts";
import { capitalize } from "@/utils/capitalize.ts";
import { playAudio } from "@/utils/playAudio.ts";
import type { PokemonDetailsParams } from "@/types/types.ts";

import ErrorMessage from "@/components/error/ErrorMessage.tsx";
import TopButtons from "@/features/pokemon/components/pokemonDetails/TopButtons.tsx";
import PokemonImage from "@/features/pokemon/components/pokemonDetails/PokemonImage.tsx";
import PokemonName from "@/features/pokemon/components/pokemonDetails/PokemonName.tsx";
import ToggleShinyButton from "@/features/pokemon/components/pokemonDetails/ToggleShinyButton.tsx";
import PokemonCategory from "@/features/pokemon/components/pokemonDetails/PokemonCategory.tsx";
import PokemonTypesDisplay from "@/features/pokemon/components/PokemonTypesDisplay.tsx";
import PokemonFormButtons from "@/features/pokemon/components/pokemonDetails/PokemonFormButtons.tsx";
import PokemonAbilities from "@/features/pokemon/components/pokemonDetails/PokemonAbilities.tsx";
import PokemonStats from "@/features/pokemon/components/pokemonDetails/PokemonStats.tsx";
import PokemonEvolutionChain from "@/features/pokemon/components/pokemonDetails/PokemonEvolutionChain.tsx";
import GenerationText from "@/components/GenerationText.tsx";
import PokemonCatchRate from "@/features/pokemon/components/pokemonDetails/PokemonCatchRate.tsx";
import PokemonTypeEffectiveness from "@/features/pokemon/components/pokemonDetails/PokemonTypeEffectiveness.tsx";
import FlavorTextEntries from "@/features/pokemon/components/pokemonDetails/FlavorTextEntries.tsx";
import Accordion from "@/components/Accordion.tsx";
import PokemonMoves from "@/features/pokemon/components/pokemonDetails/learnset/PokemonMoves.tsx";
import PokemonLocations from "@/features/pokemon/components/pokemonDetails/PokemonLocations.tsx";
import Footer from "@/components/Footer.tsx";

const PokemonDetails = () => {
  // Search Param states
  const [displayShiny, setDisplayShiny] =
    usePokemonDetailsParam("displayShiny");
  const [formIndex, setFormIndex] = usePokemonDetailsParam("form");
  // Indexing from 1 instead of 0 since this value can be seen by the user
  const currentFormIndex = (formIndex ?? 1) - 1;

  // Panel states
  const [isLearnsetOpen, setLearnsetOpen] = usePokemonDetailsParam(
    "isLearnsetPanelOpen",
  );
  const [isLocationsOpen, setLocationsOpen] = usePokemonDetailsParam(
    "isLocationsPanelOpen",
  );

  // Fetching data
  // Pokémon Species using the Path Param
  const { pokemonId } = Route.useParams();
  const { data: pokemonSpecies, error: errorPS } = usePokemonSpecies(
    Number(pokemonId),
  );

  // Pokémon based on the selected form
  const { data: pokemon, error: errorP } = usePokemon(
    currentFormIndex === 0
      ? // Using the Path Param since the first form has the same ID
        Number(pokemonId)
      : // Get the ID from Pokémon Species' variety index
        getIdFromUrl(pokemonSpecies?.varieties[currentFormIndex].pokemon.url),
  );

  // Play the Pokémon's cry when the page first loads, or when the form is changed
  useEffect(() => {
    if (!pokemon?.cries.latest) return;
    const { play, stop } = playAudio(pokemon.cries.latest);

    void play();
    return () => stop();
  }, [pokemon?.cries.latest]);

  // Display an error message if there is an error whole fetching data
  if ((!pokemon || !pokemonSpecies) && (errorPS || errorP))
    return (
      <ErrorMessage
        errors={[errorPS, errorP]
          .filter((e) => e instanceof AxiosError)
          .map((e) => e.message)}
      />
    );

  return (
    <>
      {/* In React 19, you can now render the <title> tag in JSX */}
      {pokemon && <title>{`Pokédex - ${capitalize(pokemon.name)}`}</title>}

      <TopButtons />

      <div className="mx-auto max-w-3xl p-2 pb-4 sm:px-4 sm:pt-32 md:px-0 md:pt-18">
        <PokemonImage
          key={`${currentFormIndex}${displayShiny ? "-shiny" : ""}`}
          src={
            // Default image is from Pokémon HOME
            pokemon?.sprites.other.home[
              // Depending on the displayShiny state, display a different image
              `front_${displayShiny ? "shiny" : "default"}`
            ] ??
            // Official artwork as a fallback
            pokemon?.sprites.other["official-artwork"][
              `front_${displayShiny ? "shiny" : "default"}`
            ]
          }
          alt={pokemon?.name}
        />

        <div className="flex items-end justify-between px-2">
          <PokemonName
            name={
              pokemon?.name ??
              pokemonSpecies?.varieties[currentFormIndex].pokemon?.name
            }
          />

          <ToggleShinyButton
            displayShiny={displayShiny ?? false}
            setDisplayShiny={() =>
              setDisplayShiny(displayShiny ? undefined : true)
            }
          />
        </div>

        <PokemonCategory
          category={pokemonSpecies?.genera.find(
            (genus) => genus.language.name === "en",
          )}
        />

        <PokemonTypesDisplay
          types={pokemon?.types}
          className="mx-2 my-1 gap-2"
        />

        <PokemonFormButtons
          pokemonSpecies={pokemonSpecies?.varieties}
          placeholderName={pokemon?.name}
          currentForm={currentFormIndex}
          handleClick={(index) =>
            setFormIndex(index === 0 ? undefined : index + 1)
          }
        />

        <PokemonAbilities abilities={pokemon?.abilities} />

        <PokemonStats pokemonStats={pokemon?.stats} />

        <PokemonEvolutionChain
          id={getIdFromUrl(pokemonSpecies?.evolution_chain.url)}
          pokemonName={pokemonSpecies?.name}
        />

        <GenerationText
          generation={pokemonSpecies?.generation.name}
          itemType="Pokémon"
        />

        <PokemonCatchRate catchRate={pokemonSpecies?.capture_rate} />

        <PokemonTypeEffectiveness
          types={pokemon?.types.map((type) => type.type.name)}
        />

        {/* All english Dex descriptions */}
        <FlavorTextEntries textEntries={pokemonSpecies?.flavor_text_entries} />

        <Accordion
          label="Learnset"
          initialIsOpen={isLearnsetOpen}
          toggleOpen={() => setLearnsetOpen(isLearnsetOpen ? undefined : true)}
        >
          <PokemonMoves moves={pokemon?.moves} />
        </Accordion>

        <Accordion
          label="Locations"
          initialIsOpen={isLocationsOpen}
          toggleOpen={() =>
            setLocationsOpen(isLocationsOpen ? undefined : true)
          }
        >
          <PokemonLocations id={Number(pokemonId)} />
        </Accordion>

        <Footer />
      </div>
    </>
  );
};

export const Route = createFileRoute("/pokemon/$pokemonId")({
  component: PokemonDetails,
  validateSearch: (search) => ({ ...search }) as PokemonDetailsParams,
  loaderDeps: ({ search: { form } }) => ({ form }),
  loader: ({
    context: { queryClient, pokeApi },
    params: { pokemonId },
    deps: { form },
  }) => {
    const pokemonIdAsNumber = Number(pokemonId);

    // Display an error if the Pokémon ID is not a number
    if (isNaN(pokemonIdAsNumber))
      throw new Error("Pokémon ID must be a number");

    // Prefetch Pokémon Species data
    void queryClient.ensureQueryData({
      queryFn: () => pokeApi.getPokemonSpeciesByName(pokemonIdAsNumber),
      queryKey: ["pokemonSpecies", pokemonIdAsNumber],
    });

    // Prefetch Pokémon location data
    void queryClient.ensureQueryData({
      queryFn: () =>
        pokeApi.getResource(`/api/v2/pokemon/${pokemonIdAsNumber}/encounters`),
      queryKey: ["pokemonLocation", pokemonIdAsNumber],
    });

    // Skip prefetching Pokémon data if a specific Pokémon form is selected,
    // since the ID comes from Pokémon Species data, which isn't fetched yet
    if (!form)
      void queryClient.ensureQueryData({
        queryFn: () => pokeApi.getPokemonByName(pokemonIdAsNumber),
        queryKey: ["pokemon", pokemonIdAsNumber],
      });
  },
  remountDeps: ({ params }) => params.pokemonId,
});
