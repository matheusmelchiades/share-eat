import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import Places from '../pages/Places';
import Plates from '../pages/Plates';
import FormPlate from '../pages/FormPlate';

export default function() {
  return (
    <Router>
      <Switch>
        <Route path="/places" component={Places} />
        <Route path="/plates" component={Plates} />
        <Route path="/forms/plate" component={FormPlate} />
        <Redirect from="*" to="/places" />
      </Switch>
    </Router>
  );
}
