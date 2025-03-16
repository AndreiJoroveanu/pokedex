export const moveCategories: Record<
  string,
  { label: string; color: string; sprite: { x: number } }
> = {
  physical: { label: "Physical", color: "#eb5628", sprite: { x: 0 } },
  special: { label: "Special", color: "#4a68d3", sprite: { x: -50 } },
  status: { label: "Status", color: "#828282", sprite: { x: -100 } },
};
