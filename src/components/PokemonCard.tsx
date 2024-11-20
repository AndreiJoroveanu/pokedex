import { useEffect, useState } from "react";
import { Pokemon, PokemonClient } from "pokenode-ts";
import { Link } from "react-router-dom";

const PokemonCard = ({ name }: { name: string }) => {
  const [pokemon, setPokemon] = useState<Pokemon>();

  useEffect(() => {
    const api = new PokemonClient();
    const fetchPokemon = async () => {
      await api
        .getPokemonByName(name)
        .then((data) => setPokemon(data))
        .catch((error) => console.error("Error fetching Pokémon data", error));
    };
    fetchPokemon().then();
  }, [name]);

  return (
    <div>
      {pokemon && (
        <Link to={`/pokemon/${pokemon.species.name}`} state={{ pokemon }}>
          <div className="border border-gray-200 rounded shadow-lg hover:shadow-xl transition-shadow">
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
          </div>
        </Link>
      )}
    </div>
  );
};
export default PokemonCard;
