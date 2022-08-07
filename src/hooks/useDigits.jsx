import { useEffect, useContext, useState } from 'react';
import { DIGITS_NORMAL } from '../constants/DIGITS_NORMAL';
import { DIGITS_SCIENTIFIC } from '../constants/DIGITS_SCIENTIFIC';
import Context from 'context/TypeCalculatorContext';

export default function useDigits() {
  const [digits, setDigits] = useState([]);
  const { typeCalculator } = useContext(Context);

  useEffect(() => {
    const data = typeCalculator ? DIGITS_SCIENTIFIC : DIGITS_NORMAL;
    setDigits(data);
  }, [typeCalculator]);

  return [digits];
}
