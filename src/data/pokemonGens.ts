const baseUrl = "https://pokeapi.co/api/v2/generation";

export const pokemonGens: { name: string; url: string }[] = [
  { name: "generation-i", url: `${baseUrl}/1/` },
  { name: "generation-ii", url: `${baseUrl}/2/` },
  { name: "generation-iii", url: `${baseUrl}/3/` },
  { name: "generation-iv", url: `${baseUrl}/4/` },
  { name: "generation-v", url: `${baseUrl}/5/` },
  { name: "generation-vi", url: `${baseUrl}/6/` },
  { name: "generation-vii", url: `${baseUrl}/7/` },
  { name: "generation-viii", url: `${baseUrl}/8/` },
  { name: "generation-ix", url: `${baseUrl}/9/` },
];
