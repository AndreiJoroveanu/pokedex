import { useEffect, useState } from "react";
import { Pokemon, PokemonClient } from "pokenode-ts";

export default ({ index }: { index: number }) => {
  const [pokemon, setPokemon] = useState<Pokemon>();
  const api = new PokemonClient();

  useEffect(() => {
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
      <p>
        {index}.{" "}
        {pokemon ? (
          <span>
            <span className="capitalize">{pokemon?.name}</span>, types:
            {pokemon?.types.map((type, index) => (
              <span key={index} className="capitalize">
                {" "}
                {type?.type.name}
              </span>
            ))}
          </span>
        ) : (
          <span>Loading...</span>
        )}
      </p>
    </div>
  );
};
