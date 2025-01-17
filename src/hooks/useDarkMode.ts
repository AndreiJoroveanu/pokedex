import { useContext } from "react";

import DarkModeContext from "../context/DarkModeContext.tsx";

export const useDarkMode = () => {
  const context = useContext(DarkModeContext);
  if (!context)
    throw new Error("DarkModeContext must be used inside of DarkModeProvider");
  return context;
};
