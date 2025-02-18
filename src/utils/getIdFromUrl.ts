export const getIdFromUrl = (url: string | undefined) =>
  /https:\/\/pokeapi\.co\/api\/v2\/[^/]+\/(\d+)\//.exec(url ?? "")?.[1] ?? null;
