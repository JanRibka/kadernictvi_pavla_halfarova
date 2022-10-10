import { useEffect, useRef } from 'react';

/**
 * Hook gets previous value from current value
 * @param pValue
 * @returns Previous value
 */
const usePrevious = <T>(pValue: T): T | undefined => {
  // Consts
  const ref = useRef<T>();

  // Other
  useEffect(() => {
    ref.current = pValue;
  });

  return ref.current;
};

export default usePrevious;
