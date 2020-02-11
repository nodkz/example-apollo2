import * as Types from '../../../__generated__/types';

import { Customer_dataFragmentDoc, Customer_dataFragment } from '../../customers/__generated__/Customer_data';
import gql from 'graphql-tag';


export type OrderRow_orderFragment = (
  { __typename: 'Order' }
  & Pick<Types.Order, 'orderID' | 'orderDate' | 'customerID' | 'employeeID' | 'freight'>
  & { employee: Types.Maybe<(
    { __typename: 'Employee' }
    & Pick<Types.Employee, 'firstName' | 'lastName' | 'birthDate'>
  )>, customer: Types.Maybe<(
    { __typename: 'Customer' }
    & Customer_dataFragment
  )> }
);

export const OrderRow_orderFragmentDoc = gql`
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
    ...Customer_data
  }
  freight
}
    ${Customer_dataFragmentDoc}`;