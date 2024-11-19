import { useEffect, useState } from "react";
import { Pokemon, PokemonClient, PokemonSpecies } from "pokenode-ts";
import { useNavigate, useParams } from "react-router-dom";

const PokemonDetails = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [pokemon, setPokemon] = useState<Pokemon>();
  const [pokemonSpecies, setPokemonSpecies] = useState<PokemonSpecies>();

  useEffect(() => {
    const api = new PokemonClient();
    const fetchPokemon = async () => {
      await api
        .getPokemonById(Number(id))
        .then((data) => setPokemon(data))
        .catch((error) => console.error("Error fetching Pokémon data", error));

      await api
        .getPokemonSpeciesById(Number(id))
        .then((data) => setPokemonSpecies(data))
        .catch((error) =>
          console.error("Error fetching Pokémon species data", error),
        );
    };
    fetchPokemon().then();
  });

  return (
    <div className="p-4">
      <button
        onClick={() => navigate(-1)}
        className="border px-4 py-2 rounded-full hover:bg-gray-100 shadow-md hover:shadow-lg transition-shadow"
      >
        Back
      </button>

      {/* Image (official artwork) */}
      <img
        src={pokemon?.sprites.other?.[
          "official-artwork"
        ].front_default?.toString()}
        alt={pokemon?.name}
        className="object-contain"
      />

      {/* Name */}
      <h1 className="capitalize text-2xl font-bold">
        {pokemon?.id}. {pokemon?.species.name}
      </h1>

      {/* Types */}
      <p>
        {pokemon?.types.length === 1 ? "Type: " : "Types: "}
        {pokemon?.types.map((type, index) => (
          <span key={index} className="capitalize">
            {" "}
            {type?.type.name}
          </span>
        ))}
      </p>

      {/* Abilities */}
      <p>
        {pokemon?.abilities.length === 1 ? "Ability: " : "Abilities: "}
        {pokemon?.abilities.map((ability, index) => (
          <span key={index} className="capitalize">
            {" "}
            {ability?.ability.name}
          </span>
        ))}
      </p>

      {/* Dex Description */}
      <p>{pokemonSpecies?.flavor_text_entries[0].flavor_text}</p>

      {/* Generation */}
      <p className="capitalize">
        {pokemonSpecies?.generation.name.split("-")[0]}{" "}
        {pokemonSpecies?.generation.name.split("-")[1].toUpperCase()}
      </p>
    </div>
  );
};
export default PokemonDetails;
