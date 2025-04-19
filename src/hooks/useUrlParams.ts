import { useNavigate, useRouterState, useSearch } from "@tanstack/react-router";

import { AllItemsParams, PokemonDetailsParams } from "@/types/types.ts";

const orderSearchParams = <T extends object>(
  rawParams: Partial<T>,
  order: (keyof T)[],
): Partial<T> => {
  const orderedParams: Partial<T> = {};

  order.forEach((key) => {
    const value = rawParams[key];
    if (value !== undefined) orderedParams[key] = value;
  });

  return orderedParams;
};

export const useAllItemsParams = () => {
  const path = useRouterState({ select: (state) => state.location.pathname });

  // Determines where to navigate from
  const from = path.startsWith("/pokedex/pokemon") ? "/pokemon" : "/moves";

  const search: AllItemsParams = useSearch({ strict: false });
  const navigate = useNavigate({ from });

  // Get a specific param's value from the URL
  const getUrlParam = <K extends keyof AllItemsParams>(
    key: K,
  ): AllItemsParams[K] => search[key];

  const setUrlParam = (key: keyof typeof search, value: string | true) => {
    const updatedParams = { ...search };

    // Remove URL param if the user toggles an active filter or clears the search input
    if (updatedParams[key] === value || !value) delete updatedParams[key];
    else {
      // Type checking for TypeScript
      if (key === "onlyStarred" && value === true) updatedParams[key] = value;
      else if (key !== "onlyStarred" && typeof value === "string")
        updatedParams[key] = value;
    }

    // Order URL params
    const orderedParams = orderSearchParams<AllItemsParams>(updatedParams, [
      "generation",
      "type",
      "onlyStarred",
      "q",
    ]);

    void navigate({ search: orderedParams, replace: true });
  };

  const resetUrlParams = () => void navigate({ search: {}, replace: true });

  return { getUrlParam, setUrlParam, resetUrlParams };
};

export const usePokemonDetailsParams = () => {
  const search: PokemonDetailsParams = useSearch({ strict: false });
  const navigate = useNavigate({ from: "/pokemon/$pokemonId" });

  const getUrlParam = <K extends keyof PokemonDetailsParams>(
    key: K,
  ): PokemonDetailsParams[K] => search[key];

  const setUrlParam = (key: keyof typeof search, value: number | true) => {
    const updatedParams = { ...search };

    // Resets URL param if the user sets either of the numbered values to the first one in the list
    if (updatedParams[key] === true || value === 1) delete updatedParams[key];
    else {
      // Type checking for TypeScript
      if (key === "displayShiny" && value === true) updatedParams[key] = value;
      else if (key !== "displayShiny" && typeof value === "number")
        updatedParams[key] = value;
    }

    // Reset versionGroup if it exists and the form param is changed
    if (key === "form" && updatedParams.versionGroup)
      delete updatedParams.versionGroup;

    // Order URL params
    const orderedParams = orderSearchParams<PokemonDetailsParams>(
      updatedParams,
      ["form", "displayShiny", "versionGroup"],
    );

    void navigate({ search: orderedParams, replace: true, resetScroll: false });
  };

  return { getUrlParam, setUrlParam };
};
