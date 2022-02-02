import React, { useState, useEffect } from 'react';
import './App.css';
import Calculator from './components/Calculator';
import ThemeContext from './context/ThemeContext';

function App() {
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const storedTheme = localStorage.getItem('THEME');

  const [theme, setTheme] = useState(storedTheme || (defaultDark ? 'theme-1' : 'theme-2'));
  const value = { theme, setTheme };

  useEffect(() => {
    localStorage.setItem('THEME', theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={value}>
      <div className='App' data-theme={theme}>
        <Calculator />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
