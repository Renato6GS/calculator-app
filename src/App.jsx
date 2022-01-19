import React, { useState } from 'react';
import './App.css';
import Calculator from './components/Calculator';
import ThemeContext from './context/ThemeContext';

function App() {
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  const [theme, setTheme] = useState(defaultDark ? 'theme-1' : 'theme-3');
  const value = { theme, setTheme };

  return (
    <ThemeContext.Provider value={value}>
      <div className='App' data-theme={theme}>
        <Calculator />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
