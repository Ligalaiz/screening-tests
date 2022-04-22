import { useReducer } from 'react';

const useForceUpdate = () => {
  const [_, forceUpdate] = useReducer((x) => x + 1, 0);
  return forceUpdate;
};

export { useForceUpdate };
