import { useEffect, useRef } from "react";
import { useNavigate, useRouterState, useSearch } from "@tanstack/react-router";

import { orderSearchParams } from "@/utils/orderSearchParams.ts";
import type { AllItemsParams } from "@/types/types.ts";

export const useAllItemsParam = <K extends keyof AllItemsParams>(key: K) => {
  // Determine current route context
  const path = useRouterState({ select: (state) => state.location.pathname });
  const from =
    path === "/pokedex/pokemon"
      ? "/pokemon"
      : path === "/pokedex/moves"
        ? "/moves"
        : undefined;

  // Store latest search params in a ref to avoid unnecessary rerenders
  const fullSearch: Partial<AllItemsParams> = useSearch({ strict: false });
  const latestSearchRef = useRef(fullSearch);
  useEffect(() => void (latestSearchRef.current = fullSearch), [fullSearch]);

  const navigate = useNavigate({ from });

  // Get specific param's value from URL
  const value = useSearch({
    strict: false,
    select: (search): AllItemsParams[K] | undefined => search[key],
  });

  const setValue = (value: AllItemsParams[K]) => {
    const updatedParams = { ...latestSearchRef.current };

    updatedParams[key] = value;

    // Order URL Params
    const orderedParams = orderSearchParams(updatedParams, [
      "generation",
      "type",
      "onlyStarred",
      "q",
      "isGenPanelOpen",
      "isTypePanelOpen",
    ]);

    void navigate({
      to: ".",
      search: orderedParams,
      replace: true,
      // Need to imperatively set the mask as to keep search params in sync
      mask: {
        to: ".",
        search: {
          ...orderedParams,
          isGenPanelOpen: undefined,
          isTypePanelOpen: undefined,
        },
      },
      // Don't display the view transition while toggling app panels
      viewTransition: key !== "isGenPanelOpen" && key !== "isTypePanelOpen",
    });
  };

  return [value, setValue] as const;
};
