export const pokemonTypes: Record<
  string,
  { label: string; color: string; sprite: { x: number; y: number } }
> = {
  normal: { label: "Normal", color: "#9fa19f", sprite: { x: 0, y: 0 } },
  fighting: { label: "Fighting", color: "#ff8101", sprite: { x: -64, y: 0 } },
  flying: { label: "Flying", color: "#81b9ef", sprite: { x: -128, y: 0 } },
  poison: { label: "Poison", color: "#9141cb", sprite: { x: -192, y: 0 } },
  ground: { label: "Ground", color: "#915121", sprite: { x: -256, y: 0 } },
  rock: { label: "Rock", color: "#afa981", sprite: { x: -320, y: 0 } },
  bug: { label: "Bug", color: "#91a119", sprite: { x: -384, y: 0 } },
  ghost: { label: "Ghost", color: "#704170", sprite: { x: -448, y: 0 } },
  steel: { label: "Steel", color: "#60a1b8", sprite: { x: -512, y: 0 } },
  fire: { label: "Fire", color: "#e62829", sprite: { x: 0, y: -64 } },
  water: { label: "Water", color: "#2980ef", sprite: { x: -64, y: -64 } },
  grass: { label: "Grass", color: "#3fa129", sprite: { x: -128, y: -64 } },
  electric: {
    label: "Electric",
    color: "#fac000",
    sprite: { x: -192, y: -64 },
  },
  psychic: { label: "Psychic", color: "#ef4179", sprite: { x: -256, y: -64 } },
  ice: { label: "Ice", color: "#3fd8ff", sprite: { x: -320, y: -64 } },
  dragon: { label: "Dragon", color: "#5060e1", sprite: { x: -384, y: -64 } },
  dark: { label: "Dark", color: "#50413f", sprite: { x: -448, y: -64 } },
  fairy: { label: "Fairy", color: "#ef70ef", sprite: { x: -512, y: -64 } },
};
