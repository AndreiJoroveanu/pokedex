import BackButton from "@/components/button/BackButton.tsx";
import StarButton from "@/features/pokemon/components/pokemonDetails/StarButton.tsx";

const TopButtons = () => (
  <div className="pointer-events-none sticky top-4 z-20 flex w-full px-2 sm:fixed sm:top-28 sm:px-4">
    <BackButton />
    <StarButton />
  </div>
);
export default TopButtons;
