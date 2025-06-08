import { useEffect, useRef } from "react";
import { useNavigate, useSearch } from "@tanstack/react-router";

import { orderSearchParams } from "@/utils/orderSearchParams.ts";
import type { PokemonDetailsParams } from "@/types/types.ts";

const pokemonDetailsUrl = "/pokemon/$pokemonId";

export const usePokemonDetailsParam = <K extends keyof PokemonDetailsParams>(
  key: K,
) => {
  // Store latest search params in a ref to avoid unnecessary rerenders
  const fullSearch = useSearch({ from: pokemonDetailsUrl });
  const latestSearchRef = useRef(fullSearch);
  useEffect(() => void (latestSearchRef.current = fullSearch), [fullSearch]);

  const navigate = useNavigate({ from: pokemonDetailsUrl });

  // Get specific param's value from URL
  const value = useSearch({
    from: pokemonDetailsUrl,
    select: (search) => search[key] ?? undefined,
  });

  const setValue = (value: PokemonDetailsParams[K]) => {
    const updatedParams = { ...latestSearchRef.current };

    // Remove URL param if the user sets either of the numbered values to 1
    if (updatedParams[key] === true || value === 1) delete updatedParams[key];
    else updatedParams[key] = value;

    // Reset versionGroup if it exists and the form param is changed
    if (key === "form" && updatedParams.versionGroup)
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
