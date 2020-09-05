import { useCallback, useState } from 'react';

const useInput = (initialState) => {
  const [state, setState] = useState(initialState);

  const handler = useCallback((e) => {
    setState(e.target.value);
  }, []);

  const cleaner = useCallback(() => {
    setState(initialState);
  }, [initialState]);

  return [state, handler, cleaner];
};

export default useInput;
