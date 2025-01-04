import { useUrl } from "../hooks/useUrl.ts";

const SidebarSearch = () => {
  const { getUrl, setUrl } = useUrl();

  return (
    <input
      type="text"
      placeholder="Search by Pokémon name"
      value={getUrl("q") ?? ""}
      onChange={(e) => setUrl("q", e.target.value)}
      className="w-full rounded-full border py-2 text-center shadow-md transition-shadow hover:shadow-lg focus:shadow-lg"
    />
  );
};
export default SidebarSearch;
