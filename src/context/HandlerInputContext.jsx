import React, { useState, useRef } from 'react';

import { removeFirstZero } from '../utils/removeActions';
import { addCommas } from '../utils/addActions';
import {
  validateMinimumLength,
  validateLength,
  validateDecimalPoint,
  isANumber,
  isAgainAZeroBeforeThePointDecimal,
} from '../utils/validateActions';
import { delAction, resetAction, operationAction, equalAction } from '../utils/calculatorActions';

const Context = React.createContext({});

export function HandlerInputContextProvider({ children }) {
  const [keyword, setKeyword] = useState(0);
  const [clearInput, setClearInput] = useState(false);
  const [cleanStorage, setCleanStorage] = useState(false);
  const inputDisplay = useRef(null);

  const calculatorActions = ({ type, number, setClearInput }) => {
    if (type === 'DEL') delAction({ number, setKeyword });
    else if (type === 'RESET') resetAction({ setKeyword });
    else if (type === '+' || type === '-' || type === '/' || type === '*' || type === 'x')
      operationAction({ number, operation: type, setClearInput, setKeyword, cleanStorage, setCleanStorage });
    else if (type === '=') equalAction({ number, setKeyword, setClearInput, setCleanStorage });
    inputDisplay.current.focus();
  };

  const handleChange = (evt, newDigit, fromButton) => {
    if (clearInput && isANumber(newDigit)) {
      setKeyword(newDigit);
      return;
    }

    let number = 0;
    let action = '';
    try {
      number = evt.target.value; // Fron imput
    } catch (error) {
      action = !isANumber(newDigit) && newDigit;
      number = evt;

      if (action) {
        calculatorActions({ type: newDigit, number, setClearInput });
        return;
      }

      number = fromButton ? (number += newDigit) : newDigit;
    }

    if (newDigit === 'Enter') {
      calculatorActions({ type: '=', number, setClearInput });
      return;
    }

    number = addCommas(number);

    try {
      if (
        !validateLength(number) &&
        validateDecimalPoint(number) &&
        isANumber(number) &&
        isAgainAZeroBeforeThePointDecimal(number) &&
        validateMinimumLength(number)
      ) {
        number = removeFirstZero(number);
        setKeyword(number);
      } else {
        console.err('Error: Invalid number');
      }
    } catch (error) {
      console.err(error);
    }
    inputDisplay.current.focus();
  };

  return (
    <Context.Provider
      value={{
        keyword,
        setKeyword,
        handleChange,
        inputDisplay,
        clearInput,
        setClearInput,
      }}>
      {children}
    </Context.Provider>
  );
}

export default Context;
