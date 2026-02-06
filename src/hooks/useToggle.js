import { useState, useCallback } from 'react';

/**
 * Custom hook for boolean toggle state
 * @param {boolean} [initialValue=false]
 * @returns {[boolean, () => void, (value: boolean) => void]}
 */
export function useToggle(initialValue = false) {
  const [value, setValue] = useState(initialValue);

  const toggle = useCallback(() => setValue((v) => !v), []);
  const setValueDirectly = useCallback((newValue) => setValue(newValue), []);

  return [value, toggle, setValueDirectly];
}
