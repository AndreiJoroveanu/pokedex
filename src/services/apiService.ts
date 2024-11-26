import Pokedex from "pokedex-promise-v2";

const api = new Pokedex({
  protocol: "https",
  hostName: "pokeapi.co",
  versionPath: "/api/v2/",
  cacheLimit: 1000 * 60 * 60 * 24 * 30, // 1 month
  timeout: 20 * 1000, // 20 seconds
});

export const fetchAllPokemon = async () =>
  (await api.getPokemonsList({ limit: 1025 })).results;

export const fetchPokemonByName = async (name: string) =>
  await api.getPokemonByName(name);

export const fetchPokemonSpeciesByName = async (name: string) =>
  await api.getPokemonSpeciesByName(name);

export const fetchPokemonTypes = async () =>
  (await api.getTypesList({ limit: 18 })).results;

export const fetchAllPokemonByType = async (type: string) =>
  (await api.getTypeByName(type)).pokemon
    .map((p) => p.pokemon)
    .filter(
      (p) =>
        Number(
          p.url.split("https://pokeapi.co/api/v2/pokemon/")[1].split("/")[0],
        ) < 10000,
    );
