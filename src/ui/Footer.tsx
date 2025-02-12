import { ReactNode } from "react";

interface LinkProps {
  children: ReactNode;
  to: string;
}

const Link = ({ children, to }: LinkProps) => (
  <a
    href={to}
    target="_blank"
    rel="noreferrer"
    className="transition-all hover:border-b hover:text-gray-600 dark:hover:text-gray-300"
  >
    {children}
  </a>
);

const Footer = ({ className }: { className?: string }) => (
  <footer
    className={`mt-4 text-center text-sm text-gray-500 transition-colors dark:text-gray-400 ${className}`}
  >
    Made by{" "}
    <Link to="https://github.com/AndreiJoroveanu">Andrei Joroveanu</Link> (
    <Link to="https://github.com/AndreiJoroveanu/pokedex">Github repo</Link>
    ). Data from <Link to="https://pokeapi.co">PokéAPI</Link>.
  </footer>
);
export default Footer;
