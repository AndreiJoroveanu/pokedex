import { create } from "zustand";

interface PokemonStore {
  currentPage: number;
  setCurrentPage: (page: number) => void;

  currentGen: string;
  setCurrentGen: (gen: string) => void;

  currentType: string;
  setCurrentType: (type: string) => void;

  searchQuery: string;
  setSearchQuery: (query: string) => void;

  clearFilters: () => void;
}

const usePokemonStore = create<PokemonStore>((set) => ({
  currentPage: 1,
  setCurrentPage: (page) => set({ currentPage: page }),

  currentGen: "",
  setCurrentGen: (gen) => set({ currentGen: gen, currentPage: 1 }),

  currentType: "",
  setCurrentType: (type) => set({ currentType: type, currentPage: 1 }),

  searchQuery: "",
  setSearchQuery: (query) => set({ searchQuery: query, currentPage: 1 }),

  clearFilters: () => {
    set({ currentGen: "", currentType: "", searchQuery: "" });
  },
}));
export default usePokemonStore;
