import { JSXElementConstructor, ReactElement } from "react";
import {
  HiOutlineCog6Tooth,
  HiOutlineMoon,
  HiOutlineSun,
} from "react-icons/hi2";

interface themeOption {
  theme: "light" | "dark" | "system";
  icon: ReactElement<{ size: number }, JSXElementConstructor<string>>;
}

export const themeOptions: themeOption[] = [
  { theme: "light", icon: <HiOutlineSun key="light-icon" /> },
  { theme: "dark", icon: <HiOutlineMoon key="dark-icon" /> },
  { theme: "system", icon: <HiOutlineCog6Tooth key="system-icon" /> },
];
