import React, { useEffect, useContext, useState } from 'react';
import './styles.css';
import Context from 'context/HandlerInputContext';

export default function Display() {
  const { keyword, handleChange, inputDisplay } = useContext(Context);
  const [disableInput, setDisableInput] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }

  useEffect(() => {
    inputDisplay.current.focus();
    localStorage.clear();
  }, []);

  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    setDisableInput(width < 830);

    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    };
  }, [window.innerWidth]);

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
        disabled={disableInput}
      />
    </div>
  );
}
