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
  setCurrentGen: (gen) => set({ currentGen: gen }),

  currentType: "",
  setCurrentType: (type) => set({ currentType: type }),

  searchQuery: "",
  setSearchQuery: (query) => set({ searchQuery: query }),

  clearFilters: () => {
    set({ currentGen: "", currentType: "", searchQuery: "" });
  },
}));
export default usePokemonStore;
