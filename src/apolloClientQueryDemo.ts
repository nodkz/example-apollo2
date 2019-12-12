import { apolloClient } from './apolloClient';
import gql from 'graphql-tag';

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
