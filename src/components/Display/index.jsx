import React, { useEffect, useContext, useState } from 'react';
import './styles.css';
import Context from 'context/HandlerInputContext';
import { isANumber } from 'utils/validateActions';

export default function Display() {
  const { keyword, handleChange, inputDisplay, clearInput, setClearInput } = useContext(Context);
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

  const [isReady, setIsReady] = useState(false);

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleChange(event, 'Enter');
      return;
    } else if (isANumber(event.key) && clearInput) {
      handleChange(0, event.key);
      setIsReady(true);
      return;
    } else if (event.key === '+' || event.key === '*' || event.key === '/' || event.key === '-') {
      handleChange(event.target.value, event.key);
    }
  };

  const handleChangeDisplay = (e) => {
    if (!clearInput) {
      handleChange(e);
      setIsReady(false);
    }
    if (isReady) {
      setClearInput(false);
    }
  };

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
        onChange={handleChangeDisplay}
        value={keyword ?? 0}
        ref={inputDisplay}
        autoComplete='off'
        disabled={disableInput}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
}
