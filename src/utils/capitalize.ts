export const capitalize = (string: string) =>
  string
    .replace(/-+/g, " ")
    .trim()
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");
