import React from 'react';
import Display from '../Display';
import Header from '../Header';
import ListOfButtons from '../ListOfButtons';
import './styles.css';
import { ButtonContextProvider } from 'context/ButtonContext';

export default function Calculator() {
  return (
    <div className='calculator--container'>
      <Header />

      <ButtonContextProvider>
        <Display />

        <ListOfButtons />
      </ButtonContextProvider>
    </div>
  );
}
