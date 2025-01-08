import Sidebar from "../ui/Sidebar.tsx";
import PokemonList from "../features/pokemon/PokemonList.tsx";

const AllPokemon = () => (
  <div className="relative pt-24">
    <Sidebar />
    <PokemonList />
  </div>
);
export default AllPokemon;
