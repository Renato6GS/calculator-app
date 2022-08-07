import React from 'react';
import './App.css';
import Calculator from './components/Calculator';
import ThemeContext from './context/ThemeContext';
import useTheme from './hooks/useTheme';

function App() {
  const { value, theme } = useTheme();

  return (
    <ThemeContext.Provider value={value}>
      <div className='App' data-theme={theme}>
        <Calculator />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
