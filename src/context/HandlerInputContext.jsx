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
  const inputDisplay = useRef(null);

  const calculatorActions = ({ type, number, setClearInput }) => {
    if (type === 'DEL') delAction({ number, setKeyword });
    else if (type === 'RESET') resetAction({ setKeyword });
    else if (type === '+') operationAction({ number, operation: type, setClearInput, setKeyword });
    else if (type === '-') operationAction({ number, operation: type, setClearInput, setKeyword });
    else if (type === '/') operationAction({ number, operation: type, setClearInput, setKeyword });
    else if (type === 'x' || type === '*') operationAction({ number, operation: type, setClearInput, setKeyword });
    else if (type === '=') equalAction({ number, setKeyword, setClearInput });
    inputDisplay.current.focus();
  };

  const handleChange = (evt, newDigit) => {
    if (clearInput && isANumber(newDigit)) {
      setKeyword(newDigit);
      // setClearInput(false);
      return;
    }

    let number = 0;
    let action = '';
    try {
      number = evt.target.value; // Fron imput
      // number = evt.key; // Fron imput
    } catch (error) {
      action = !isANumber(newDigit) && newDigit;
      number = evt;

      if (action) {
        calculatorActions({ type: newDigit, number, setClearInput });
        return;
      }

      number += newDigit; // From button
    }

    if (newDigit === 'Enter') {
      calculatorActions({ type: '=', number, setClearInput });
      return;
    }

    number = addCommas(number);

    if (
      !validateLength(number) &&
      validateDecimalPoint(number) &&
      isANumber(number) &&
      isAgainAZeroBeforeThePointDecimal(number) &&
      validateMinimumLength(number)
    ) {
      number = removeFirstZero(number);
      setKeyword(number);
    }
    inputDisplay.current.focus();
  };

  return (
    <Context.Provider
      value={{
        keyword,
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
