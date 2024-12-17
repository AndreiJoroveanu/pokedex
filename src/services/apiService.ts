import Pokedex from "pokedex-promise-v2";

const api = new Pokedex({
  protocol: "https",
  hostName: "pokeapi.co",
  versionPath: "/api/v2/",
  cacheLimit: 1000 * 60 * 60 * 24 * 30, // 1 month
  timeout: 20 * 1000, // 20 seconds
});

const noOfPokemon = 1025;

// Currently unused, uncomment to use
// export const fetchPokemonByName = async (name: string) =>
//   await api.getPokemonByName(name);
//
// export const fetchPokemonById = async (id: number) =>
//   await api.getResource(`/api/v2/pokemon/${id}`);
//
// export const fetchPokemonSpeciesByName = async (name: string) =>
//   await api.getPokemonSpeciesByName(name);
//
// export const fetchPokemonSpeciesById = async (id: number) =>
//   await api.getResource(`/api/v2/pokemon-species/${id}`);

export const fetchPokemonGens = async () =>
  (await api.getGenerationsList()).results;

export const fetchPokemonTypes = async () =>
  (await api.getTypesList({ limit: 18 })).results;

export const fetchAllPokemon = async () =>
  (await api.getPokemonsList({ limit: noOfPokemon })).results.map((p) => ({
    id: Number(
      p.url.split("https://pokeapi.co/api/v2/pokemon/")[1].split("/")[0],
    ),
    name: p.name,
  }));

export const fetchAllPokemonByGen = async (gen: string) =>
  (await api.getGenerationByName(gen)).pokemon_species
    .map((p) => ({
      id: Number(
        p.url
          .split("https://pokeapi.co/api/v2/pokemon-species/")[1]
          .split("/")[0],
      ),
      name: p.name,
    }))
    .sort((p1, p2) => p1.id - p2.id)
    .filter((p) => p.id < 10000);

export const fetchAllPokemonByType = async (type: string) =>
  (await api.getTypeByName(type)).pokemon
    .map((p) => ({
      id: Number(
        p.pokemon.url
          .split("https://pokeapi.co/api/v2/pokemon/")[1]
          .split("/")[0],
      ),
      name: p.pokemon.name,
    }))
    .filter((p) => p.id < 10000);
