/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import './style.css';
import { Route, Router, Switch } from 'wouter';
import HomePage from './Pages/HomePage';
import CartPage from './Pages/CartPage';
import NotFoundPage from './Pages/NotFoundPage';
import { StoreType } from './Store';
import { StoreProvider } from './contexts/StoreContext';

function App({ store }: { store: StoreType }) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars

  return (
    <StoreProvider value={store}>
      <Router>
        <Switch>
          <Route path="/" component={HomePage} />
          <Route path="/cart" component={CartPage} />
          <Route path="/:rest*" component={NotFoundPage} />
        </Switch>
      </Router>
    </StoreProvider>
  );
}

export default App;
