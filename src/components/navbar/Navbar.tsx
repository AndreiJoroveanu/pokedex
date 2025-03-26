import NavbarLogo from "@/components/navbar/NavbarLogo.tsx";
import NavbarLinks from "@/components/navbar/NavbarLinks.tsx";
import ThemeSwitcherButton from "@/components/theme-switcher/ThemeSwitcherButton.tsx";

const Navbar = () => (
  // This is the top navigation bar, on desktop this is fixed
  <nav className="relative z-10 flex h-18 w-full items-center sm:fixed sm:top-0 sm:z-50 sm:h-24 sm:justify-between sm:border-b sm:border-slate-400 sm:bg-slate-100/80 sm:px-12 sm:shadow-lg sm:backdrop-blur-md sm:transition-[background-color] md:px-24 dark:sm:border-slate-600 dark:sm:bg-slate-900/80 dark:sm:shadow-none">
    <NavbarLogo />

    {/* This is its own bar at the bottom of the screen on mobile */}
    <div className="flex items-center gap-2 max-sm:fixed max-sm:bottom-0 max-sm:left-0 max-sm:z-50 max-sm:h-16 max-sm:w-full max-sm:justify-center max-sm:border-t max-sm:border-slate-400 max-sm:bg-slate-100/80 max-sm:backdrop-blur-md max-sm:transition-[background-color] dark:max-sm:border-slate-600 dark:max-sm:bg-slate-900/80">
      <NavbarLinks />
      <ThemeSwitcherButton />
    </div>
  </nav>
);
export default Navbar;
