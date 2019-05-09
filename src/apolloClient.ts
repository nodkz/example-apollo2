import ApolloClient from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloLink } from 'apollo-link';
import { HttpLink } from 'apollo-link-http';
import gql from 'graphql-tag';

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

const query = gql`
  query OrderListQuery($page: Int!, $perPage: Int!) {
    viewer {
      orderPagination(page: $page, perPage: $perPage) {
        ...OrderList_orderPagination
      }
    }
  }

  fragment OrderList_orderPagination on OrderPagination {
    count
    items {
      ...OrderRow_order
    }
    pageInfo {
      pageCount
      currentPage
    }
  }

  fragment OrderRow_order on Order {
    orderID
    orderDate
    customerID
    employeeID
    employee {
      firstName
      lastName
      birthDate
    }
    customer {
      companyName
      orderList(limit: $perPage) {
        orderID
      }
    }
    freight
  }
`;
console.log('DocumentNode:', query);
const variables = { page: 1, perPage: 5 };
apolloClient.query({ query, variables }).then((res: any) => console.log(`Result:`, res));
