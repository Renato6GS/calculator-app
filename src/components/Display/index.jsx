import React, { useEffect, useContext } from 'react';
import './styles.css';
import Context from 'context/HandlerInputContext';

export default function Display() {
  const { keyword, handleChange, inputDisplay } = useContext(Context);

  useEffect(() => {
    inputDisplay.current.focus();
  }, []);

  return (
    <div className='calculator--display'>
      <input
        type='text'
        name='display'
        id='display'
        placeholder='0'
        step='0.0001'
        max='9999999999'
        min='-9999999999'
        onChange={handleChange}
        value={keyword ?? 0}
        ref={inputDisplay}
        autoComplete='off'
      />
    </div>
  );
}
