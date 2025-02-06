import { ElementType } from "react";
import { Cog6ToothIcon, MoonIcon, SunIcon } from "@heroicons/react/24/outline";

interface themeOption {
  theme: "light" | "dark" | "system";
  icon: ElementType;
}

export const themeOptions: themeOption[] = [
  { theme: "light", icon: SunIcon },
  { theme: "dark", icon: MoonIcon },
  { theme: "system", icon: Cog6ToothIcon },
];
