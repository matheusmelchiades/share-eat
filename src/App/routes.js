import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Places from '../pages/Places';
import Plates from '../pages/Plates';
import FormPlate from '../pages/FormPlate';

export default function() {
  return (
    <Switch>
      <Route path="/places" component={Places} />
      <Route path="/plates" component={Plates} />
      <Route path="/forms/plates" component={FormPlate} />
      <Redirect from="*" to="/places" />
    </Switch>
  );
}
