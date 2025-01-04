import { useSearchParams } from "react-router";

export const useUrl = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const getUrl = (name: string) => searchParams.get(name);

  const setUrl = (name: string, value: string) => {
    // Resets URL param if the user clicks an active category or clears the search input
    if (getUrl(name) === value || value === "") searchParams.delete(name);
    else searchParams.set(name, value);

    // Reset page if it exists and another URL param is changed
    if (name !== "page" && searchParams.get("page"))
      searchParams.delete("page");

    // Order URL params
    const orderedParams = new URLSearchParams();
    const paramsOrder = ["page", "generation", "type", "q"];

    paramsOrder.map((name) => {
      const value = searchParams.get(name);
      if (value) orderedParams.set(name, value);
    });

    setSearchParams(orderedParams);
  };

  return { getUrl, setUrl };
};
