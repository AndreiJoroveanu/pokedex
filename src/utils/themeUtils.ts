import useAppStore from "@/store/useAppStore.ts";

export type Theme = "light" | "dark" | "system";

// Gets the initial theme from localStorage, with "system" as a fallback
export const initialTheme =
  (localStorage.getItem("theme") as Theme) ?? "system";

// Returns the value used for actualTheme, and sets the HTML class
export const changeTheme = (theme: Theme) => {
  // Media query to check if the system is set to dark mode
  const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

  // Determine the next theme for display
  const actualTheme =
    theme === "system" ? (mediaQuery.matches ? "dark" : "light") : theme;

  // Set the HTML class
  document.documentElement.className = actualTheme;

  // Add/remove the event listener to listen for system theme changes
  if (theme === "system")
    mediaQuery.addEventListener("change", handleSystemThemeChange);
  else mediaQuery.removeEventListener("change", handleSystemThemeChange);

  return actualTheme;
};

// Used for the event listener when the app theme is set to "system"
const handleSystemThemeChange = (e: MediaQueryListEvent) => {
  // Determine the next theme for display
  const themeToSet = e.matches ? "dark" : "light";

  // Set the "actualTheme" variable and the HTML class
  useAppStore.setState({ actualTheme: themeToSet });
  document.documentElement.className = themeToSet;
};
