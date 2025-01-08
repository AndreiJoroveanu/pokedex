import { useState } from "react";

import { useUrl } from "../hooks/useUrl.ts";

const SidebarSearch = () => {
  const [search, setSearch] = useState("");
  const { setUrl } = useUrl();

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
      className="w-full rounded-full border py-2 text-center shadow-md transition-shadow hover:shadow-lg focus:shadow-lg"
    />
  );
};
export default SidebarSearch;
