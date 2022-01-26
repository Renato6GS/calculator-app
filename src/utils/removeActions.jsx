export const removeDots = (number) => number.filter((n) => n !== '.');
export const removeCommas = (number) => number.filter((n) => n !== ',');

export const removeFirstZero = (number) => {
  const arr = removeCommas(number.split(''));
  const zero = arr[0];
  const secondNumber = arr[1];

  if (zero === '0' && secondNumber !== '.') return secondNumber;
  return number;
};
