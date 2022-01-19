import React from 'react';
import Switch from 'components/Switch';
import './styles.css';

export default function Header() {
  return (
    <header className='calculator--header'>
      <h1 className='calculator--title'>calc</h1>
      <Switch />
    </header>
  );
}
