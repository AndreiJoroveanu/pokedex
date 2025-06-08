import { useEffect, useRef } from "react";
import { useNavigate, useRouterState, useSearch } from "@tanstack/react-router";

import { orderSearchParams } from "@/utils/orderSearchParams.ts";
import type { AllItemsParams } from "@/types/types.ts";

export const useAllItemsParam = <K extends keyof AllItemsParams>(key: K) => {
  // Determine current route context
  const path = useRouterState({ select: (state) => state.location.pathname });
  const from = path === "/pokedex/pokemon" ? "/pokemon" : "/moves";

  // Store latest search params in a ref to avoid unnecessary rerenders
  const fullSearch = useSearch({ from: `${from}/` });
  const latestSearchRef = useRef(fullSearch);
  useEffect(() => void (latestSearchRef.current = fullSearch), [fullSearch]);

  const navigate = useNavigate({ from });

  // Get specific param's value from URL
  const value = useSearch({
    from: `${from}/`,
    select: (search) => search[key] ?? undefined,
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
    ]);

    void navigate({ search: orderedParams, replace: true });
  };

  return [value, setValue] as const;
};
