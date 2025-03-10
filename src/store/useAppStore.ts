import { create } from "zustand";

import { changeTheme, initialTheme, Theme } from "@/utils/themeUtils.ts";

// Typescript interface
interface State {
  theme: Theme;
  actualTheme: "light" | "dark";

  changeTheme: (newTheme: Theme) => void;

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

  // Used for some UI display, calling this function also sets the HTML class initially
  actualTheme: changeTheme(initialTheme),

  changeTheme: (newTheme) => {
    // Set the "theme" variable and set it in localStorage
    set({ theme: newTheme });
    localStorage.setItem("theme", newTheme);

    // Set the "actualTheme" variable, calling this function also sets the HTML class
    set({ actualTheme: changeTheme(newTheme) });
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
