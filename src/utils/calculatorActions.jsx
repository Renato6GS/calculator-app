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

  // console.log({ beforeOperation });

  console.log(localStorage.getItem('lastAction'));

  const beforeResult = localStorage.getItem('result');
  // let result = executeOperation({ number, operation, beforeResult });
  let result = executeOperation({ number, operation: beforeOperation, beforeResult });

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

export const equalAction = ({ number, setKeyword, setClearInput, setCleanStorage }) => {
  const operation = localStorage.getItem('lastAction');

  if (localStorage.getItem('lastNumber') === null) {
    localStorage.setItem('lastNumber', number);
  } else {
    number = localStorage.getItem('lastNumber');
  }

  const result = operationAction({ number, operation, setClearInput, equal: true });
  setKeyword(addCommas(String(result)));
  setCleanStorage(true);
};

export const clearStorage = () => {
  localStorage.clear();
};

// TODO: Delete last digit and change it for 0
// TODO: Concatenacion operation
