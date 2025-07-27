import type { Dispatch, SetStateAction } from "react";
import { AnimatePresence } from "motion/react";

import VolumeIcon from "@/components/settings-menu/VolumeIcon.tsx";
import ThemeIcon from "@/components/settings-menu/ThemeIcon.tsx";
import SettingsMenu from "@/components/settings-menu/SettingsMenu.tsx";

interface SettingsMenuProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const SettingsMenuButton = ({ isOpen, setIsOpen }: SettingsMenuProps) => (
  <>
    <button
      onClick={(event) => {
        event.stopPropagation();
        setIsOpen((open) => !open);
      }}
      aria-label="Settings Menu"
      className="flex cursor-pointer gap-4 rounded-full p-2 transition-[background-color] hover:bg-base-500/25 max-sm:absolute max-sm:right-2 dark:hover:bg-base-400/25"
    >
      <VolumeIcon />
      <ThemeIcon />
    </button>

    <AnimatePresence>
      {isOpen && <SettingsMenu onClose={() => setIsOpen(false)} />}
    </AnimatePresence>
  </>
);
export default SettingsMenuButton;
