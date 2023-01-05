import React from 'react';
import './style.css';
import { Route, Router, Switch } from 'wouter';
import HomePage from './Pages/HomePage';
import CartPage from './Pages/CartPage';
import NotFoundPage from './Pages/NotFoundPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={HomePage} />
        <Route path="/cart" component={CartPage} />
        <Route path="/:rest*" component={NotFoundPage} />
      </Switch>
    </Router>
  );
}

export default App;
