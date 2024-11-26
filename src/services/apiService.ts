import Pokedex from "pokedex-promise-v2";

const api = new Pokedex({
  protocol: "https",
  hostName: "pokeapi.co",
  versionPath: "/api/v2/",
  cacheLimit: 1000 * 60 * 60 * 24 * 30, // 1 month
  timeout: 20 * 1000, // 20 seconds
});

export const fetchPokemonByName = async (name: string) =>
  await api.getPokemonByName(name);

export const fetchPokemonById = async (id: number) =>
  await api.getResource(`/api/v2/pokemon/${id}`);

export const fetchPokemonSpeciesByName = async (name: string) =>
  await api.getPokemonSpeciesByName(name);

// Currently unused, uncomment to use
// export const fetchPokemonSpeciesById = async (id: number) =>
//   await api.getResource(`/api/v2/pokemon-species/${id}`);

export const fetchPokemonGens = async () =>
  (await api.getGenerationsList()).results;

export const fetchPokemonTypes = async () =>
  (await api.getTypesList({ limit: 18 })).results;

export const fetchAllPokemonByGen = async (gen: string) =>
  (await api.getGenerationByName(gen)).pokemon_species
    .map((p) =>
      Number(
        p.url
          .split("https://pokeapi.co/api/v2/pokemon-species/")[1]
          .split("/")[0],
      ),
    )
    .sort((a, b) => a - b)
    .filter((url) => url < 10000);

export const fetchAllPokemonByType = async (type: string) =>
  (await api.getTypeByName(type)).pokemon
    .map((p) =>
      Number(
        p.pokemon.url
          .split("https://pokeapi.co/api/v2/pokemon/")[1]
          .split("/")[0],
      ),
    )
    .filter((url) => url < 10000);

// Old stuff, currently unused
// export const fetchAllPokemon = async () =>
//   (await api.getPokemonsList({ limit: 1025 })).results;
//
// export const fetchAllPokemonByType = async (type: string) =>
//   (await api.getTypeByName(type)).pokemon
//     .map((p) => p.pokemon)
//     .filter(
//       (p) =>
//         Number(
//           p.url.split("https://pokeapi.co/api/v2/pokemon/")[1].split("/")[0],
//         ) < 10000,
//     );
