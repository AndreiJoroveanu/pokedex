const baseUrl = "https://pokeapi.co/api/v2/type";

export const pokemonTypes: { name: string; url: string }[] = [
  { name: "normal", url: `${baseUrl}/1/` },
  { name: "fighting", url: `${baseUrl}/2/` },
  { name: "flying", url: `${baseUrl}/3/` },
  { name: "poison", url: `${baseUrl}/4/` },
  { name: "ground", url: `${baseUrl}/5/` },
  { name: "rock", url: `${baseUrl}/6/` },
  { name: "bug", url: `${baseUrl}/7/` },
  { name: "ghost", url: `${baseUrl}/8/` },
  { name: "steel", url: `${baseUrl}/9/` },
  { name: "fire", url: `${baseUrl}/10/` },
  { name: "water", url: `${baseUrl}/11/` },
  { name: "grass", url: `${baseUrl}/12/` },
  { name: "electric", url: `${baseUrl}/13/` },
  { name: "psychic", url: `${baseUrl}/14/` },
  { name: "ice", url: `${baseUrl}/15/` },
  { name: "dragon", url: `${baseUrl}/16/` },
  { name: "dark", url: `${baseUrl}/17/` },
  { name: "fairy", url: `${baseUrl}/18/` },
];
