import { skipToken, useQuery } from "@tanstack/react-query";
import type { AxiosError } from "axios";
import type { PokemonEncounter } from "pokedex-promise-v2";

import { pokeApi } from "@/lib/pokeApi";
import { getIdFromUrl } from "@/utils/getIdFromUrl.ts";
import type { ItemResource } from "@/types/types.ts";

declare module "@tanstack/react-query" {
  interface Register {
    defaultError: AxiosError;
  }
}

// ---------- Individual Item Hooks ----------
// Specific Pokémon
export const usePokemon = (id: number | undefined) =>
  useQuery({
    queryFn: id ? () => pokeApi.getPokemonByName(id) : skipToken,
    queryKey: ["pokemon", id],
  });

// Specific Pokémon Species
export const usePokemonSpecies = (id: number) =>
  useQuery({
    queryFn: () => pokeApi.getPokemonSpeciesByName(id),
    queryKey: ["pokemonSpecies", id],
  });

// Specific Move
export const useMove = (id: number) =>
  useQuery({
    queryFn: () => pokeApi.getMoveByName(id),
    queryKey: ["move", id],
  });

// Specific Pokémon evolution chain
export const useEvolutionChain = (id: number | undefined) =>
  useQuery({
    queryFn: id ? () => pokeApi.getEvolutionChainById(id) : skipToken,
    queryKey: ["evolutionChain", id],
  });

// Specific Pokémon Ability
export const usePokemonAbility = (id: number) =>
  useQuery({
    queryFn: () => pokeApi.getAbilityByName(id),
    queryKey: ["ability", id],
  });

// Specific Pokémon encounter locations
export const usePokemonLocations = (id: number) =>
  useQuery({
    queryFn: () =>
      pokeApi.getResource(`/api/v2/pokemon/${id}/encounters`) as Promise<
        PokemonEncounter[]
      >,
    queryKey: ["pokemonLocation", id],
  });

// ---------- General List Hooks ----------
// All Pokémon Species
export const useAllPokemonSpecies = () =>
  useQuery({
    queryFn: () => pokeApi.getPokemonSpeciesList(),
    select: (data) =>
      data.results.map((p) => ({
        // Extract the Pokémon Species ID from the URL
        id: getIdFromUrl(p.url)!,
        name: p.name,
      })) as ItemResource[],
    queryKey: ["allPokemonSpecies"],
  });

// All Moves
export const useAllMoves = () =>
  useQuery({
    queryFn: () => pokeApi.getMovesList(),
    select: (data) =>
      data.results
        .map((m) => ({
          // Extract the move ID from the URL
          id: getIdFromUrl(m.url)!,
          name: m.name,
        }))
        // Filters common Z-Moves out
        .filter(
          (m) => !m.name.endsWith("physical") && !m.name.endsWith("special"),
        )
        // Filters "Shadow" moves out
        .filter((m) => m.id < 10000) as ItemResource[],
    queryKey: ["allMoves"],
  });

// ---------- Filtered List Hooks ----------
// All Pokémon from a specific Generation
export const useAllPokemonByGen = (gen: string | undefined) =>
  useQuery({
    queryFn: gen
      ? () => pokeApi.getGenerationByName(`generation-${gen}`)
      : skipToken,
    select: (data) =>
      data.pokemon_species
        .map((p) => ({
          // Extract the Pokémon Species ID from the URL
          id: getIdFromUrl(p.url)!,
          name: p.name,
        }))
        // Sort all Pokémon by ID
        .sort((p1, p2) => p1.id - p2.id) as ItemResource[],
    queryKey: ["generation", gen],
  });

// All Pokémon from a specific Type
export const useAllPokemonByType = (type: string | undefined) =>
  useQuery({
    queryFn: type ? () => pokeApi.getTypeByName(type) : skipToken,
    select: (data) =>
      data.pokemon
        .map((p) => ({
          // Extract the Pokémon ID from the URL
          id: getIdFromUrl(p.pokemon.url)!,
          name: p.pokemon.name,
        }))
        // Filters alternate forms out
        .filter((p) => p.id < 10000) as ItemResource[],
    queryKey: ["type", type],
  });

// All moves from a specific Generation
export const useAllMovesByGen = (gen: string | undefined) =>
  useQuery({
    queryFn: gen
      ? () => pokeApi.getGenerationByName(`generation-${gen}`)
      : skipToken,
    select: (data) =>
      data.moves
        .map((m) => ({
          // Extract the move ID from the URL
          id: getIdFromUrl(m.url)!,
          name: m.name,
        }))
        // Filters common Z-Moves out
        .filter(
          (m) => !m.name.endsWith("physical") && !m.name.endsWith("special"),
        )
        // Filters "Shadow" moves out
        .filter((m) => m.id < 10000) as ItemResource[],
    queryKey: ["generation", gen],
  });

// All moves from a specific Type
export const useAllMovesByType = (type: string | undefined) =>
  useQuery({
    queryFn: type ? () => pokeApi.getTypeByName(type) : skipToken,
    select: (data) =>
      data.moves
        .map((m) => ({
          // Extract the move ID from the URL
          id: getIdFromUrl(m.url)!,
          name: m.name,
        }))
        // Filters common Z-Moves out
        .filter(
          (m) => !m.name.endsWith("physical") && !m.name.endsWith("special"),
        ) as ItemResource[],
    queryKey: ["type", type],
  });
