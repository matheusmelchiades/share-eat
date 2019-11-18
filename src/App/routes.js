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
        <Route path="/share-eat/places" component={Places} />
        <Route path="/share-eat/plates" component={Plates} />
        <Route path="/share-eat/forms/plates" component={FormPlate} />
        <Redirect from="*" to="/share-eat/places" />
      </Switch>
    </Layout>
  );
}
