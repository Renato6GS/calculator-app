import React, { useEffect, useContext } from 'react';
import './styles.css';
import Context from 'context/ButtonContext';

export default function Display() {
  const { keyword, handleChange, inputDisplay } = useContext(Context);

  useEffect(() => {
    inputDisplay.current.focus();
  }, []);

  // TODO: que los botones funcionen más un efecto de hover y presionado.
  // TODO: al presionar los números desde el teclado, los botones se hagan un efecto de ser presionados
  // TODO: sumar, restar, dividir y multiplicar. Quizás mostrar un pequeño íncono de lo que se está haciendo
  // TODO: Para moviles, deshabilitar el input y que tenga que usar los botones de la calculador para ingresar

  return (
    <div className='calculator--display'>
      <input
        type='text'
        name='display'
        id='display'
        placeholder='0'
        step='0.0001'
        max='9999999999'
        min='-9999999999'
        onChange={handleChange}
        value={keyword ?? 0}
        ref={inputDisplay}
      />
    </div>
  );
}
