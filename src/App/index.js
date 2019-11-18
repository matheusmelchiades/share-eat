import React from 'react';
import ReactNotification from 'react-notifications-component';

import Routes from './routes';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import 'react-notifications-component/dist/theme.css';
import SplashScreen from '../pages/SplashScreen';

export default function() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={SplashScreen} />
        <Route path="/share-eat" component={Routes} />
      </Switch>
      <ReactNotification />
    </BrowserRouter>
  );
}
