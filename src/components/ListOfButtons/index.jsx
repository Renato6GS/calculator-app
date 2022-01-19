import React from 'react';
import Button from '../Button';
import './styles.css';

const DIGITS = [7, 8, 9, 'DEL', 4, 5, 6, '+', 1, 2, 3, '-', '.', 0, '/', 'x'];

export default function ListOfButtons() {
  return (
    <div className='calculator--container-buttons'>
      {DIGITS.map((e) => {
        const className = e === 'DEL' ? 'btn btn-del' : 'btn';
        return <Button key={e} className={className} digit={e} />;
      })}
      <Button className='btn btn-reset' digit={'RESET'} />
      <Button className='btn btn-equal' digit={'='} />
    </div>
  );
}
