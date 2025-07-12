import { create } from "zustand";

import {
  getEffectiveTheme,
  initialTheme,
  type Theme,
} from "@/utils/themeUtils.ts";

// Typescript interface
interface State {
  theme: Theme;
  effectiveTheme: "light" | "dark";
  changeTheme: (newTheme: Theme) => void;

  volume: number;
  changeVolume: (newVolume: number) => void;

  isMuted: boolean;
  toggleMuted: (newMuted?: boolean) => void;
}

// Actual Zustand Store
const useSettingsStore = create<State>((set, get) => ({
  theme: initialTheme,

  // Used for some UI display
  effectiveTheme: getEffectiveTheme(initialTheme),

  changeTheme: (newTheme) => {
    // Set the "theme" variable and set it in localStorage
    set({ theme: newTheme });
    localStorage.setItem("theme", newTheme);

    // Set the "effectiveTheme" variable
    set({ effectiveTheme: getEffectiveTheme(newTheme) });

    // Set the HTML class
    document.documentElement.className = newTheme;
  },

  volume: Number(localStorage.getItem("volume") ?? 5),
  changeVolume: (newVolume) => {
    if (newVolume > 0) {
      set({ volume: newVolume });
      localStorage.setItem("volume", String(newVolume));

      get().toggleMuted(false);
    } else get().toggleMuted(true);
  },

  isMuted: localStorage.getItem("isMuted") === "true",
  toggleMuted: (newMuted) => {
    const isMuted = newMuted !== undefined ? !newMuted : get().isMuted;
    set({ isMuted: !isMuted });
    localStorage.setItem("isMuted", isMuted ? "false" : "true");
  },
}));
export default useSettingsStore;
