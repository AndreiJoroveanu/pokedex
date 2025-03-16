import NavbarLogo from "@/components/navbar/NavbarLogo.tsx";
import NavbarLinks from "@/components/navbar/NavbarLinks.tsx";
import ThemeSwitcherButton from "@/components/theme-switcher/ThemeSwitcherButton.tsx";

const Navbar = () => (
  <nav className="fixed top-0 z-50 flex h-18 w-full items-center justify-between border-b border-slate-400 bg-slate-100/80 px-2 shadow-lg backdrop-blur-md transition-colors sm:h-24 sm:px-24 dark:border-slate-600 dark:bg-slate-900/80 dark:shadow-none">
    <NavbarLogo />

    <div className="flex items-center sm:gap-2">
      <NavbarLinks />
      <ThemeSwitcherButton />
    </div>
  </nav>
);
export default Navbar;
