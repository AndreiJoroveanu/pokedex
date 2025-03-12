import { useSearchParams } from "react-router";

import { resetScroll } from "@/hooks/useScrollRestoration.ts";

export const useAllItemsParams = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const getUrlParam = (name: string) => searchParams.get(name);

  const setUrlParam = (name: string, value: string) => {
    // Resets URL param if the user clicks an active category or clears the search input
    if (getUrlParam(name) === value || value === "") searchParams.delete(name);
    else searchParams.set(name, value);

    // Reset sessionStorage value for useScrollRestoration hook
    resetScroll();

    // Order URL params
    const orderedParams = new URLSearchParams();
    const paramsOrder = ["generation", "type", "onlyStarred", "q"];

    paramsOrder.map((name) => {
      const value = searchParams.get(name);
      if (value) orderedParams.set(name, value);
    });

    setSearchParams(orderedParams);
  };

  const resetUrlParams = () => {
    resetScroll();
    setSearchParams();
  };

  return { getUrlParam, setUrlParam, resetUrlParams };
};

export const usePokemonDetailsParams = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const getUrlParam = (name: string) => searchParams.get(name);

  const setUrlParam = (name: string, value: string) => {
    // Resets URL param if the user sets either of the numbered values to the first one in the list
    if (getUrlParam(name) === value || value === "1") searchParams.delete(name);
    else searchParams.set(name, value);

    // Reset versionGroup if it exists and the form param is changed
    if (name === "form" && searchParams.get("versionGroup"))
      searchParams.delete("versionGroup");

    // Order URL params
    const orderedParams = new URLSearchParams();
    const paramsOrder = ["form", "displayShiny", "versionGroup"];

    paramsOrder.map((name) => {
      const value = searchParams.get(name);
      if (value) orderedParams.set(name, value);
    });

    setSearchParams(orderedParams, {
      replace: true,
      preventScrollReset: true,
    });
  };

  return { getUrlParam, setUrlParam };
};
