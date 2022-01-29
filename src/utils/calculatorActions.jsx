import { addCommas } from './addActions';
import { removeCommas } from './removeActions';

export const delAction = ({ number, setKeyword }) => {
  let newValue = number.slice(0, number.length - 1);
  newValue = addCommas(newValue);
  setKeyword(newValue);
};

export const resetAction = ({ setKeyword }) => {
  const initState = 0;
  setKeyword(initState);
  clearStorage();
};

const executeOperation = ({ number, operation, beforeResult }) => {
  beforeResult = Number(beforeResult);
  number = Number(removeCommas(number.split('')).join(''));

  if (operation === '+') return Number(beforeResult + number);
  if (operation === '/') return Number(beforeResult / number);
  if (operation === 'x' || operation === '*') return Number(beforeResult * number);
  if (operation === '-') return Number(beforeResult - number);
};

export const operationAction = ({ number, operation, setClearInput, setKeyword, equal }) => {
  const beforeResult = localStorage.getItem('result');
  let result = executeOperation({ number, operation, beforeResult });

  if (beforeResult === null) {
    result = Number(removeCommas(number.split('')).join(''));
  } else if (!equal) {
    setKeyword(addCommas(String(result)));
  }

  localStorage.setItem('result', result);
  localStorage.setItem('lastAction', operation);
  setClearInput(true);

  return result;
};

export const equalAction = ({ number, setKeyword, setClearInput }) => {
  const operation = localStorage.getItem('lastAction');
  const result = operationAction({ number, operation, setClearInput, equal: true });
  setKeyword(addCommas(String(result)));
  clearStorage();
};

export const clearStorage = () => {
  localStorage.clear();
};
