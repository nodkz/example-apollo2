import ApolloClient from 'apollo-client';
import { InMemoryCache, defaultDataIdFromObject } from 'apollo-cache-inmemory';
import { ApolloLink } from 'apollo-link';
import { HttpLink } from 'apollo-link-http';

const cache = new InMemoryCache({
  dataIdFromObject: (o: any) => {
    switch (o.__typename) {
      // case 'Order':
      //   return `Order:${o.orderID}`;
      // case 'Customer':
      //   return `Customer:${o.customerID}`;
      // case 'CustomerAddress': {
      //   return `CustomerAddress:${o.city}`;
      // }
      // case 'Employee':
      //   return `Employee:${o.lastName}`;
      default:
        return defaultDataIdFromObject(o);
    }
  },
});

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

if (typeof window !== 'undefined') {
  (window as any).ac = apolloClient;
}
