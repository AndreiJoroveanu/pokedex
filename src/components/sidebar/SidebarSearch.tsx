import { useEffect, useState } from "react";

import { useAllItemsParam } from "@/hooks/useAllItemsParam.ts";

const SidebarSearch = ({ itemType }: { itemType: string }) => {
  const [queryParam, setQueryParam] = useAllItemsParam("q");
  const [query, setQuery] = useState(queryParam ?? "");

  // Clear the search bar when the URL params are reset
  useEffect(() => {
    if (!queryParam) setQuery("");
  }, [queryParam]);

  const handleChange = (input: string) => {
    setQuery(input);
    setQueryParam(input);
  };

  return (
    <input
      type="text"
      placeholder={`Search by ${itemType} name`}
      value={query}
      onChange={(e) => handleChange(e.target.value)}
      className="w-full rounded-xl bg-slate-200 py-2 text-center shadow-md transition-[background-color_shadow] hover:bg-slate-300 hover:shadow-lg focus:shadow-lg dark:bg-slate-800 dark:shadow-none dark:hover:bg-slate-700 dark:hover:shadow-none dark:focus:shadow-none"
    />
  );
};
export default SidebarSearch;
