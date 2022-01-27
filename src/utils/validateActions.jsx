import { removeCommas, removeDots } from './removeActions';

export const validateMinimumLength = (number) => number.length >= 1;

export const validateLength = (number) => {
  number = removeCommas(number.split('')).join('');
  number = removeDots(number.split('')).join('');
  return number >= 9999999999 || number <= -9999999999;
};

export const validateDecimalPoint = (number) => {
  let points = 0;
  [...number].forEach((n) => n === '.' && points++);
  return points <= 1;
};

export const isANumber = (number) => {
  const re = /^[0-9\b]+$/;
  const dot = /\./;
  number = removeCommas(number.split('')).join('');
  number = removeDots(number.split('')).join('');
  return re.test(number) || dot.test(number) || number.length === 0;
};

export const isAgainAZeroBeforeThePointDecimal = (number) => {
  const arr = removeCommas(number.split(''));
  const zero = number[0];
  const secondValue = number[1];
  const point = arr.indexOf('.');
  if (zero === '0' && point === -1 && secondValue === '0') return false;
  return true;
};
