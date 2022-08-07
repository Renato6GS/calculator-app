import React from 'react';
import Display from '../Display';
import Header from '../Header';
import ListOfButtons from '../ListOfButtons';
import './styles.css';
import { HandlerInputContextProvider } from 'context/HandlerInputContext';
import { HandlerTypeCalculatorContextProvider } from 'context/TypeCalculatorContext';

export default function Calculator() {
  return (
    <div className='calculator--container'>
      <HandlerTypeCalculatorContextProvider>
        <Header />

        <HandlerInputContextProvider>
          <Display />

          <ListOfButtons />
        </HandlerInputContextProvider>
      </HandlerTypeCalculatorContextProvider>
    </div>
  );
}
