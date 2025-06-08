import { useShallow } from "zustand/react/shallow";
import { motion } from "motion/react";

import useSettingsStore from "@/store/useSettingsStore.ts";
import { themeOptions } from "@/data/themeOptions.tsx";
import type { Theme } from "@/utils/themeUtils.ts";

const optionsVariants = {
  hidden: {
    x: "var(--x-from-item, 0px)", // for sm-
    y: "var(--y-from-item, 0px)", // for sm+
    opacity: 0,
  },
  visible: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: { type: "spring", bounce: 0.5, duration: 0.3 },
  },
};

const ThemeSwitcher = ({ onClose }: { onClose: () => void }) => {
  const [theme, effectiveTheme, changeTheme] = useSettingsStore(
    useShallow((state) => [
      state.theme,
      state.effectiveTheme,
      state.changeTheme,
    ]),
  );

  const handleClick = (theme: Theme) => {
    changeTheme(theme);
    onClose();
  };

  return (
    <>
      <motion.div variants={optionsVariants} className="mx-6 my-2">
        <h2 className="mb-1 text-lg font-semibold">Select an App Theme</h2>

        <p className="text-sm text-slate-600 capitalize dark:text-slate-400">
          {`Current Theme: ${theme}${theme === "system" ? ` (${effectiveTheme})` : ""}`}
        </p>
      </motion.div>

      {themeOptions.map(({ theme, icon: Icon }) => (
        <motion.button
          key={theme}
          onClick={() => handleClick(theme)}
          variants={optionsVariants}
          className="flex w-full cursor-pointer items-center gap-2 px-6 py-3 font-semibold capitalize hover:bg-slate-700/10 dark:hover:bg-slate-300/10"
        >
          <Icon className="size-5" /> {theme}
        </motion.button>
      ))}
    </>
  );
};
export default ThemeSwitcher;
