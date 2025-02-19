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

export const pokemonTypes: {
  value: string;
  label: string;
  color: string;
  icon: string;
}[] = [
  { value: "normal", label: "Normal", color: "#828282", icon: normal },
  { value: "fighting", label: "Fighting", color: "#e49021", icon: fighting },
  { value: "flying", label: "Flying", color: "#74aad0", icon: flying },
  { value: "poison", label: "Poison", color: "#9354cb", icon: poison },
  { value: "ground", label: "Ground", color: "#a4733c", icon: ground },
  { value: "rock", label: "Rock", color: "#a9a481", icon: rock },
  { value: "bug", label: "Bug", color: "#9f9f28", icon: bug },
  { value: "ghost", label: "Ghost", color: "#6f4570", icon: ghost },
  { value: "steel", label: "Steel", color: "#74b0cb", icon: steel },
  { value: "fire", label: "Fire", color: "#e4613e", icon: fire },
  { value: "water", label: "Water", color: "#3099e1", icon: water },
  { value: "grass", label: "Grass", color: "#439837", icon: grass },
  { value: "electric", label: "Electric", color: "#dfbc28", icon: electric },
  { value: "psychic", label: "Psychic", color: "#e96c8c", icon: psychic },
  { value: "ice", label: "Ice", color: "#47c8c8", icon: ice },
  { value: "dragon", label: "Dragon", color: "#576fbc", icon: dragon },
  { value: "dark", label: "Dark", color: "#4f4747", icon: dark },
  { value: "fairy", label: "Fairy", color: "#e18ce1", icon: fairy },
];
