import { useEffect, useState } from "react";
import { Pokemon, PokemonSpecies } from "pokenode-ts";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import {
  fetchPokemonByName,
  fetchPokemonSpeciesByName,
} from "../services/apiService.ts";

const PokemonDetails = () => {
  const { name } = useParams<{ name: string }>();
  const [pokemon, setPokemon] = useState<Pokemon>(useLocation().state?.pokemon);
  const navigate = useNavigate();
  const [pokemonSpecies, setPokemonSpecies] = useState<PokemonSpecies>();

  useEffect(() => {
    if (name) {
      fetchPokemonSpeciesByName(name)
        .then((data) => setPokemonSpecies(data))
        .catch((e) => console.error("Error fetching Pokémon species", e));

      if (!pokemon && pokemonSpecies)
        fetchPokemonByName(pokemonSpecies.varieties[0].pokemon.name)
          .then((data) => setPokemon(data))
          .catch((e) => console.error("Error fetching Pokémon", e));
    }
  }, [name, pokemonSpecies]);

  return (
    <div className="p-4">
      <button
        onClick={() => navigate(-1)}
        className="border px-4 py-2 rounded-full hover:bg-gray-100 shadow-md hover:shadow-lg transition-shadow"
      >
        Back
      </button>

      {/* Image (Pokémon HOME artwork) */}
      <img
        src={pokemon?.sprites.other?.home.front_default?.toString()}
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
        {pokemon?.types.map((type) => (
          <span key={type.type.name} className="capitalize">
            {" "}
            {type.type.name}
          </span>
        ))}
      </p>

      {/* Abilities */}
      <p>
        {pokemon?.abilities.length === 1 ? "Ability: " : "Abilities: "}
        {pokemon?.abilities.map((ability) => (
          <span key={ability.ability.name} className="capitalize">
            {" "}
            {ability.ability.name}
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
