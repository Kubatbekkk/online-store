import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';

import { createRoot } from 'react-dom/client';

import App from './App';
import { Api } from './Api';
import initProductListStore from './Store';

const rootEl = document.querySelector('#react-setup__root');

if (!rootEl) throw new Error('Cannot find react-setup__root');

const root = createRoot(rootEl);

const store = initProductListStore({ api: Api });

root.render(
  <React.StrictMode>
    <ChakraProvider>
      <App store={store} />
    </ChakraProvider>
  </React.StrictMode>,
);
