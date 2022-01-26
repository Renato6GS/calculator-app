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
import { delAction } from '../utils/calculatorActions';

const Context = React.createContext({});

export function HandlerInputContextProvider({ children }) {
  const [keyword, setKeyword] = useState(0);
  const inputDisplay = useRef(null);

  const calculatorActions = ({ type, number }) => {
    // number = removeCommas(number.split('')).join('');
    // number = removePoints(number.split('')).join('');
    if (type === 'DEL') delAction({ number, setKeyword });

    inputDisplay.current.focus();
  };

  const handleChange = (evt, newDigit) => {
    let number = 0;
    let action = '';
    try {
      number = evt.target.value; // Fron imput
    } catch (error) {
      action = !isANumber(newDigit) && newDigit;
      number = evt;

      if (action) {
        calculatorActions({ type: newDigit, number });
        return;
      }

      number += newDigit; // From button
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

      // TODO: No podemos borrar el último dígito. Hagamos el button Del y quizás sepamos como hacerlo
    }
    inputDisplay.current.focus();
  };

  return (
    <Context.Provider
      value={{
        keyword,
        handleChange,
        inputDisplay,
      }}>
      {children}
    </Context.Provider>
  );
}

export default Context;
