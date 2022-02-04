import React, { useState, useContext } from 'react';
import { RadioGroup } from '@headlessui/react';
import ThemeContext from '../../context/ThemeContext';
import './styles.css';

export default function Switch() {
  const { theme, setTheme } = useContext(ThemeContext);
  let [plan, setPlan] = useState(theme);

  const handleThemes = (currentTheme) => {
    return currentTheme === theme || currentTheme;
  };

  const switchTheme = (e) => {
    const newTheme = handleThemes(e);
    setTheme(newTheme);
    return newTheme;
  };

  const handlerChanges = (e) => {
    console.log(e);
    setPlan(e);
    switchTheme(e);
  };

  const getRangeValue = () => theme.slice(6, 7);

  const handleRange = (e) => {
    const { value } = e.target;
    setPlan('theme-' + value);
    switchTheme('theme-' + value);
  };

  return (
    <div className='switch'>
      <div className='container--label'>
        <p className='switch--label'>THEME</p>
      </div>
      <div className='switch-container'>
        <RadioGroup value={plan} onChange={(e) => handlerChanges(e)} className='toggle'>
          <RadioGroup.Option value='theme-1'>
            {({ checked }) => (
              <span className={checked ? 'switch--label-activate' : 'switch--label-desactivate'}>1</span>
            )}
          </RadioGroup.Option>
          <RadioGroup.Option value='theme-2'>
            {({ checked }) => (
              <span className={checked ? 'switch--label-activate' : 'switch--label-desactivate'}>2</span>
            )}
          </RadioGroup.Option>
          <RadioGroup.Option value='theme-3'>
            {({ checked }) => (
              <span className={checked ? 'switch--label-activate' : 'switch--label-desactivate'}>3</span>
            )}
          </RadioGroup.Option>
        </RadioGroup>
        <span className={'container-circle'} id='container'>
          <input
            type='range'
            className='switch--range'
            name='range'
            id='range'
            min='1'
            max='3'
            step='1'
            value={getRangeValue()}
            onChange={handleRange}
          />
        </span>
      </div>
    </div>
  );
}
