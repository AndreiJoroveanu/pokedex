import physical from "/moveCategoryIcons/physical.png";
import special from "/moveCategoryIcons/special.png";
import status from "/moveCategoryIcons/status.png";

export const moveCategories: Record<
  string,
  { label: string; color: string; icon: string }
> = {
  physical: { label: "Physical", color: "#eb5628", icon: physical },
  special: { label: "Special", color: "#375ab2", icon: special },
  status: { label: "Status", color: "#828282", icon: status },
};
