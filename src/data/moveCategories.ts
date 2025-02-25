import physical from "/moveCategoryIcons/physical.png";
import special from "/moveCategoryIcons/special.png";
import status from "/moveCategoryIcons/status.png";

export const moveCategories: {
  value: string;
  label: string;
  color: string;
  icon: string;
}[] = [
  { value: "physical", label: "Physical", color: "#eb5628", icon: physical },
  { value: "special", label: "Special", color: "#375ab2", icon: special },
  { value: "status", label: "Status", color: "#828282", icon: status },
];
