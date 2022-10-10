import { useEffect, useState } from 'react';

/**
 * Hook gets current Y scroll position
 * @returns Scroll Y position
 */
const useScrollPosition = () => {
  //Consts
  const [scrollPosition, setScrollPosition] = useState<number>(0);

  // Other
  const UpdatePosition = () => {
    setScrollPosition(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", UpdatePosition);
    UpdatePosition();

    return () => window.removeEventListener("scroll", UpdatePosition);
  }, []);

  return scrollPosition;
};

export default useScrollPosition;
