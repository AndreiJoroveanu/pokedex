import Pokedex, { Pokemon, PokemonSpecies } from "pokedex-promise-v2";
import { useEffect, useState } from "react";

const api = new Pokedex({
  protocol: "https",
  hostName: "pokeapi.co",
  versionPath: "/api/v2/",
  cacheLimit: 1000 * 60 * 60 * 24 * 30, // 30 days
  timeout: 20 * 1000, // 20 seconds
});

// const noOfPokemon = 1025;

export const usePokemon = (identifier: string | number | undefined) => {
  const [data, setData] = useState<Pokemon | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<unknown>(null);

  useEffect(() => {
    let ignore = false;

    const fetchPokemon = async () => {
      try {
        setIsLoading(true);
        setError(null);

        const data = await api.getResource(`/api/v2/pokemon/${identifier}`);
        if (!ignore) setData(data);
        setError(null);
      } catch (error) {
        console.error("Error fetching Pokémon", error);
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    if (identifier) void fetchPokemon();

    return () => {
      ignore = true;
    };
  }, [identifier]);

  return { data, isLoading, error };
};

export const usePokemonSpecies = (identifier: string | number | undefined) => {
  const [data, setData] = useState<PokemonSpecies | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<unknown>(null);

  useEffect(() => {
    let ignore = false;

    const fetchPokemonSpecies = async () => {
      try {
        setIsLoading(true);
        setError(null);

        const data = await api.getResource(
          `/api/v2/pokemon-species/${identifier}`,
        );
        if (!ignore) setData(data);
        setError(null);
      } catch (error) {
        console.error("Error fetching Pokémon Species", error);
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    if (identifier) void fetchPokemonSpecies();

    return () => {
      ignore = true;
    };
  }, [identifier]);

  return { data, isLoading, error };
};

// export const usePokemonSpecies = (identifier: string | number | undefined) => {
//   const [data, setData] = useState<PokemonSpecies | null>(null);
//
//   useEffect(() => {
//     let ignore = false;
//
//     api
//       .getResource(`/api/v2/pokemon-species/${identifier}`)
//       .then((data: PokemonSpecies) => {
//         if (!ignore) setData(data);
//       })
//       .catch((e) => console.error("Error fetching Pokémon", e));
//
//     return () => {
//       ignore = true;
//     };
//   }, [identifier]);
//
//   return data;
// };
