import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import RepositoriesPage from './pages/RepositoriesPage';

export default function RoutesR() {
  return (
    <Router>
      <Switch>
        <Route path="/:login/repositories">
          <RepositoriesPage />
        </Route>
        <Route path="/">
          <MainPage />
        </Route>
      </Switch>
    </Router>
  );
}
