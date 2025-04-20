import { useNavigate, useRouterState, useSearch } from "@tanstack/react-router";

import { AllItemsParams } from "@/types/types.ts";

export const useResetAllItemsUrlParams = () => {
  const path = useRouterState({ select: (state) => state.location.pathname });

  // Determines where to navigate from
  const from = path.startsWith("/pokedex/pokemon") ? "/pokemon" : "/moves";

  const search: Partial<AllItemsParams> = useSearch({ strict: false });
  const navigate = useNavigate({ from });

  const reset = () => void navigate({ search: {}, replace: true });

  // Determine if any filter param is active
  const canReset = Boolean(
    search.generation ?? search.type ?? search.onlyStarred ?? search.q,
  );

  return { reset, canReset };
};
