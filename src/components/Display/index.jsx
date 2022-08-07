import React, { useContext } from 'react';
import './styles.css';
import Context from 'context/HandlerInputContext';
import { isANumber } from 'utils/validateActions';
import { delAction } from '../../utils/calculatorActions';
import useFocus from '../../hooks/useFocus';
import useResizeWindow from '../../hooks/useResizeWindow';

export default function Display() {
  const { keyword, handleChange, inputDisplay, clearInput, setClearInput, setKeyword } = useContext(Context);
  const [disableInput] = useResizeWindow();
  useFocus({ inputDisplay });

  const handleKeyDown = (event) => {
    const { key } = event;
    const { value } = event.target;
    const FILL = 0;

    if (key === 'Enter') {
      handleChange(event, 'Enter');
    } else if (isANumber(key) && clearInput) {
      handleChange(FILL, key);
      setClearInput(false);
    } else if (isANumber(key)) {
      handleChange(FILL, keyword + key);
    } else if (key === '+' || key === '*' || key === '/' || key === '-') {
      setClearInput(true);
      handleChange(value, key);
    } else if (key === 'Backspace') {
      delAction({ number: keyword, setKeyword });
    }
  };

  const handleChangeDisplay = () => {};

  return (
    <div className='calculator--display'>
      <input
        type='text'
        name='display'
        id='display'
        placeholder='0'
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
