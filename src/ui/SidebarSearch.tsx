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
      className="w-full rounded-full border border-slate-400/70 bg-slate-100 py-2 text-center shadow-md transition-colors transition-shadow hover:shadow-lg focus:shadow-lg dark:bg-slate-800"
    />
  );
};
export default SidebarSearch;
