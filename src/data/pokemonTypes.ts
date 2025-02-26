export const pokemonTypes: Record<
  string,
  { label: string; color: string; sprite: { x: number; y: number } }
> = {
  normal: { label: "Normal", color: "#9fa19f", sprite: { x: 0, y: 0 } },
  fighting: { label: "Fighting", color: "#ff8101", sprite: { x: -40, y: 0 } },
  flying: { label: "Flying", color: "#81b9ef", sprite: { x: 0, y: -40 } },
  poison: { label: "Poison", color: "#9141cb", sprite: { x: -40, y: -40 } },
  ground: { label: "Ground", color: "#915121", sprite: { x: -80, y: 0 } },
  rock: { label: "Rock", color: "#afa981", sprite: { x: -80, y: -40 } },
  bug: { label: "Bug", color: "#91a119", sprite: { x: 0, y: -80 } },
  ghost: { label: "Ghost", color: "#704170", sprite: { x: -40, y: -80 } },
  steel: { label: "Steel", color: "#60a1b8", sprite: { x: -80, y: -80 } },
  fire: { label: "Fire", color: "#e62829", sprite: { x: -120, y: 0 } },
  water: { label: "Water", color: "#2980ef", sprite: { x: -120, y: -40 } },
  grass: { label: "Grass", color: "#3fa129", sprite: { x: -120, y: -80 } },
  electric: { label: "Electric", color: "#fac000", sprite: { x: 0, y: -120 } },
  psychic: { label: "Psychic", color: "#ef4179", sprite: { x: -40, y: -120 } },
  ice: { label: "Ice", color: "#3fd8ff", sprite: { x: -80, y: -120 } },
  dragon: { label: "Dragon", color: "#5060e1", sprite: { x: -120, y: -120 } },
  dark: { label: "Dark", color: "#50413f", sprite: { x: -160, y: 0 } },
  fairy: { label: "Fairy", color: "#ef70ef", sprite: { x: -160, y: -40 } },
};
