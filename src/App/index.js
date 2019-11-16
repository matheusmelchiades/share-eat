import React from 'react';
import ReactNotification from 'react-notifications-component';

import Routes from './routes';
import Layout from '../components/Layout';

import { BrowserRouter } from 'react-router-dom';
import 'react-notifications-component/dist/theme.css';

export default function() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes />
      </Layout>
      <ReactNotification />
    </BrowserRouter>
  );
}
