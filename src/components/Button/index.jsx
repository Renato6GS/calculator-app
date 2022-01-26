import React, { useContext } from 'react';
import Context from 'context/ButtonContext';

import './styles.css';

export default function Button({ digit, className }) {
  const { keyword, handleChange, inputDisplay } = useContext(Context);

  const handleClick = (e) => {
    const newDigit = e.target.value;
    const beforeValue = keyword ?? 0;
    handleChange(beforeValue, newDigit);
    inputDisplay;
  };

  return (
    <button className={className} onClick={handleClick} value={digit}>
      {digit}
    </button>
  );
}
