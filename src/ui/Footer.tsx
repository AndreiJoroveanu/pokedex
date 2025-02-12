const link = (to: string, label: string) => (
  <a
    href={to}
    target="_blank"
    rel="noreferrer"
    className="underline underline-offset-4 transition-colors hover:text-blue-600 dark:hover:text-blue-400"
  >
    {label}
  </a>
);

const Footer = ({ className }: { className?: string }) => (
  <footer
    className={`mt-4 text-center text-sm text-gray-600 transition-colors dark:text-gray-400 ${className}`}
  >
    Made by {link("https://github.com/AndreiJoroveanu", "Andrei Joroveanu")} (
    {link("https://github.com/AndreiJoroveanu/pokedex", "Github repo")}
    ). Data from {link("https://pokeapi.co", "PokéAPI")}.
  </footer>
);
export default Footer;
