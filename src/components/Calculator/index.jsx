import React from 'react';
import Display from '../Display';
import Header from '../Header';
import ListOfButtons from '../ListOfButtons';
import './styles.css';

export default function Calculator() {
  return (
    <div className='calculator--container'>
      <Header />

      <Display />

      <ListOfButtons />
    </div>
  );
}
