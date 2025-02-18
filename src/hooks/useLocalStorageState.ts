import { useEffect, useState } from "react";

export const useLocalStorageState = <T>(initialState: T, key: string) => {
  const [value, setValue] = useState<T>(
    // Get the initial state from localStorage
    (JSON.parse(localStorage.getItem(key)!) as T) ?? initialState,
  );

  useEffect(() => {
    // Set the variable into localStorage when the state changes
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);

  return [value, setValue] as const;
};
