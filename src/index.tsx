import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';

import { createRoot } from 'react-dom/client';

import App from './App';

const rootEl = document.querySelector('#react-setup__root');

if (!rootEl) throw new Error('Cannot find react-setup__root');

const root = createRoot(rootEl);

root.render(
  <React.StrictMode>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
);
