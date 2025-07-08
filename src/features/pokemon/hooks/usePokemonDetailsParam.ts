import { useNavigate, useSearch } from "@tanstack/react-router";

import { orderSearchParams } from "@/utils/orderSearchParams.ts";
import type { PokemonDetailsParams } from "@/types/types.ts";

const pokemonDetailsUrl = "/pokemon/$pokemonId";

const searchParamOrder: (keyof PokemonDetailsParams)[] = [
  "form",
  "displayShiny",
  "versionGroup",
  "isDexEntriesPanelOpen",
  "isLearnsetPanelOpen",
  "isLocationsPanelOpen",
];

export const usePokemonDetailsParam = <K extends keyof PokemonDetailsParams>(
  key: K,
) => {
  const navigate = useNavigate({ from: pokemonDetailsUrl });

  // Get specific param's value from URL
  const value = useSearch({
    from: pokemonDetailsUrl,
    select: (search) => search[key] ?? undefined,
  });

  const setValue = (value: PokemonDetailsParams[K]) =>
    void navigate({
      to: ".",
      search: (prev) => ({
        ...prev,
        // Reset versionGroup if it exists and the form param has changed
        versionGroup: key === "form" ? undefined : prev.versionGroup,
        [key]: value,
      }),
      replace: true,
      resetScroll: false,
      // Hide view transition while toggling app panels
      viewTransition:
        key !== "isDexEntriesPanelOpen" &&
        key !== "isLearnsetPanelOpen" &&
        key !== "isLocationsPanelOpen",
      // Need to imperatively set the mask as to keep search params in sync
      mask: {
        to: ".",
        search: (prev) =>
          orderSearchParams(
            {
              ...prev,
              // Reset versionGroup if it exists and the form param has changed
              versionGroup: key === "form" ? undefined : prev.versionGroup,
              [key]: value,
              isDexEntriesPanelOpen: undefined,
              isLearnsetPanelOpen: undefined,
              isLocationsPanelOpen: undefined,
            },
            searchParamOrder,
          ),
      },
    });

  return [value, setValue] as const;
};
