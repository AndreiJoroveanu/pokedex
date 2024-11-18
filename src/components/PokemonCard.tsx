import { useEffect, useState } from "react";
import { Pokemon, PokemonClient } from "pokenode-ts";
import { Link } from "react-router-dom";

export default ({ index }: { index: number }) => {
  const [pokemon, setPokemon] = useState<Pokemon>();

  useEffect(() => {
    const api = new PokemonClient();
    const fetchPokemon = async () => {
      await api
        .getPokemonById(index)
        .then((data) => setPokemon(data))
        .catch((error) => console.error(error));
    };
    fetchPokemon().then();
  }, []);

  return (
    <div>
      {pokemon && (
        <div className="border border-gray-200 flex flex-col justify-between rounded shadow-lg hover:shadow-xl transition-shadow">
          <Link to={`/pokemon/${pokemon.id}`}>
            <img
              src={pokemon?.sprites.other?.[
                "official-artwork"
              ].front_default?.toString()}
              alt={pokemon?.name}
              className="object-contain"
            />

            <div className="p-4">
              <h1 className="capitalize text-2xl font-bold">
                {pokemon?.id}. {pokemon?.species.name}
              </h1>
              <p>
                {pokemon?.types.length === 1 ? "Type: " : "Types: "}
                {pokemon?.types.map((type, index) => (
                  <span key={index} className="capitalize">
                    {" "}
                    {type?.type.name}
                  </span>
                ))}
              </p>
            </div>
          </Link>
        </div>
      )}
    </div>
  );
};
