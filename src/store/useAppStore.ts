import { create } from "zustand";

import {
  getEffectiveTheme,
  initialTheme,
  type Theme,
} from "@/utils/themeUtils.ts";

// Typescript interface
interface State {
  theme: Theme;
  effectiveTheme: "light" | "dark";
  changeTheme: (newTheme: Theme) => void;

  volume: number;
  changeVolume: (newVolume: number) => void;

  isGenPanelOpen: boolean;
  toggleGenPanelOpen: () => void;

  isTypePanelOpen: boolean;
  toggleTypePanelOpen: () => void;

  resetSidebarPanels: () => void;

  isLearnsetPanelOpen: boolean;
  toggleLearnsetPanelOpen: () => void;

  isDexEntriesPanelOpen: boolean;
  toggleDexEntriesPanelOpen: () => void;

  resetPokemonDetailsPanels: () => void;
}

// Actual Zustand Store
const useAppStore = create<State>((set) => ({
  theme: initialTheme,

  // Used for some UI display
  effectiveTheme: getEffectiveTheme(initialTheme),

  changeTheme: (newTheme) => {
    // Set the "theme" variable and set it in localStorage
    set({ theme: newTheme });
    localStorage.setItem("theme", newTheme);

    // Set the "effectiveTheme" variable
    set({ effectiveTheme: getEffectiveTheme(newTheme) });

    // Set the HTML class
    document.documentElement.className = newTheme;
  },

  volume: Number(localStorage.getItem("volume") ?? 5),
  changeVolume: (newVolume) => {
    set({ volume: newVolume });
    localStorage.setItem("volume", String(newVolume));
  },

  // Used for the Collapsing Panels from the Sidebar in the All Pokémon/Moves pages
  isGenPanelOpen: false,
  toggleGenPanelOpen: () =>
    set((state) => ({ isGenPanelOpen: !state.isGenPanelOpen })),

  isTypePanelOpen: false,
  toggleTypePanelOpen: () =>
    set((state) => ({ isTypePanelOpen: !state.isTypePanelOpen })),

  resetSidebarPanels: () =>
    set({ isGenPanelOpen: false, isTypePanelOpen: false }),

  // Used for the Collapsing Panels from the Pokémon details page
  isLearnsetPanelOpen: false,
  toggleLearnsetPanelOpen: () =>
    set((state) => ({ isLearnsetPanelOpen: !state.isLearnsetPanelOpen })),

  isDexEntriesPanelOpen: false,
  toggleDexEntriesPanelOpen: () =>
    set((state) => ({ isDexEntriesPanelOpen: !state.isDexEntriesPanelOpen })),

  resetPokemonDetailsPanels: () =>
    set({ isLearnsetPanelOpen: false, isDexEntriesPanelOpen: false }),
}));
export default useAppStore;
