import { removeCommas } from './removeActions';

export const addCommas = (number) => {
  let isNegative = false;
  if (number.startsWith('-')) {
    number = number.slice(1, number.length);
    isNegative = true;
  }

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
  isNegative && result.unshift('-');
  return result.join('');
};
