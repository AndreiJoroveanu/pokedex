import { useNavigate, useRouterState, useSearch } from "@tanstack/react-router";

import { orderSearchParams } from "@/utils/orderSearchParams.ts";
import type { AllItemsParams } from "@/types/types.ts";

const searchParamOrder: (keyof AllItemsParams)[] = [
  "generation",
  "type",
  "onlyStarred",
  "q",
  "isGenPanelOpen",
  "isTypePanelOpen",
];

export const useAllItemsParam = <K extends keyof AllItemsParams>(key: K) => {
  // Determine current route context
  const path = useRouterState({ select: (state) => state.location.pathname });
  const fromMap: Record<string, "/pokemon" | "/moves" | undefined> = {
    "/pokedex/pokemon": "/pokemon",
    "/pokedex/moves": "/moves",
  };
  const from = fromMap[path];

  const navigate = useNavigate({ from });

  // Get specific param's value from URL
  const value = useSearch({
    strict: false,
    select: (search): AllItemsParams[K] | undefined => search[key],
  });

  const setValue = (value: AllItemsParams[K]) =>
    void navigate({
      to: ".",
      search: (prev) => ({ ...prev, [key]: value }),
      replace: true,
      // Keep scroll & hide view transition while toggling app panels
      resetScroll: key !== "isGenPanelOpen" && key !== "isTypePanelOpen",
      viewTransition:
        key !== "q" && key !== "isGenPanelOpen" && key !== "isTypePanelOpen",
      // Need to imperatively set the mask as to keep search params in sync
      mask: {
        to: ".",
        search: (prev) =>
          orderSearchParams(
            {
              ...prev,
              [key]: value,
              isGenPanelOpen: undefined,
              isTypePanelOpen: undefined,
            },
            searchParamOrder,
          ),
      },
    });

  return [value, setValue] as const;
};
