import { useCallback, useEffect, useMemo, useState } from "react";
import Pokedex, {
  Generation,
  NamedAPIResourceList,
  Pokemon,
  PokemonSpecies,
  Type,
} from "pokedex-promise-v2";

const api = new Pokedex({
  protocol: "https",
  hostName: "pokeapi.co",
  versionPath: "/api/v2/",
  cacheLimit: 1000 * 60 * 60 * 24 * 30, // 30 days
  timeout: 20 * 1000, // 20 seconds
});

const useData = <T>(fetcher: () => Promise<T> | undefined) => {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<unknown>(null);

  useEffect(() => {
    let ignore = false;

    void (async () => {
      try {
        setIsLoading(true);
        setError(null);

        const response = await fetcher();
        if (!ignore && response) setData(response);
        setError(null);
      } catch (error) {
        console.error(error);
        setError(error);
      } finally {
        setIsLoading(false);
      }
    })();

    return () => {
      ignore = true;
    };
  }, [fetcher]);

  return { data, isLoading, error };
};

export const usePokemon = (identifier: string | number) => {
  const fetcher = useCallback(
    () => api.getPokemonByName(identifier),
    [identifier],
  );
  const { data, isLoading, error } = useData<Pokemon>(fetcher);

  return { data, isLoading, error };
};

export const usePokemonSpecies = (identifier: string | number) => {
  const fetcher = useCallback(
    () => api.getPokemonSpeciesByName(identifier),
    [identifier],
  );
  const { data, isLoading, error } = useData<PokemonSpecies>(fetcher);

  return { data, isLoading, error };
};

export const usePokemonGens = () => {
  const fetcher = useCallback(() => api.getGenerationsList(), []);
  const { data, isLoading, error } = useData<NamedAPIResourceList>(fetcher);

  return { data: data?.results, isLoading, error };
};

export const usePokemonTypes = () => {
  const fetcher = useCallback(() => api.getTypesList({ limit: 18 }), []);
  const { data, isLoading, error } = useData<NamedAPIResourceList>(fetcher);

  return { data: data?.results, isLoading, error };
};

// export const useAllPokemon = () => {
//   const fetcher = useCallback(() => api.getPokemonsList({ limit: 1025 }), []);
//   const { data, isLoading, error } = useData<APIResourceList>(fetcher);
//
//   const transformedData = useMemo(() => {
//     return data?.results.map((p) => ({
//       id: Number(
//         p.url.split("https://pokeapi.co/api/v2/pokemon/")[1].split("/")[0],
//       ),
//       name: p.name,
//     }));
//   }, [data]);
//
//   return { data: transformedData, isLoading, error };
// };

export const useAllPokemonSpecies = () => {
  const fetcher = useCallback(() => api.getPokemonSpeciesList(), []);
  const { data, isLoading, error } = useData<NamedAPIResourceList>(fetcher);

  const transformedData = useMemo(() => {
    return data?.results.map((p) => ({
      id: Number(
        p.url
          .split("https://pokeapi.co/api/v2/pokemon-species/")[1]
          .split("/")[0],
      ),
      name: p.name,
    }));
  }, [data]);

  return { data: transformedData, isLoading, error };
};

export const useAllPokemonByGen = (gen: string | undefined) => {
  const fetcher = useCallback(() => {
    if (gen) return api.getGenerationByName(`generation-${gen}`);
  }, [gen]);
  const { data, isLoading, error } = useData<Generation>(fetcher);

  const transformedData = useMemo(() => {
    return gen
      ? (data?.pokemon_species
          .map((p) => ({
            id: Number(
              p.url
                .split("https://pokeapi.co/api/v2/pokemon-species/")[1]
                .split("/")[0],
            ),
            name: p.name,
          }))
          .filter((p) => p.id < 10000)
          .sort((p1, p2) => p1.id - p2.id) ?? [])
      : [];
  }, [data?.pokemon_species, gen]);

  return { data: transformedData, isLoading, error };
};

export const useAllPokemonByType = (type: string | undefined) => {
  const fetcher = useCallback(() => {
    if (type) return api.getTypeByName(type);
  }, [type]);
  const { data, isLoading, error } = useData<Type>(fetcher);

  const transformedData = useMemo(() => {
    return type
      ? (data?.pokemon
          .map((p) => ({
            id: Number(
              p.pokemon.url
                .split("https://pokeapi.co/api/v2/pokemon/")[1]
                .split("/")[0],
            ),
            name: p.pokemon.name,
          }))
          .filter((p) => p.id < 10000) ?? [])
      : [];
  }, [data?.pokemon, type]);

  return { data: transformedData, isLoading, error };
};
