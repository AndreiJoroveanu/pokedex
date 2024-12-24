import { usePokemon } from "../hooks/usePokemon.ts";
import { Pokemon } from "pokedex-promise-v2";
import Loader from "./Loader.tsx";

interface PokemonInfoProps {
  pokemon: Pokemon;
}

const PokemonInfo = ({ pokemon }: PokemonInfoProps) => {
  return (
    <>
      {/* Image (Pokémon HOME artwork) */}
      <img
        src={pokemon.sprites.other.home.front_default?.toString()}
        alt={pokemon.name}
        className="object-contain mx-auto aspect-square text-transparent"
      />

      {/* Name */}
      <h1 className="capitalize text-2xl font-bold">{pokemon.species.name}</h1>

      {/* Types */}
      <p>
        {pokemon.types.length === 1 ? "Type: " : "Types: "}
        {pokemon.types.map((type) => (
          <span key={type.type.name} className="capitalize">
            {` ${type.type.name}`}
          </span>
        ))}
      </p>

      {/* Abilities */}
      <p>
        {pokemon.abilities.length === 1 ? "Ability: " : "Abilities: "}
        {pokemon.abilities.map((ability) => (
          <span key={ability.ability.name} className="capitalize">
            {` ${ability.ability.name}`}
          </span>
        ))}
      </p>

      {/* Stats */}
      <ul>
        {pokemon.stats.map((stat) => (
          <li key={stat.stat.name} className="capitalize">
            {stat.stat.name.split("-").join(" ")}: {stat.base_stat}
          </li>
        ))}
      </ul>
    </>
  );
};

const PokemonInfoFromLink = ({ name }: { name: string }) => {
  const { data: pokemon, isLoading /*, error */ } = usePokemon(name);

  return (
    <>
      {pokemon && !isLoading ? (
        <PokemonInfo pokemon={pokemon} />
      ) : (
        <>
          <div className="w-[512px] h-[512px] mx-auto">
            <Loader size={24}>
              <p className="text-2xl font-bold mt-4">Loading...</p>
            </Loader>
          </div>

          <h1 className="capitalize text-2xl font-bold">{name}</h1>
        </>
      )}
    </>
  );
};
export { PokemonInfo, PokemonInfoFromLink };
