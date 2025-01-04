import { useSearchParams } from "react-router";

export const useUrl = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const getUrl = (name: string) => searchParams.get(name);

  const setUrl = (name: string, value: string) => {
    if (getUrl(name) === value || value === "") searchParams.delete(name);
    else searchParams.set(name, value);

    if (searchParams.get("page")) searchParams.set("page", "1");

    setSearchParams(searchParams);
  };

  return { getUrl, setUrl };
};
