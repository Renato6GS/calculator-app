import React, { useState, useContext } from 'react';
import { RadioGroup } from '@headlessui/react';
import ThemeContext from '../../context/ThemeContext';
import './styles.css';

export default function Switch() {
  let [plan, setPlan] = useState('theme-1');
  const { theme, setTheme } = useContext(ThemeContext);

  const handleThemes = (currentTheme) => {
    return currentTheme === theme || currentTheme;
  };

  const switchTheme = (e) => {
    const newTheme = handleThemes(e);
    setTheme(newTheme);
    return newTheme;
  };

  const handlerChanges = (e) => {
    setPlan(e);
    switchTheme(e);
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
        {console.log(plan)}
        <span className={'container-circle'} id='container'>
          <span
            className={`circle ${plan === 'theme-1' ? 'position-1' : plan === 'theme-2' ? 'position-2' : 'position-3'}`}
            id='circle'></span>
        </span>
      </div>
    </div>
  );
}
