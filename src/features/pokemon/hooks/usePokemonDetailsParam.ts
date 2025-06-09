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

    updatedParams[key] = value;

    // Reset versionGroup if it exists and the form param is changed
    if (key === "form" && updatedParams.versionGroup)
      delete updatedParams.versionGroup;

    // Order URL Params
    const orderedParams = orderSearchParams(updatedParams, [
      "form",
      "displayShiny",
      "versionGroup",
      "isLearnsetPanelOpen",
      "isDexEntriesPanelOpen",
    ]);

    void navigate({
      search: orderedParams,
      replace: true,
      resetScroll: false,
      // Need to imperatively set the mask as to keep search params in sync
      mask: {
        search: {
          ...orderedParams,
          isLearnsetPanelOpen: undefined,
          isDexEntriesPanelOpen: undefined,
        },
      },
      // Don't display the view transition while toggling app panels
      viewTransition:
        key !== "isLearnsetPanelOpen" && key !== "isDexEntriesPanelOpen",
    });
  };

  return [value, setValue] as const;
};
