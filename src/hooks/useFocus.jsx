import { useEffect } from 'react';

export default function useFocus({ inputDisplay }) {
  useEffect(() => {
    inputDisplay.current.focus();
    localStorage.clear();
  }, []);
}
