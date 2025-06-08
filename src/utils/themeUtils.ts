import useSettingsStore from "@/store/useSettingsStore.ts";

export type Theme = "light" | "dark" | "system";

// Get the initial theme from localStorage, with "system" as a fallback
export const initialTheme =
  (localStorage.getItem("theme") as Theme) ?? "system";

// Set the initial HTML class
document.documentElement.className = initialTheme;

// Media query to check if the system is set to dark mode
const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

export const getEffectiveTheme = (theme: Theme) => {
  // Add/remove an event listener to listen for system theme changes
  mediaQuery.removeEventListener("change", handleSystemThemeChange);
  if (theme === "system")
    mediaQuery.addEventListener("change", handleSystemThemeChange);

  return theme === "system" ? (mediaQuery.matches ? "dark" : "light") : theme;
};

// Used for the event listener when the app theme is set to "system"
const handleSystemThemeChange = (e: MediaQueryListEvent) =>
  useSettingsStore.setState({ effectiveTheme: e.matches ? "dark" : "light" });
