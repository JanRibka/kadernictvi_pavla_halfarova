import { useEffect, useRef, useState } from "react";

/**
 * Hook gets actial mouse position
 * @returns Actial mouse position
 */
const useMousePosition = () => {
  // References
  const effectRan = useRef<boolean>(false);

  // State
  const [mousePosition, setMousePosition] = useState<{
    x: number | null;
    y: number | null;
  }>({
    x: null,
    y: null,
  });

  // Other
  useEffect(() => {
    const updateMousePosition = (ev: MouseEvent) => {
      setMousePosition({ x: ev.clientX, y: ev.clientY });
    };

    if (
      process.env.REACT_APP_INSTANCE_NAME === "Prod" ||
      effectRan.current === true
    ) {
      window.addEventListener("mousemove", updateMousePosition);
    }

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      effectRan.current = true;
    };
  }, []);

  return mousePosition;
};
export default useMousePosition;
