export interface ItemResource {
  id: number;
  name: string;
}

export interface AllItemsParams {
  generation?: string;
  type?: string;
  onlyStarred?: true;
  q?: string;
  isGenPanelOpen?: true;
  isTypePanelOpen?: true;
}

export interface PokemonDetailsParams {
  form?: number;
  displayShiny?: true;
  versionGroup?: number;
  isDexEntriesPanelOpen?: true;
  isLearnsetPanelOpen?: true;
  isLocationsPanelOpen?: true;
}

export interface MoveDetailsParams {
  isDescriptionsPanelOpen?: true;
}
