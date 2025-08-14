import { useNavigate, useSearch } from "@tanstack/react-router";

import type { MoveDetailsParams } from "@/types/types.ts";

const moveDetailsUrl = "/moves/$moveId";

export const useMoveDetailsParam = <K extends keyof MoveDetailsParams>(
  key: K,
) => {
  const navigate = useNavigate({ from: moveDetailsUrl });

  // Get specific param's value from URL
  const value = useSearch({
    from: moveDetailsUrl,
    select: (search) => search[key] ?? undefined,
  });

  // Setter function temporarily simplified as there is currently only one search param on this page
  const setValue = (value: MoveDetailsParams[K]) =>
    void navigate({
      to: ".",
      search: { isDescriptionsPanelOpen: value },
      replace: true,
      resetScroll: false,
      viewTransition: false,
      mask: { to: "." },
    });

  return [value, setValue] as const;
};
