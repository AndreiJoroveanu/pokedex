import { type MouseEvent, useState } from "react";
import { AnimatePresence } from "motion/react";

import VolumeIcon from "@/components/settings-menu/VolumeIcon.tsx";
import ThemeIcon from "@/components/settings-menu/ThemeIcon.tsx";
import SettingsMenu from "@/components/settings-menu/SettingsMenu.tsx";

const SettingsMenuButton = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

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
        <VolumeIcon />
        <ThemeIcon />
      </button>

      <AnimatePresence>
        {isOpen && <SettingsMenu onClose={() => setIsOpen(false)} />}
      </AnimatePresence>
    </>
  );
};
export default SettingsMenuButton;
