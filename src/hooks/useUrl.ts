import { useSearchParams } from "react-router";

export const useUrl = (name: string) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const url = searchParams.get(name);

  const updateUrl = (value: string) => {
    searchParams.set(name, value);
    if (searchParams.get("page")) searchParams.set("page", "1");

    setSearchParams(searchParams);
  };

  return { url, updateUrl };
};
