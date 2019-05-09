import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';
import App from './pages/_app';
import { apolloClient } from './apolloClient';

const history = createBrowserHistory();

ReactDOM.render(
  <App history={history} apolloClient={apolloClient} />,
  document.getElementById('root')
);
