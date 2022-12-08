import { useEffect, useRef, useState } from "react";

const useIsOnline = () => {
  // References
  const effectRan = useRef<boolean>(false);

  // State
  const [isOnLine, setIsOnline] = useState<boolean>(false);

  // Other
  /**
   * On initization set the isOnline state.
   */
  useEffect(() => {
    if (
      process.env.REACT_APP_INSTANCE_NAME === "Prod" ||
      effectRan.current === true
    ) {
      setIsOnline(navigator.onLine);
    }

    return () => {
      effectRan.current = true;
    };
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
