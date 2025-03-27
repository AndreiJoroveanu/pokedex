import { useEffect, useState } from "react";

import { useAllItemsParams } from "@/hooks/useUrlParams.ts";

const SidebarSearch = ({ itemType }: { itemType: string }) => {
  const { getUrlParam, setUrlParam } = useAllItemsParams();
  const currentSearch = getUrlParam("q") ?? "";

  const [search, setSearch] = useState(currentSearch);

  // Clear the search bar when the URL params are reset
  useEffect(() => {
    if (!currentSearch) setSearch("");
  }, [currentSearch]);

  const handleChange = (input: string) => {
    setSearch(input);
    setUrlParam("q", input);
  };

  return (
    <input
      type="text"
      placeholder={`Search by ${itemType} name`}
      value={search}
      onChange={(e) => handleChange(e.target.value)}
      className="w-full rounded-xl bg-slate-200 py-2 text-center shadow-md transition-[background-color_shadow] hover:bg-slate-300 hover:shadow-lg focus:shadow-lg dark:bg-slate-800 dark:shadow-none dark:hover:bg-slate-700 dark:hover:shadow-none dark:focus:shadow-none"
    />
  );
};
export default SidebarSearch;
