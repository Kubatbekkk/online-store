import { createContext } from 'react';

export const StoreContext = createContext(null);
export const { Provider: StoreProvider } = StoreContext;
