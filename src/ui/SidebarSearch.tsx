import { useEffect, useState } from "react";

import { useUrl } from "../hooks/useUrl.ts";

const SidebarSearch = () => {
  const [search, setSearch] = useState("");
  const { getUrl, setUrl } = useUrl();

  // This syncs the search field value when returning from another page
  useEffect(() => setSearch(getUrl("q") ?? ""), [getUrl]);

  const handleChange = (input: string) => {
    setSearch(input);
    setUrl("q", input);
  };

  return (
    <input
      type="text"
      placeholder="Search by Pokémon name"
      value={search}
      onChange={(e) => handleChange(e.target.value)}
      className="w-full rounded-xl border border-slate-400/70 bg-slate-100 py-2 text-center shadow-md transition-colors hover:bg-slate-200/75 hover:shadow-lg focus:shadow-lg dark:bg-slate-800 dark:shadow-none dark:hover:bg-slate-700/75 dark:hover:shadow-none dark:focus:shadow-none"
    />
  );
};
export default SidebarSearch;
