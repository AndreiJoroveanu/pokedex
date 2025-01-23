import { create } from "zustand";

// Typescript stuff
type Theme = "light" | "dark" | "system";
interface State {
  theme: Theme;
  actualTheme: "light" | "dark";

  changeTheme: (newTheme: Theme) => void;

  isGenFilterOpen: boolean;
  toggleGenFilterOpen: () => void;

  isTypeFilterOpen: boolean;
  toggleTypeFilterOpen: () => void;
}

// Checks if the system theme is dark theme
const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

// Used for an event listener when the app theme is set to "system"
const handleThemeChange = (e: MediaQueryListEvent) => {
  // Determine the next theme for display
  const themeToSet = e.matches ? "dark" : "light";

  // Set the "actualTheme" variable and the HTML class
  useStore.setState({ actualTheme: themeToSet });
  document.documentElement.className = themeToSet;
};

const useStore = create<State>((set) => {
  const theme = (localStorage.getItem("theme") as Theme) ?? "system";

  // Used for some UI display, and to set the theme initially
  const actualTheme =
    theme === "system" ? (mediaQuery.matches ? "dark" : "light") : theme;

  // Executed once, to set the initial HTML class (the theme)
  document.documentElement.classList.add(actualTheme);

  // Sync system theme changes if the "system"
  // theme is selected (runs only initially)
  if (theme === "system")
    mediaQuery.addEventListener("change", handleThemeChange);

  return {
    theme,
    actualTheme,

    changeTheme: (newTheme) => {
      // Set the "theme" variable and set it in localStorage
      set({ theme: newTheme });
      localStorage.setItem("theme", newTheme);

      // Determine the next theme for display
      const themeToSet =
        newTheme === "system"
          ? mediaQuery.matches
            ? "dark"
            : "light"
          : newTheme;

      // Set the "actualTheme" variable and the HTML class
      set({ actualTheme: themeToSet });
      document.documentElement.className = themeToSet;

      // Add/remove an event listener to listen for system theme changes
      if (newTheme === "system")
        mediaQuery.addEventListener("change", handleThemeChange);
      else mediaQuery.removeEventListener("change", handleThemeChange);
    },

    isGenFilterOpen: false,
    toggleGenFilterOpen: () =>
      set((state) => ({ isGenFilterOpen: !state.isGenFilterOpen })),

    isTypeFilterOpen: false,
    toggleTypeFilterOpen: () =>
      set((state) => ({ isTypeFilterOpen: !state.isTypeFilterOpen })),
  };
});
export default useStore;
