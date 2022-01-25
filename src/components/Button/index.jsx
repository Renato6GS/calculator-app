import React, { useContext } from 'react';
import Context from 'context/ButtonContext';

import './styles.css';

export default function Button({ digit, className }) {
  const { keyword, handleChange } = useContext(Context);

  const handleClick = (e) => {
    handleChange(keyword + e.target.value);
  };

  return (
    <button className={className} onClick={handleClick} value={digit}>
      {digit}
    </button>
  );
}
