import { useLocation, useNavigate, useParams } from "react-router";
import { usePokemon, usePokemonSpecies } from "../../hooks/usePokemon.ts";
import { Pokemon, PokemonSpecies } from "pokedex-promise-v2";

const PokemonDetails = () => {
  const state: Pokemon = useLocation().state?.pokemon;
  const { name } = useParams() as { name: string };
  const navigate = useNavigate();

  const { data: pokemonSpecies /* isLoading, error */ } =
    usePokemonSpecies(name);

  return (
    <div className="p-4 py-28">
      <button
        onClick={() => navigate(-1)}
        className="border px-4 py-2 rounded-full hover:bg-gray-100 shadow-md hover:shadow-lg transition-shadow"
      >
        Back
      </button>

      {state ? (
        // If the user clicked a link from the app, use the data passed from parameter state
        <PokemonInfo pokemon={state} />
      ) : (
        // If the user inputted the link manually, fetch the data from the parameter link
        <PokemonInfoFromLink name={name} />
      )}

      {pokemonSpecies && <PokemonSpeciesInfo pokemonSpecies={pokemonSpecies} />}
    </div>
  );
};

const PokemonInfoFromLink = ({ name }: { name: string }) => {
  const { data: pokemon /* isLoading, error */ } = usePokemon(name);

  return <>{pokemon && <PokemonInfo pokemon={pokemon} />}</>;
};

const PokemonInfo = ({ pokemon }: { pokemon: Pokemon }) => {
  return (
    <>
      {/* Image (Pokémon HOME artwork) */}
      <img
        src={pokemon.sprites.other.home.front_default?.toString()}
        alt={pokemon.name}
        className="object-contain"
      />

      {/* Name */}
      <h1 className="capitalize text-2xl font-bold">
        {pokemon.id}. {pokemon.species.name}
      </h1>

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
    </>
  );
};

const PokemonSpeciesInfo = ({
  pokemonSpecies,
}: {
  pokemonSpecies: PokemonSpecies;
}) => {
  return (
    <>
      {/* Dex Description */}
      <p>{pokemonSpecies.flavor_text_entries[0].flavor_text}</p>

      {/* Generation */}
      <p className="capitalize">
        {pokemonSpecies.generation.name.split("-")[0]}{" "}
        {pokemonSpecies.generation.name.split("-")[1].toUpperCase()}
      </p>
    </>
  );
};

export default PokemonDetails;
