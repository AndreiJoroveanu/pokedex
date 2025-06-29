import { useState } from "react";

import NavbarLogo from "@/components/navbar/NavbarLogo.tsx";
import NavbarLinks from "@/components/navbar/NavbarLinks.tsx";
import SettingsMenuButton from "@/components/settings-menu/SettingsMenuButton.tsx";

const Navbar = () => {
  const [isSettingsMenuOpen, setIsSettingsMenuOpen] = useState<boolean>(false);

  return (
    <nav
      // On sm+ screens, show blurred background only when the settings menu is open
      className={`${
        isSettingsMenuOpen
          ? "sm:bg-base-200/80 sm:shadow-lg sm:backdrop-blur-md dark:sm:bg-base-800/80 dark:sm:shadow-none"
          : "pointer-events-none"
      } relative flex h-18 w-full items-center sm:fixed sm:top-0 sm:z-50 sm:justify-between sm:px-12 sm:transition-[background-color_shadow] sm:ease-out`}
    >
      {/* Logo:
          - On sm- screens, placed at the top of the page
          - On sm+ screens, it floats in the top-left corner */}
      <NavbarLogo isSettingsMenuOpen={isSettingsMenuOpen} />

      {/* Right section, contains the navigation links and the settings menu button:
          - On sm- screens, acts as a bottom nav bar
          - On sm+ screens, it floats in the top-right corner
          - Background is always displayed on sm- screens, but is only displayed if the settings menu is closed on sm+ screens */}
      <div
        className={`${
          isSettingsMenuOpen
            ? "max-sm:bg-base-200/80 max-sm:shadow-lg dark:max-sm:bg-base-800/80 dark:max-sm:shadow-none"
            : "bg-base-100/80 sm:backdrop-blur-md dark:bg-base-900/80"
        } pointer-events-auto flex h-14 items-center gap-2 rounded-full transition-[background-color_shadow] ease-out max-sm:fixed max-sm:inset-x-2 max-sm:bottom-2 max-sm:z-50 max-sm:justify-center max-sm:backdrop-blur-md sm:px-2`}
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
