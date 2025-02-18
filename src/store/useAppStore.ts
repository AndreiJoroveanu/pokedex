import { create } from "zustand";

import { changeTheme, initialTheme, Theme } from "@/utils/themeUtils.ts";

// Typescript stuff
interface State {
  theme: Theme;
  actualTheme: "light" | "dark";

  changeTheme: (newTheme: Theme) => void;

  isGenFilterOpen: boolean;
  toggleGenFilterOpen: () => void;

  isTypeFilterOpen: boolean;
  toggleTypeFilterOpen: () => void;
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

  isGenFilterOpen: false,
  toggleGenFilterOpen: () =>
    set((state) => ({ isGenFilterOpen: !state.isGenFilterOpen })),

  isTypeFilterOpen: false,
  toggleTypeFilterOpen: () =>
    set((state) => ({ isTypeFilterOpen: !state.isTypeFilterOpen })),
}));
export default useAppStore;
