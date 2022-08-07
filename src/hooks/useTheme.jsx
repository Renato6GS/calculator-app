import { useEffect, useState } from 'react';

export default function useTheme() {
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const storedTheme = localStorage.getItem('THEME');

  const [theme, setTheme] = useState(storedTheme || (defaultDark ? 'theme-1' : 'theme-2'));
  const value = { theme, setTheme };

  useEffect(() => {
    localStorage.setItem('THEME', theme);
  }, [theme]);

  return { theme, value };
}
