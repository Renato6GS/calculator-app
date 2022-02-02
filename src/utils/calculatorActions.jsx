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
  let result = 0;
  const error = number === 0 && operation === '/' && 'Err: Divided by zero';

  if (operation === '+') result = Number(beforeResult + number);
  if (operation === '/') result = Number(beforeResult / number);
  if (operation === 'x' || operation === '*') result = Number(beforeResult * number);
  if (operation === '-') result = Number(beforeResult - number);

  return { result, error };
};

export const operationAction = ({
  number,
  operation,
  setClearInput,
  setKeyword,
  equal,
  cleanStorage,
  setCleanStorage,
}) => {
  if (cleanStorage) {
    setCleanStorage(false);
    clearStorage();
  }

  const beforeOperation = localStorage.getItem('lastAction') === null ? operation : localStorage.getItem('lastAction');
  const beforeResult = localStorage.getItem('result');
  let { result, error } = executeOperation({ number, operation: beforeOperation, beforeResult });

  if (beforeResult === null) {
    result = Number(removeCommas(number.split('')).join(''));
  } else if (!equal) {
    setKeyword(addCommas(String(result)));
  }

  localStorage.setItem('result', result);
  localStorage.setItem('lastAction', operation);
  setClearInput(true);

  return { result, error };
};

export const equalAction = ({ number, setKeyword, setClearInput, setCleanStorage }) => {
  const operation = localStorage.getItem('lastAction');

  if (localStorage.getItem('lastNumber') === null) {
    localStorage.setItem('lastNumber', number);
  } else {
    number = localStorage.getItem('lastNumber');
  }

  const { result, error } = operationAction({ number, operation, setClearInput, equal: true });

  setKeyword(error || addCommas(String(result)));
  setCleanStorage(true);
};

export const clearStorage = () => {
  // localStorage.clear();
  localStorage.removeItem('result');
  localStorage.removeItem('lastAction');
  localStorage.removeItem('lastNumber');
};
