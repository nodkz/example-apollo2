import React, { Component } from 'react';
import { History } from 'history';
import { Container } from 'react-bootstrap';
import { Router } from 'react-router-dom';
import Menu from '../components/Menu';
import AppRoute from './_routes';
import { ApolloClient } from 'apollo-client';
import { NormalizedCacheObject } from 'apollo-cache-inmemory';
import { ApolloProvider } from '@apollo/react-components';

interface Props {
  history: History;
  apolloClient: ApolloClient<NormalizedCacheObject>;
}

class App extends Component<Props> {
  render() {
    const { history, apolloClient } = this.props;
    return (
      <Container>
        <ApolloProvider client={apolloClient}>
          <Router history={history}>
            <Menu />
            <AppRoute />
          </Router>
        </ApolloProvider>
      </Container>
    );
  }
}

export default App;
