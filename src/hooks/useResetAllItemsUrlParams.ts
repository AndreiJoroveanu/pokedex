import { useNavigate, useRouterState, useSearch } from "@tanstack/react-router";

export const useResetAllItemsUrlParams = () => {
  // Determine current route context
  const path = useRouterState({ select: (state) => state.location.pathname });
  const fromMap: Record<string, "/pokemon" | "/moves" | undefined> = {
    "/pokedex/pokemon": "/pokemon",
    "/pokedex/moves": "/moves",
  };
  const from = fromMap[path];

  const navigate = useNavigate({ from });

  // Determine if any filter param is active
  const canReset = useSearch({
    strict: false,
    select: (search) =>
      Boolean(search.generation) ||
      Boolean(search.type) ||
      Boolean(search.onlyStarred) ||
      Boolean(search.q),
  });

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

  return { canReset, reset };
};
