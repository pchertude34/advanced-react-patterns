import React, { useContext, createContext, useReducer } from 'react';
import { nameReducer, initialState } from './nameReducer';

const NameContext = createContext();

export function NameProvider(props) {
  const { children } = props;
  const [state, dispatch] = useReducer(nameReducer, initialState);

  return <NameContext.Provider value={{ state, dispatch }}>{children}</NameContext.Provider>;
}

export function useNameState() {
  return useContext(NameContext);
}
