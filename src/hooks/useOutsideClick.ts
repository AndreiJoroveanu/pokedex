import { useEffect, useRef } from "react";

export const useOutsideClick = (handler: () => void) => {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Event handler to check if a click happened outside the ref'd element
    const handleClick = (e: MouseEvent) =>
      ref.current && !ref.current.contains(e.target as Node) && handler();

    // Add the event handler when the component calling this hook mounts
    document.addEventListener("click", handleClick);
    // Remove the event handler when the component unmounts
    return () => document.removeEventListener("click", handleClick);
  }, [handler]);

  return ref;
};
