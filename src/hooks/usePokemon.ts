import Pokedex, {
  APIResourceList,
  Pokemon,
  PokemonSpecies,
} from "pokedex-promise-v2";
import { useCallback, useEffect, useState } from "react";

const api = new Pokedex({
  protocol: "https",
  hostName: "pokeapi.co",
  versionPath: "/api/v2/",
  cacheLimit: 1000 * 60 * 60 * 24 * 30, // 30 days
  timeout: 20 * 1000, // 20 seconds
});

// interface ItemListType {
//   name: string;
//   url: string;
// }

// const noOfPokemon = 1025;

const useData = <T>(fetcher: () => Promise<T>) => {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<unknown>(null);

  useEffect(() => {
    let ignore = false;

    const fetchData = async () => {
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
  }, [fetcher]);

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
