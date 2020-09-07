import React, { useContext, createContext, useReducer } from 'react';
import { countReducer, initialState } from './countReducer';

const CountContext = createContext();

export function CountProvider(props) {
  const { children } = props;
  const [state, dispatch] = useReducer(countReducer, initialState);

  return <CountContext.Provider value={{ state, dispatch }}>{children}</CountContext.Provider>;
}

export function useCountState() {
  return useContext(CountContext);
}
