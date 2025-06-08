export const orderSearchParams = <T extends object>(
  rawParams: Partial<T>,
  order: (keyof T)[],
): Partial<T> => {
  const orderedParams: Partial<T> = {};

  order.forEach((key) => {
    const value = rawParams[key];
    if (value !== undefined) orderedParams[key] = value;
  });

  return orderedParams;
};
