import { useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";

import { pokeApi } from "@/lib/pokeApi";
import { getIdFromUrl } from "@/utils/getIdFromUrl.ts";

declare module "@tanstack/react-query" {
  interface Register {
    defaultError: AxiosError;
  }
}

// ---------- Individual Item Hooks ----------
// Specific Pokémon
export const usePokemon = (id: number | undefined) => {
  const { data, isLoading, error } = useQuery({
    queryFn: () => pokeApi.getPokemonByName(id!),
    queryKey: ["pokemon", id],
    enabled: Boolean(id),
  });

  return { data, isLoading, error };
};

// Specific Pokémon Species
export const usePokemonSpecies = (id: number | undefined) => {
  const { data, isLoading, error } = useQuery({
    queryFn: () => pokeApi.getPokemonSpeciesByName(id!),
    queryKey: ["pokemonSpecies", id],
    enabled: Boolean(id),
  });

  return { data, isLoading, error };
};

// Specific Move
export const useMove = (id: number | undefined) => {
  const { data, isLoading, error } = useQuery({
    queryFn: () => pokeApi.getMoveByName(id!),
    queryKey: ["move", id],
    enabled: Boolean(id),
  });

  return { data, isLoading, error };
};

// Specific Pokémon evolution chain
export const useEvolutionChain = (id: number | undefined) => {
  const { data, isLoading, error } = useQuery({
    queryFn: () => pokeApi.getEvolutionChainById(id!),
    queryKey: ["evolutionChain", id],
    enabled: Boolean(id),
  });

  return { data, isLoading, error };
};

// ---------- General List Hooks ----------
// All Pokémon Species
export const useAllPokemonSpecies = () => {
  const { data, isLoading, error } = useQuery({
    queryFn: () => pokeApi.getPokemonSpeciesList(),
    queryKey: ["allPokemonSpecies"],
  });

  const transformedData = useMemo(() => {
    return data?.results.map((p) => ({
      // Extract the Pokémon Species ID from the URL
      id: getIdFromUrl(p.url)!,
      name: p.name,
    }));
  }, [data]);

  return { data: transformedData, isLoading, error };
};

// All Moves
export const useAllMoves = () => {
  const { data, isLoading, error } = useQuery({
    queryFn: () => pokeApi.getMovesList(),
    queryKey: ["allMoves"],
  });

  const transformedData = useMemo(() => {
    return (
      data?.results
        .map((m) => ({
          // Extract the move ID from the URL
          id: getIdFromUrl(m.url)!,
          name: m.name,
        }))
        // Filtering as to not show "Shadow" moves, which have IDs over 10000
        .filter((m) => m.id < 10000)
    );
  }, [data]);

  return { data: transformedData, isLoading, error };
};

// ---------- Filtered List Hooks ----------
// All Pokémon from a specific Generation
export const useAllPokemonByGen = (gen: string | undefined) => {
  const { data, isLoading, error } = useQuery({
    queryFn: () => pokeApi.getGenerationByName(`generation-${gen}`),
    queryKey: ["generation", gen],
    enabled: Boolean(gen),
  });

  const transformedData = useMemo(() => {
    return gen
      ? (data?.pokemon_species
          .map((p) => ({
            // Extract the Pokémon Species ID from the URL
            id: getIdFromUrl(p.url)!,
            name: p.name,
          }))
          // Sort all Pokémon by ID
          .sort((p1, p2) => p1.id - p2.id) ?? [])
      : [];
  }, [data?.pokemon_species, gen]);

  return { data: transformedData, isLoading, error };
};

// All Pokémon from a specific Type
export const useAllPokemonByType = (type: string | undefined) => {
  const { data, isLoading, error } = useQuery({
    queryFn: () => pokeApi.getTypeByName(type!),
    queryKey: ["type", type],
    enabled: Boolean(type),
  });

  const transformedData = useMemo(() => {
    return type
      ? (data?.pokemon
          .map((p) => ({
            // Extract the Pokémon ID from the URL
            id: getIdFromUrl(p.pokemon.url)!,
            name: p.pokemon.name,
          }))
          // Filtering as to not show alternate forms, which have IDs over 10000
          .filter((p) => p.id < 10000) ?? [])
      : [];
  }, [data?.pokemon, type]);

  return { data: transformedData, isLoading, error };
};

// All moves from a specific Generation
export const useAllMovesByGen = (gen: string | undefined) => {
  const { data, isLoading, error } = useQuery({
    queryFn: () => pokeApi.getGenerationByName(`generation-${gen}`),
    queryKey: ["generation", gen],
    enabled: Boolean(gen),
  });

  const transformedData = useMemo(() => {
    return gen
      ? (data?.moves
          .map((m) => ({
            // Extract the move ID from the URL
            id: getIdFromUrl(m.url)!,
            name: m.name,
          }))
          // Filtering as to not show "Shadow" moves, which have IDs over 10000
          .filter((m) => m.id < 10000) ?? [])
      : [];
  }, [data?.moves, gen]);

  return { data: transformedData, isLoading, error };
};

// All moves from a specific Type
export const useAllMovesByType = (type: string | undefined) => {
  const { data, isLoading, error } = useQuery({
    queryFn: () => pokeApi.getTypeByName(type!),
    queryKey: ["type", type],
    enabled: Boolean(type),
  });

  const transformedData = useMemo(() => {
    return type
      ? (data?.moves.map((m) => ({
          // Extract the move ID from the URL
          id: getIdFromUrl(m.url)!,
          name: m.name,
        })) ?? [])
      : [];
  }, [data?.moves, type]);

  return { data: transformedData, isLoading, error };
};
