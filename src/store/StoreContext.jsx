import { createContext, useReducer } from 'react';
import { initialStore } from './initialStore.js';
import { storeReducer } from './storeReducer.js';

// eslint-disable-next-line
export const StoreContext = createContext(null);

export function StoreProvider({ children }) {

  const [store, dispatch] = useReducer(storeReducer, initialStore());

  return (
    <StoreContext.Provider value={{ store, dispatch }}>
      {children}
    </StoreContext.Provider>
  );
}
