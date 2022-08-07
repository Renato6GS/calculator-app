import React from 'react';
import useDigits from '../../hooks/useDigits';
import Button from '../Button';
import './styles.css';

export default function ListOfButtons() {
  const [digits] = useDigits();

  return (
    <div className='calculator--container-buttons'>
      {digits.map((e) => {
        const className = e === 'DEL' ? 'btn btn-del' : 'btn';
        return <Button key={e} className={className} digit={e} />;
      })}
      <Button className='btn btn-reset' digit={'RESET'} />
      <Button className='btn btn-equal' digit={'='} />
    </div>
  );
}
