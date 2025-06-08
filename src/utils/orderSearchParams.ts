export const orderSearchParams = <T extends object>(
  rawParams: Partial<T>,
  order: (keyof T)[],
): Partial<T> => {
  const orderedParams: Partial<T> = {};

  order.forEach((key) => (orderedParams[key] = rawParams[key]));

  return orderedParams;
};
