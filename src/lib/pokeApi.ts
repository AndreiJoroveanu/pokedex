import Pokedex from "pokedex-promise-v2";

export const pokeApi = new Pokedex({
  protocol: "https",
  hostName: "pokeapi.co",
  versionPath: "/api/v2/",
  cacheLimit: 1000 * 60 * 60 * 24 * 30, // 30 days
  timeout: 60 * 1000, // 60 seconds
});
