export interface ItemResource {
  id: number;
  name: string;
}

export interface AllItemsParams {
  generation?: string;
  type?: string;
  onlyStarred?: true;
  q?: string;
}

export interface PokemonDetailsParams {
  form?: number;
  displayShiny?: true;
  versionGroup?: number;
}
