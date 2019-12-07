import ApolloClient from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloLink } from 'apollo-link';
import { HttpLink } from 'apollo-link-http';

const cache = new InMemoryCache();

const httpLink = new HttpLink({
  uri: process.env.REACT_APP_API_URL,
  fetch,
  credentials: 'same-origin',
  headers: {},
});

const link = ApolloLink.from([httpLink]);

export const apolloClient = new ApolloClient({
  cache,
  link,
});
