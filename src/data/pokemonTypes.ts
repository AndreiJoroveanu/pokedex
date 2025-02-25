import normal from "/typeIcons/normal.svg";
import fighting from "/typeIcons/fighting.svg";
import flying from "/typeIcons/flying.svg";
import poison from "/typeIcons/poison.svg";
import ground from "/typeIcons/ground.svg";
import rock from "/typeIcons/rock.svg";
import bug from "/typeIcons/bug.svg";
import ghost from "/typeIcons/ghost.svg";
import steel from "/typeIcons/steel.svg";
import fire from "/typeIcons/fire.svg";
import water from "/typeIcons/water.svg";
import grass from "/typeIcons/grass.svg";
import electric from "/typeIcons/electric.svg";
import psychic from "/typeIcons/psychic.svg";
import ice from "/typeIcons/ice.svg";
import dragon from "/typeIcons/dragon.svg";
import dark from "/typeIcons/dark.svg";
import fairy from "/typeIcons/fairy.svg";

export const pokemonTypes: Record<
  string,
  { label: string; color: string; icon: string }
> = {
  normal: { label: "Normal", color: "#828282", icon: normal },
  fighting: { label: "Fighting", color: "#e49021", icon: fighting },
  flying: { label: "Flying", color: "#74aad0", icon: flying },
  poison: { label: "Poison", color: "#9354cb", icon: poison },
  ground: { label: "Ground", color: "#a4733c", icon: ground },
  rock: { label: "Rock", color: "#a9a481", icon: rock },
  bug: { label: "Bug", color: "#9f9f28", icon: bug },
  ghost: { label: "Ghost", color: "#6f4570", icon: ghost },
  steel: { label: "Steel", color: "#74b0cb", icon: steel },
  fire: { label: "Fire", color: "#e4613e", icon: fire },
  water: { label: "Water", color: "#3099e1", icon: water },
  grass: { label: "Grass", color: "#439837", icon: grass },
  electric: { label: "Electric", color: "#dfbc28", icon: electric },
  psychic: { label: "Psychic", color: "#e96c8c", icon: psychic },
  ice: { label: "Ice", color: "#47c8c8", icon: ice },
  dragon: { label: "Dragon", color: "#576fbc", icon: dragon },
  dark: { label: "Dark", color: "#4f4747", icon: dark },
  fairy: { label: "Fairy", color: "#e18ce1", icon: fairy },
};
