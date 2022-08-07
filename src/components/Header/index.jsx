import React, { useContext } from 'react';
import SwitchTheme from 'components/SwitchTheme';
import './styles.css';
import { Switch } from '@headlessui/react';
import Context from 'context/TypeCalculatorContext';

export default function Header() {
  const { typeCalculator, setTypeCalculator } = useContext(Context);

  return (
    <header className='calculator--header'>
      <Switch checked={typeCalculator} onChange={setTypeCalculator} className='calculator--toggle'>
        <h1 className='calculator--title'>
          calc <img className='calculator--switch' src='../../icons/switch-vertical.svg' alt='' />
        </h1>
      </Switch>
      <SwitchTheme />
    </header>
  );
}
