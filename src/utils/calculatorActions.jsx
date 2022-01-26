import { addCommas } from './addActions';

export const delAction = ({ number, setKeyword }) => {
  let newValue = number.slice(0, number.length - 1);
  newValue = addCommas(newValue);
  setKeyword(newValue);
};
