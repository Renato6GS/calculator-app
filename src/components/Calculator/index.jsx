import React from 'react';
import Display from '../Display';
import Header from '../Header';
import ListOfButtons from '../ListOfButtons';
import './styles.css';
import { HandlerInputContextProvider } from 'context/HandlerInputContext';

export default function Calculator() {
  return (
    <div className='calculator--container'>
      <Header />

      <HandlerInputContextProvider>
        <Display />

        <ListOfButtons />
      </HandlerInputContextProvider>
    </div>
  );
}
