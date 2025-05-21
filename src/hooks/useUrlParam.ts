import { useNavigate, useRouterState, useSearch } from "@tanstack/react-router";

import type { AllItemsParams, PokemonDetailsParams } from "@/types/types.ts";

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

export const useAllItemsParam = <K extends keyof AllItemsParams>(key: K) => {
  const path = useRouterState({ select: (state) => state.location.pathname });

  // Determines where to navigate from
  const from = path === "/pokedex/pokemon" ? "/pokemon" : "/moves";

  const search: AllItemsParams = useSearch({ strict: false });
  const navigate = useNavigate({ from });

  // Get the param's value from the URL
  const value = search[key];

  const setValue = (value: AllItemsParams[K]) => {
    const updatedParams = { ...search };

    // Remove URL param if the user toggles an active filter or clears the search input
    if (updatedParams[key] === value || value === "") delete updatedParams[key];
    else updatedParams[key] = value;

    // Order URL Params
    const orderedParams = orderSearchParams(updatedParams, [
      "generation",
      "type",
      "onlyStarred",
      "q",
    ]);

    void navigate({ search: orderedParams, replace: true });
  };

  return [value, setValue] as const;
};

export const usePokemonDetailsParam = <K extends keyof PokemonDetailsParams>(
  key: K,
) => {
  const search: PokemonDetailsParams = useSearch({ strict: false });
  const navigate = useNavigate({ from: "/pokemon/$pokemonId" });

  // Get the param's value from the URL
  const value = search[key];

  const setValue = (value: PokemonDetailsParams[K]) => {
    const updatedParams = { ...search };

    // Remove URL param if the user sets either of the numbered values to 1
    if (updatedParams[key] === true || value === 1) delete updatedParams[key];
    else updatedParams[key] = value;

    // Reset versionGroup if it exists and the form param is changed
    if (key === "form" && search.versionGroup)
      delete updatedParams.versionGroup;

    // Order URL Params
    const orderedParams = orderSearchParams(updatedParams, [
      "form",
      "displayShiny",
      "versionGroup",
    ]);

    void navigate({
      search: orderedParams,
      replace: true,
      resetScroll: false,
    });
  };

  return [value, setValue] as const;
};
