import { PokemonClient } from "pokenode-ts";

const api = new PokemonClient();

export const fetchAllPokemon = async () =>
  (await api.listPokemons(0, 1025)).results;

export const fetchPokemonByName = async (name: string) =>
  await api.getPokemonByName(name);

export const fetchPokemonSpeciesByName = async (name: string) =>
  await api.getPokemonSpeciesByName(name);

export const fetchPokemonTypes = async () =>
  (await api.listTypes(0, 18)).results;

export const fetchAllPokemonByType = async (type: string) =>
  (await api.getTypeByName(type)).pokemon
    .map((p) => p.pokemon)
    .filter(
      (p) =>
        Number(
          p.url.split("https://pokeapi.co/api/v2/pokemon/")[1].split("/")[0],
        ) < 10000,
    );
