import React, { useEffect } from 'react';
import useLocalStorage from '../hooks/useLocalStorage.js';

export const useDarkMode = () => {
  const [mode, setMode] = useLocalStorage('darkMode');

  useEffect(() => {
    if (mode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [mode]);
  return [mode, setMode];
}