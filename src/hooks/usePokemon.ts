import { useCallback, useEffect, useMemo, useState } from "react";
import Pokedex, {
  APIResourceList,
  Generation,
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

const useData = <T>(fetcher: () => Promise<T>, cancel: boolean = false) => {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<unknown>(null);

  useEffect(() => {
    let ignore = false;

    const fetchData = async () => {
      if (cancel) return setData(null);

      try {
        setIsLoading(true);
        setError(null);

        const response = await fetcher();
        if (!ignore) setData(response);
        setError(null);
      } catch (error) {
        console.error(error);
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    void fetchData();

    return () => {
      ignore = true;
    };
  }, [cancel, fetcher]);

  return { data, isLoading, error };
};

export const usePokemon = (identifier: string | number | undefined) => {
  const fetcher = useCallback(
    () => api.getResource(`/api/v2/pokemon/${identifier}`),
    [identifier],
  );
  const { data, isLoading, error } = useData<Pokemon>(fetcher);

  return { data, isLoading, error };
};

export const usePokemonSpecies = (identifier: string | number | undefined) => {
  const fetcher = useCallback(
    () => api.getResource(`/api/v2/pokemon-species/${identifier}`),
    [identifier],
  );
  const { data, isLoading, error } = useData<PokemonSpecies>(fetcher);

  return { data, isLoading, error };
};

export const usePokemonGens = () => {
  const fetcher = useCallback(() => api.getGenerationsList(), []);
  const { data, isLoading, error } = useData<APIResourceList>(fetcher);

  return { data: data?.results, isLoading, error };
};

export const usePokemonTypes = () => {
  const fetcher = useCallback(() => api.getTypesList({ limit: 18 }), []);
  const { data, isLoading, error } = useData<APIResourceList>(fetcher);

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
  const { data, isLoading, error } = useData<APIResourceList>(fetcher);

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
    return gen
      ? api.getGenerationByName(gen)
      : Promise.reject("No gen selected");
  }, [gen]);
  const { data, isLoading, error } = useData<Generation>(fetcher, !gen);

  const transformedData = useMemo(() => {
    return (
      data?.pokemon_species
        .map((p) => ({
          id: Number(
            p.url
              .split("https://pokeapi.co/api/v2/pokemon-species/")[1]
              .split("/")[0],
          ),
          name: p.name,
        }))
        .filter((p) => p.id < 10000) || []
    );
  }, [data]);

  return { data: transformedData, isLoading, error };
};

export const useAllPokemonByType = (type: string | undefined) => {
  const fetcher = useCallback(() => {
    return type ? api.getTypeByName(type) : Promise.reject("No type selected");
  }, [type]);
  const { data, isLoading, error } = useData<Type>(fetcher, !type);

  const transformedData = useMemo(() => {
    return (
      data?.pokemon
        .map((p) => ({
          id: Number(
            p.pokemon.url
              .split("https://pokeapi.co/api/v2/pokemon/")[1]
              .split("/")[0],
          ),
          name: p.pokemon.name,
        }))
        .filter((p) => p.id < 10000) || []
    );
  }, [data]);

  return { data: transformedData, isLoading, error };
};
