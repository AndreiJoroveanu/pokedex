import { useShallow } from "zustand/react/shallow";
import { motion, type Variants } from "motion/react";

import useSettingsStore from "@/store/useSettingsStore.ts";
import { themeOptions } from "@/data/themeOptions.tsx";

const optionsVariants: Variants = {
  hidden: {
    y: "var(--y-from-item, 0px)",
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", bounce: 0.5, duration: 0.3 },
  },
};

const ThemeSwitcher = () => {
  const [theme, effectiveTheme, changeTheme] = useSettingsStore(
    useShallow((state) => [
      state.theme,
      state.effectiveTheme,
      state.changeTheme,
    ]),
  );

  return (
    <>
      <motion.div variants={optionsVariants} className="mx-6 my-2">
        <h2 className="mb-1 text-lg font-semibold">Select an App Theme</h2>

        <p className="text-sm text-base-600 capitalize transition-[color] dark:text-base-400">
          {`Current Theme: ${theme}${theme === "system" ? ` (${effectiveTheme})` : ""}`}
        </p>
      </motion.div>

      {themeOptions.map(({ theme, icon: Icon }) => (
        <motion.button
          key={theme}
          onClick={() => changeTheme(theme)}
          variants={optionsVariants}
          className="flex w-full cursor-pointer items-center gap-2 px-6 py-3 font-semibold capitalize transition-[background-color] hover:bg-base-700/10 dark:hover:bg-base-300/10"
        >
          <Icon className="size-5" /> {theme}
        </motion.button>
      ))}
    </>
  );
};
export default ThemeSwitcher;
