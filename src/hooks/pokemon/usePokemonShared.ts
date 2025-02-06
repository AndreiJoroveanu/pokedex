import { useEffect, useState } from "react";
import Pokedex from "pokedex-promise-v2";

export const api = new Pokedex({
  protocol: "https",
  hostName: "pokeapi.co",
  versionPath: "/api/v2/",
  cacheLimit: 1000 * 60 * 60 * 24 * 30, // 30 days
  timeout: 20 * 1000, // 20 seconds
});

export const useData = <T>(fetcher: () => Promise<T> | undefined) => {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

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
        if (error instanceof Error) {
          console.error(error.message);
          setError(error.message);
        }

        setData(null);
      } finally {
        setIsLoading(false);
      }
    })();

    return () => void (ignore = true);
  }, [fetcher]);

  return { data, isLoading, error };
};
