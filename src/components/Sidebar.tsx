// import usePokemonStore from "../store/usePokemonStore.ts";
import { useNavigate } from "react-router";

import { usePokemonGens, usePokemonTypes } from "../hooks/usePokemon.ts";
import { useUrl } from "../hooks/useUrl.ts";

import SidebarSearch from "./SidebarSearch.tsx";
import SidebarFilter from "./SidebarFilter.tsx";
import Button from "./Button.tsx";

const Sidebar = () => {
  // const {
  //   currentGen,
  //   setCurrentGen,
  //   currentType,
  //   setCurrentType,
  //   searchQuery,
  //   setSearchQuery,
  //   clearFilters,
  // } = usePokemonStore();

  const navigate = useNavigate();

  const { data: pokemonGens /* isLoading, error */ } = usePokemonGens();
  const { data: pokemonTypes /* isLoading, error */ } = usePokemonTypes();
  const { getUrl } = useUrl();

  return (
    <aside className="mt-24 overflow-y-scroll border-gray-200 p-4 lg:fixed lg:h-[calc(100vh-96px)] lg:w-1/5 lg:border-r">
      <SidebarSearch />

      {pokemonGens && (
        <SidebarFilter
          name="generation"
          values={pokemonGens.map((gen) => gen.name.split("-")[1])}
          renderLabel={(item) => `Gen. ${item.toUpperCase()}`}
        />
      )}

      {pokemonTypes && (
        <SidebarFilter
          name="type"
          values={pokemonTypes.map((type) => type.name)}
          renderLabel={(item) => item}
        />
      )}

      <Button
        onClick={() => navigate("/pokemon")}
        disabled={!getUrl("generation") && !getUrl("type") && !getUrl("q")}
        isSelected={true}
        className="my-4 w-full disabled:cursor-not-allowed disabled:opacity-25"
      >
        Clear Filtering
      </Button>

      {/*<input*/}
      {/*  type="text"*/}
      {/*  placeholder="Search by Pokémon name"*/}
      {/*  value={searchQuery}*/}
      {/*  onChange={(e) => setSearchQuery(e.target.value)}*/}
      {/*  className="w-full rounded-full border py-2 text-center shadow-md transition-shadow hover:shadow-lg focus:shadow-lg"*/}
      {/*/>*/}

      {/*<h2 className="my-2 text-2xl font-bold">Generation Filtering:</h2>*/}
      {/*<div className="grid grid-cols-3 gap-2 lg:grid-cols-2 xl:grid-cols-3">*/}
      {/*  {pokemonGens?.map((gen) => (*/}
      {/*    <Button*/}
      {/*      key={gen.name}*/}
      {/*      onClick={() =>*/}
      {/*        setCurrentGen(currentGen === gen.name ? "" : gen.name)*/}
      {/*      }*/}
      {/*      isSelected={currentGen === gen.name}*/}
      {/*      className="capitalize"*/}
      {/*    >*/}
      {/*      /!* Convert the label from "generation-iv" to "Gen. IV" *!/*/}
      {/*      {`${gen.name.split("-")[0].slice(0, 3)}. ${gen.name.split("-")[1].toUpperCase()}`}*/}
      {/*    </Button>*/}
      {/*  ))}*/}
      {/*</div>*/}

      {/*<h2 className="my-2 text-2xl font-bold">Type Filtering:</h2>*/}
      {/*<div className="grid grid-cols-3 gap-2 lg:grid-cols-2 xl:grid-cols-3">*/}
      {/*  {pokemonTypes?.map((type) => (*/}
      {/*    <Button*/}
      {/*      key={type.name}*/}
      {/*      onClick={() =>*/}
      {/*        setCurrentType(currentType === type.name ? "" : type.name)*/}
      {/*      }*/}
      {/*      isSelected={currentType === type.name}*/}
      {/*      className="capitalize"*/}
      {/*    >*/}
      {/*      {type.name}*/}
      {/*    </Button>*/}
      {/*  ))}*/}
      {/*</div>*/}

      {/*<Button*/}
      {/*  onClick={() => navigate("/pokemon")}*/}
      {/*  disabled={!currentGen && !currentType && !searchQuery}*/}
      {/*  isSelected={true}*/}
      {/*  className="my-4 w-full disabled:cursor-not-allowed disabled:opacity-25"*/}
      {/*>*/}
      {/*  Clear Filtering*/}
      {/*</Button>*/}
    </aside>
  );
};
export default Sidebar;
