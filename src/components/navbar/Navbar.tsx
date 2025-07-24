import { useState } from "react";

import NavbarLogo from "@/components/navbar/NavbarLogo.tsx";
import NavbarLinks from "@/components/navbar/NavbarLinks.tsx";
import SettingsMenuButton from "@/components/settings-menu/SettingsMenuButton.tsx";

const Navbar = () => {
  const [isSettingsMenuOpen, setIsSettingsMenuOpen] = useState<boolean>(false);

  return (
    <nav className="pointer-events-none relative flex h-18 w-full items-center sm:fixed sm:top-0 sm:z-50 sm:justify-between sm:px-12 sm:transition-[background-color_shadow]">
      {/* Logo:
          - On sm- screens, placed at the top of the page
          - On sm+ screens, it floats in the top-left corner */}
      <NavbarLogo />

      {/* Right section, contains the navigation links and the settings menu button:
          - On sm- screens, acts as a bottom nav bar
          - On sm+ screens, it floats in the top-right corner */}
      <div
        className={`${
          isSettingsMenuOpen
            ? "bg-base-200/80 shadow-lg dark:bg-base-800/80 dark:shadow-none"
            : "bg-base-50/80 dark:bg-base-950/80"
        } pointer-events-auto flex h-14 items-center gap-2 rounded-full backdrop-blur-md transition-[background-color_shadow] max-sm:fixed max-sm:inset-x-2 max-sm:bottom-2 max-sm:z-50 max-sm:justify-center max-sm:backdrop-blur-md sm:px-2`}
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
