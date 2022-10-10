import { useEffect, useRef } from 'react';

/**
 * Hook gets previous value from current value
 * @param value
 * @returns Previous value
 */
const usePrevious = <T>(value: T): T | undefined => {
  // Consts
  const ref = useRef<T>();

  // Other
  useEffect(() => {
    ref.current = value;
  });

  return ref.current;
};

export default usePrevious;
