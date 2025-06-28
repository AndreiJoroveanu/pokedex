import { useState } from "react";

import NavbarLogo from "@/components/navbar/NavbarLogo.tsx";
import NavbarLinks from "@/components/navbar/NavbarLinks.tsx";
import SettingsMenuButton from "@/components/settings-menu/SettingsMenuButton.tsx";

const Navbar = () => {
  const [isSettingsMenuOpen, setIsSettingsMenuOpen] = useState<boolean>(false);

  return (
    // This is the top navigation bar, on desktop this is fixed
    <nav
      className={`${isSettingsMenuOpen ? "sm:bg-base-200/80 sm:shadow-lg dark:sm:bg-base-800/80 dark:sm:shadow-none" : "sm:bg-base-100/80 dark:sm:bg-base-900/80"} relative flex h-18 w-full items-center sm:fixed sm:top-0 sm:z-50 sm:h-20 sm:justify-between sm:px-12 sm:backdrop-blur-md sm:transition-[background-color_shadow] md:px-24`}
    >
      <NavbarLogo />

      {/* This is its own bar at the bottom of the screen on mobile */}
      <div
        className={`${isSettingsMenuOpen ? "max-sm:bg-base-200/80 dark:max-sm:bg-base-800/80" : "max-sm:bg-base-100/80 dark:max-sm:bg-base-900/80"} flex items-center gap-2 max-sm:fixed max-sm:bottom-0 max-sm:left-0 max-sm:z-50 max-sm:h-16 max-sm:w-full max-sm:justify-center max-sm:backdrop-blur-md max-sm:transition-[background-color]`}
      >
        <NavbarLinks />
        <SettingsMenuButton
          isOpen={isSettingsMenuOpen}
          setIsOpen={setIsSettingsMenuOpen}
        />
      </div>
    </nav>
  );
};
export default Navbar;
