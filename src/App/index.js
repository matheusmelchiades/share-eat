import React from 'react';

import Routes from './routes';
import Layout from '../components/Layout';

import { BrowserRouter } from 'react-router-dom';

export default function() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes />
      </Layout>
    </BrowserRouter>
  );
}
