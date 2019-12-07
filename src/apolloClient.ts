import ApolloClient from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloLink } from 'apollo-link';
import { HttpLink } from 'apollo-link-http';

const cache = new InMemoryCache();

const httpLink = new HttpLink({
  uri: 'https://graphql-compose.herokuapp.com/northwind/',
  // uri: 'http://localhost:4444/northwind/',
  fetch,
  credentials: 'same-origin',
  headers: {},
});

const link = ApolloLink.from([httpLink]);

export const apolloClient = new ApolloClient({
  cache,
  link,
});
