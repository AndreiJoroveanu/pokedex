import { Pokemon } from "pokedex-promise-v2";

import { usePokemon } from "../../hooks/pokemon/useSpecificPokemon.ts";

import PokemonImage from "./pokemonDetails/PokemonImage.tsx";
import PokemonTypesDisplayText from "./PokemonTypesDisplayText.tsx";
import PokemonAbilitiesDisplayText from "./pokemonDetails/PokemonAbilitiesDisplayText.tsx";
import PokemonStats from "./PokemonStats.tsx";
import Loader from "../../ui/Loader.tsx";

interface InfoProps {
  pokemon: Pokemon;
}

const PokemonInfo = ({ pokemon }: InfoProps) => (
  <>
    <PokemonImage
      src={pokemon.sprites.other.home.front_default}
      alt={pokemon.name}
    />

    {/* Name */}
    <h1 className="text-2xl font-bold capitalize">{pokemon.species.name}</h1>

    <PokemonTypesDisplayText types={pokemon.types} />

    <PokemonAbilitiesDisplayText abilities={pokemon.abilities} />

    <PokemonStats pokemonStats={pokemon.stats} />
  </>
);

const PokemonInfoFromLink = ({ name }: { name: string }) => {
  const { data: pokemon, isLoading } = usePokemon(name);

  return (
    <>
      {isLoading || !pokemon ? (
        <>
          <div className="aspect-square max-h-[512px] w-full">
            <Loader size={24} displaysText={true} />
          </div>

          <h1 className="text-2xl font-bold capitalize">{name}</h1>
        </>
      ) : (
        <PokemonInfo pokemon={pokemon} />
      )}
    </>
  );
};
export { PokemonInfo, PokemonInfoFromLink };
