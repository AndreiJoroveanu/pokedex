import { useEffect, useState } from "react";
import { Pokemon } from "pokenode-ts";
import { Link } from "react-router-dom";
import { fetchPokemonByName } from "../services/apiService.ts";

const PokemonCard = ({ name }: { name: string }) => {
  const [pokemon, setPokemon] = useState<Pokemon>();

  useEffect(() => {
    fetchPokemonByName(name)
      .then((data) => setPokemon(data))
      .catch((e) => console.error("Error fetching Pokémon", e));
  }, [name]);

  return (
    <>
      {pokemon && (
        <Link to={`/pokemon/${pokemon.species.name}`} state={{ pokemon }}>
          <article className="border border-gray-200 rounded shadow-lg hover:shadow-xl transition-shadow">
            <img
              src={pokemon.sprites.other?.home.front_default?.toString()}
              alt={pokemon.name}
              className="object-contain"
            />

            <div className="p-4">
              <h1 className="capitalize text-xl font-bold">
                {pokemon.id}. {pokemon.species.name}
              </h1>
              <p>
                {pokemon.types.length === 1 ? "Type: " : "Types: "}
                {pokemon.types.map((type) => (
                  <span key={type.type.name} className="capitalize">
                    {" "}
                    {type.type.name}
                  </span>
                ))}
              </p>
            </div>
          </article>
        </Link>
      )}
    </>
  );
};
export default PokemonCard;
