import { useEffect, useState } from 'react';

const useIsOnline = () => {
  // State
  const [isOnLine, setIsOnline] = useState<boolean>(false);

  // Other
  /**
   * On initization set the isOnline state.
   */
  useEffect(() => {
    setIsOnline(navigator.onLine);
  }, []);

  /**
   * Event listener to update the state
   */
  window.addEventListener("online", () => {
    setIsOnline(true);
  });

  window.addEventListener("offline", () => {
    setIsOnline(false);
  });

  return isOnLine;
};

export default useIsOnline;
