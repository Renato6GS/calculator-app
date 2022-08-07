import { useEffect, useState } from 'react';

export default function useResizeWindow() {
  const [disableInput, setDisableInput] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    setDisableInput(width < 830);

    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    };
  }, [window.innerWidth]);

  return [disableInput];
}
