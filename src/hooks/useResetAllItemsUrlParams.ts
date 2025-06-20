import { useNavigate, useRouterState, useSearch } from "@tanstack/react-router";

import type { AllItemsParams } from "@/types/types.ts";

export const useResetAllItemsUrlParams = () => {
  // Determines where to navigate from
  const path = useRouterState({ select: (state) => state.location.pathname });
  const from =
    path === "/pokedex/pokemon"
      ? "/pokemon"
      : path === "/pokedex/moves"
        ? "/moves"
        : undefined;

  const search: Partial<AllItemsParams> = useSearch({ strict: false });
  const navigate = useNavigate({ from });

  const reset = () =>
    void navigate({
      to: ".",
      search: (prev) => ({
        // Reset most search params but keep panel state
        isGenPanelOpen: prev.isGenPanelOpen,
        isTypePanelOpen: prev.isTypePanelOpen,
      }),
      // Mask the panel states
      mask: { to: ".", search: {} },
      replace: true,
    });

  // Determine if any filter param is active
  const canReset = Boolean(
    search.generation ?? search.type ?? search.onlyStarred ?? search.q,
  );

  return { reset, canReset };
};
