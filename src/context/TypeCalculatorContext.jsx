import React, { useState, createContext } from 'react';

const Context = createContext({});

export function HandlerTypeCalculatorContextProvider({ children }) {
  const [typeCalculator, setTypeCalculator] = useState(false);

  return (
    <Context.Provider
      value={{
        typeCalculator,
        setTypeCalculator,
      }}>
      {children}
    </Context.Provider>
  );
}

export default Context;
