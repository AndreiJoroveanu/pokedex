import { createContext } from "react";

interface DarkModeContextTypes {
  theme: string;
  actualTheme: string;
  changeTheme: (theme: string) => void;
}

const DarkModeContext = createContext<DarkModeContextTypes | null>(null);
export default DarkModeContext;
