import * as Types from '../../../__generated__/types';

import { OrderRow_orderFragmentDoc, OrderRow_orderFragment } from './OrderRow_order';
import gql from 'graphql-tag';


export type OrderList_paginationFragment = (
  { __typename: 'OrderPagination' }
  & Pick<Types.OrderPagination, 'count'>
  & { items: Types.Maybe<Array<Types.Maybe<(
    { __typename: 'Order' }
    & OrderRow_orderFragment
  )>>>, pageInfo: (
    { __typename: 'PaginationInfo' }
    & Pick<Types.PaginationInfo, 'pageCount' | 'currentPage'>
  ) }
);

export const OrderList_paginationFragmentDoc = gql`
    fragment OrderList_pagination on OrderPagination {
  count
  items {
    ...OrderRow_order
  }
  pageInfo {
    pageCount
    currentPage
  }
}
    ${OrderRow_orderFragmentDoc}`;