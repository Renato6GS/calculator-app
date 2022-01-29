import React, { useContext } from 'react';
import Context from 'context/HandlerInputContext';

import './styles.css';

export default function Button({ digit, className }) {
  const { keyword, handleChange, setClearInput } = useContext(Context);

  const handleClick = (e) => {
    const newDigit = e.target.value;
    const beforeValue = keyword ?? 0;
    setClearInput(false);
    handleChange(beforeValue, newDigit);
  };

  return (
    <button className={className} onClick={handleClick} value={digit}>
      {digit}
    </button>
  );
}
