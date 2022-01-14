import React from 'react';
import useLocalStorage from 'use-local-storage';
import './App.css';

function App() {
  const handleThemes = (currentTheme) => {
    if (currentTheme === 'theme-1') return 'theme-2';
    if (currentTheme === 'theme-2') return 'theme-3';
    if (currentTheme === 'theme-3') return 'theme-1';
  };

  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'theme-1' : 'theme-2');

  const switchTheme = () => {
    const newTheme = handleThemes(theme);
    setTheme(newTheme);
  };

  return (
    <div className='App' data-theme={theme}>
      <span>Easy darkmode and themes in react</span>
      <button onClick={switchTheme}>Switch to {theme === 'light' ? 'Dark' : 'Light'} Theme</button>
    </div>
  );
}

export default App;
