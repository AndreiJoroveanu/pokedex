import { type MouseEvent, useState } from "react";
import { useShallow } from "zustand/react/shallow";
import { AnimatePresence } from "motion/react";
import {
  QuestionMarkCircleIcon,
  SpeakerWaveIcon,
  SpeakerXMarkIcon,
} from "@heroicons/react/24/outline";

import useAppStore from "@/store/useAppStore.ts";
import { themeOptions } from "@/data/themeOptions.tsx";

import SettingsMenu from "@/components/settings-menu/SettingsMenu.tsx";

const SettingsMenuButton = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const [volume, actualTheme] = useAppStore(
    useShallow((state) => [state.volume, state.actualTheme]),
  );

  const MenuIcon = themeOptions.find(
    (item) => item.theme === actualTheme,
  )?.icon;

  const handleOpen = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setIsOpen((open) => !open);
  };

  return (
    <>
      <button
        onClick={handleOpen}
        aria-label="Settings Menu"
        className="flex cursor-pointer gap-4 rounded-lg p-2 transition-[background-color] hover:bg-slate-700/10 max-sm:absolute max-sm:right-4 dark:hover:bg-slate-300/10"
      >
        {volume > 0 ? (
          <SpeakerWaveIcon className="xs:size-6 size-5" />
        ) : (
          <SpeakerXMarkIcon className="xs:size-6 size-5" />
        )}

        {MenuIcon ? (
          <MenuIcon className="xs:size-6 size-5" />
        ) : (
          <QuestionMarkCircleIcon className="xs:size-6 size-5" />
        )}
      </button>

      <AnimatePresence>
        {isOpen && <SettingsMenu onClose={() => setIsOpen(false)} />}
      </AnimatePresence>
    </>
  );
};
export default SettingsMenuButton;
