import { ReactNode, useEffect, useState } from "react";

import { useLocalStorageState } from "../../hooks/useLocalStorageState.ts";
import DarkModeContext from "./DarkModeContext.tsx";

const DarkModeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useLocalStorageState<string>("system", "theme");

  // Actual theme (for when the "system" theme is used), not actually needed for the styling
  const [actualTheme, setActualTheme] = useState<string>(
    theme === "system"
      ? window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light"
      : theme,
  );

  useEffect(() => {
    document.documentElement.className = "";
    document.documentElement.classList.add(theme.toString());

    // Sync system theme changes if "system" is selected
    if (theme === "system") {
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

      const handleThemeChange = (e: MediaQueryListEvent) =>
        setActualTheme(e.matches ? "dark" : "light");

      mediaQuery.addEventListener("change", handleThemeChange);
      return () => mediaQuery.removeEventListener("change", handleThemeChange);
    } else {
      setActualTheme(theme);
    }
  }, [theme]);

  const changeTheme = (theme: string) => setTheme(theme);

  return (
    <DarkModeContext.Provider value={{ theme, actualTheme, changeTheme }}>
      {children}
    </DarkModeContext.Provider>
  );
};
export default DarkModeProvider;
