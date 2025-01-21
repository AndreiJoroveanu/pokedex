import { create } from "zustand";

// Typescript stuff
type Theme = "light" | "dark" | "system";
interface State {
  theme: Theme;
  actualTheme: "light" | "dark";

  changeTheme: (theme: Theme) => void;

  isGenFilterOpen: boolean;
  toggleGenFilterOpen: () => void;

  isTypeFilterOpen: boolean;
  toggleTypeFilterOpen: () => void;
}

// Checks if the system theme is dark theme
const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

// Used for an event listener when the app theme is set to "system"
const handleThemeChange = (e: MediaQueryListEvent) =>
  useStore.setState({ actualTheme: e.matches ? "dark" : "light" });

const useStore = create<State>((set) => {
  const theme =
    (JSON.parse(localStorage.getItem("theme")!) as Theme) ?? "system";

  // This will only get executed once, to set the initial theme
  document.documentElement.classList.add(theme);

  const actualTheme =
    theme === "system" ? (mediaQuery.matches ? "dark" : "light") : theme;

  // Sync system theme changes if "system"
  // theme is selected (runs only initially)
  if (theme === "system")
    mediaQuery.addEventListener("change", handleThemeChange);

  return {
    theme,
    actualTheme,

    changeTheme: (theme) => {
      localStorage.setItem("theme", JSON.stringify(theme));
      set({ theme });

      // This would normally be done in an effect, but
      // Zustand allows these operations inside its store
      document.documentElement.className = "";
      document.documentElement.classList.add(theme);

      // Sync system theme changes when the "system" theme is selected
      if (theme === "system") {
        set({ actualTheme: mediaQuery.matches ? "dark" : "light" });
        mediaQuery.addEventListener("change", handleThemeChange);
      } else {
        set({ actualTheme: theme });
        mediaQuery.removeEventListener("change", handleThemeChange);
      }
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
