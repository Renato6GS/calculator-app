import React, { useState } from 'react';

const Context = React.createContext({});

export function ButtonContextProvider({ children }) {
  const [keyword, setKeyword] = useState(0);

  const removeCommas = (number) => number.filter((n) => n !== ',');
  const removePoints = (number) => number.filter((n) => n !== '.');

  const validateLength = (number) => {
    number = removeCommas(number.split('')).join('');
    number = removePoints(number.split('')).join('');
    return number >= 9999999999 || number <= -9999999999;
  };

  const addCommas = (number) => {
    let arr = removeCommas(number.split(''));
    let result = [];
    let addComma = 3;
    let afterPoint = [];
    const point = arr.indexOf('.');
    const comma = ',';

    point !== -1 && (afterPoint = arr.splice(point));
    arr = arr.reverse();

    arr.forEach((num, index) => {
      if (index === addComma) {
        result.push(comma);
        addComma += 3;
      }
      result.push(num);
    });

    result = result.reverse();
    result.push(afterPoint.join(''));
    return result.join('');
  };

  const checkDecimalPoint = (number) => {
    let points = 0;
    [...number].forEach((n) => n === '.' && points++);
    return points <= 1;
  };

  const isANumber = (number) => {
    const rex = /^[0-9\b]+$/;
    const dot = /\./;
    number = removeCommas(number.split('')).join('');
    number = removePoints(number.split('')).join('');
    return rex.test(number) || dot.test(number) || number.length === 0;
  };

  const handleChange = (evt) => {
    let number = 0;
    try {
      number = evt.target.value; // Fron imput
    } catch (error) {
      number = evt; // From button
    }

    number = addCommas(number);

    if (!validateLength(number) && checkDecimalPoint(number) && isANumber(number)) {
      setKeyword(number);
    } else {
      evt.target.value = evt.target.value.slice(0, evt.target.maxLength);
    }
  };

  return (
    <Context.Provider
      value={{
        keyword,
        handleChange,
      }}>
      {children}
    </Context.Provider>
  );
}

export default Context;
