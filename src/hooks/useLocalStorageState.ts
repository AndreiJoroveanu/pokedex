import { useEffect, useState } from "react";

export const useLocalStorageState = <T>(initialState: T, key: string) => {
  const [value, setValue] = useState<T>(
    (JSON.parse(localStorage.getItem(key)!) as T) ?? initialState,
  );

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);

  return [value, setValue] as const;
};
