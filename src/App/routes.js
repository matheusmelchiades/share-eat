import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Places from '../pages/Places';
import Plates from '../pages/Plates';
import FormPlate from '../pages/FormPlate';
import Layout from '../components/Layout';

export default function() {
  return (
    <Layout>
      <Switch>
        <Route path="/shareEat/places" component={Places} />
        <Route path="/shareEat/plates" component={Plates} />
        <Route path="/shareEat/forms/plates" component={FormPlate} />
        <Redirect from="*" to="/shareEat/places" />
      </Switch>
    </Layout>
  );
}
