import { useEffect, useRef } from "react";

export const useOutsideClick = (handler: () => void) => {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClick = (e: MouseEvent) =>
      ref.current && !ref.current.contains(e.target as Node) && handler();

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [handler]);

  return ref;
};
