export const getIdFromUrl = (url: string | undefined) =>
  Number(
    /https:\/\/pokeapi\.co\/api\/v2\/[^/]+\/(\d+)\//.exec(url ?? "")?.[1],
  ) || undefined;
