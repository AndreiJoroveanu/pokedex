import { useEffect } from "react";
import { useElementScrollRestoration } from "@tanstack/react-router";

export const useScrollRestoration = (isLoaded: boolean) => {
  const scrollEntry = useElementScrollRestoration({ getElement: () => window });

  useEffect(() => {
    if (scrollEntry?.scrollY && isLoaded)
      window.scrollTo(0, scrollEntry?.scrollY);
  }, [isLoaded, scrollEntry?.scrollY]);
};
