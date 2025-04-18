import { useEffect } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { AxiosError } from "axios";

import { usePokemonDetailsParams } from "@/hooks/useUrlParams.ts";
import {
  useEvolutionChain,
  usePokemon,
  usePokemonSpecies,
} from "@/hooks/usePokeApi.ts";
import { getIdFromUrl } from "@/utils/getIdFromUrl.ts";
import { capitalize } from "@/utils/capitalize.ts";
import { playAudio } from "@/utils/playAudio.ts";
import { PokemonDetailsParams } from "@/types/types.ts";

import ErrorMessage from "@/components/error/ErrorMessage.tsx";
import TopButtons from "@/features/pokemon/components/pokemonDetails/TopButtons.tsx";
import PokemonFormButtons from "@/features/pokemon/components/pokemonDetails/PokemonFormButtons.tsx";
import PokemonImage from "@/features/pokemon/components/pokemonDetails/PokemonImage.tsx";
import ToggleShinyButton from "@/features/pokemon/components/pokemonDetails/ToggleShinyButton.tsx";
import PokemonCategory from "@/features/pokemon/components/pokemonDetails/PokemonCategory.tsx";
import PokemonTypesDisplay from "@/features/pokemon/components/PokemonTypesDisplay.tsx";
import PokemonAbilitiesDisplayText from "@/features/pokemon/components/pokemonDetails/PokemonAbilitiesDisplayText.tsx";
import PokemonStats from "@/features/pokemon/components/pokemonDetails/PokemonStats.tsx";
import PokemonEvolutionChain from "@/features/pokemon/components/pokemonDetails/PokemonEvolutionChain.tsx";
import GenerationText from "@/components/GenerationText.tsx";
import PokemonCatchRate from "@/features/pokemon/components/pokemonDetails/PokemonCatchRate.tsx";
import PokemonTypeEffectiveness from "@/features/pokemon/components/pokemonDetails/PokemonTypeEffectiveness.tsx";
import FlavorTextEntries from "@/features/pokemon/components/pokemonDetails/FlavorTextEntries.tsx";
import PokemonLearnset from "@/features/pokemon/components/pokemonDetails/learnset/PokemonLearnset.tsx";
import Footer from "@/components/Footer.tsx";

const PokemonDetails = () => {
  // State specific to this page
  const { getUrlParam, setUrlParam } = usePokemonDetailsParams();
  // Indexing from 1 instead of 0 since this value can be seen by the user
  const currentFormIndex = (getUrlParam("form") ?? 1) - 1;
  const displayShiny = getUrlParam("displayShiny") ?? false;

  // Fetching data
  // Pokémon Species using the URL Parameter
  const pokemonId = Number(Route.useLoaderData().pokemonId);
  const { data: pokemonSpecies, error: errorPS } = usePokemonSpecies(pokemonId);

  // Pokémon based on the selected Form
  const { data: pokemon, error: errorP } = usePokemon(
    currentFormIndex === 0
      ? pokemonId
      : getIdFromUrl(pokemonSpecies?.varieties[currentFormIndex].pokemon.url),
  );

  // Pokémon Evolution chain
  const { data: evolutionChain, error: errorEC } = useEvolutionChain(
    getIdFromUrl(pokemonSpecies?.evolution_chain.url),
  );

  // Play the Pokémon's cry when the page first loads, or when the form is changed
  useEffect(() => {
    if (!pokemon?.cries.latest) return;
    const { play, stop } = playAudio(pokemon.cries.latest);

    void play();
    return () => stop();
  }, [pokemon?.cries.latest]);

  // Display an error message if there is an error whole fetching data
  if (errorPS || errorEC || errorP)
    return (
      <ErrorMessage
        errors={[errorPS, errorEC, errorP]
          .filter((e) => e instanceof AxiosError)
          .map((e) => e.message)}
      />
    );

  return (
    <>
      {/* In React 19, you can now render the <title> tag in JSX */}
      <title>{`Pokédex - ${capitalize(pokemon?.name ?? "Loading")}`}</title>

      <TopButtons />

      <div className="mx-auto max-w-3xl p-4 max-sm:px-2 sm:pt-42 md:px-0 lg:pt-28">
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
            setDisplayShiny={() => setUrlParam("displayShiny", true)}
          />
        </div>

        <PokemonCategory
          category={pokemonSpecies?.genera.find(
            (genus) => genus.language.name === "en",
          )}
        />

        <div className="my-1">
          <PokemonTypesDisplay types={pokemon?.types} className="gap-2" />
        </div>

        <PokemonAbilitiesDisplayText abilities={pokemon?.abilities} />

        <PokemonFormButtons
          pokemonSpecies={pokemonSpecies?.varieties}
          currentForm={currentFormIndex}
          handleClick={(index) => setUrlParam("form", index + 1)}
        />

        <PokemonStats pokemonStats={pokemon?.stats} />

        <PokemonEvolutionChain
          chain={evolutionChain?.chain}
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

        <PokemonLearnset moves={pokemon?.moves} />

        <Footer />
      </div>
    </>
  );
};
export const Route = createFileRoute("/pokemon/$pokemonId")({
  component: PokemonDetails,
  loader: ({ params: { pokemonId } }) => ({ pokemonId }),
  validateSearch: (search) => ({ ...search }) as PokemonDetailsParams,
  remountDeps: ({ params }) => params.pokemonId,
});
