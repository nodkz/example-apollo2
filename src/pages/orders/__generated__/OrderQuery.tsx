import * as Types from '../../../__generated__/types';

import { OrderList_paginationFragmentDoc, OrderList_paginationFragment } from './OrderList_pagination';
import gql from 'graphql-tag';
import * as React from 'react';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactComponents from '@apollo/react-components';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;


export type OrderListQueryVariables = {
  page: Types.Scalars['Int'],
  perPage: Types.Scalars['Int']
};


export type OrderListQuery = (
  { __typename: 'Query' }
  & { viewer: Types.Maybe<(
    { __typename: 'Viewer' }
    & { orderPagination: Types.Maybe<(
      { __typename: 'OrderPagination' }
      & OrderList_paginationFragment
    )> }
  )> }
);


export const OrderListQueryDocument = gql`
    query OrderListQuery($page: Int!, $perPage: Int!) {
  viewer {
    orderPagination(page: $page, perPage: $perPage) {
      ...OrderList_pagination
    }
  }
}
    ${OrderList_paginationFragmentDoc}`;
export type OrderListQueryComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<OrderListQuery, OrderListQueryVariables>, 'query'> & ({ variables: OrderListQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const OrderListQueryComponent = (props: OrderListQueryComponentProps) => (
      <ApolloReactComponents.Query<OrderListQuery, OrderListQueryVariables> query={OrderListQueryDocument} {...props} />
    );
    

/**
 * __useOrderListQuery__
 *
 * To run a query within a React component, call `useOrderListQuery` and pass it any options that fit your needs.
 * When your component renders, `useOrderListQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOrderListQuery({
 *   variables: {
 *      page: // value for 'page'
 *      perPage: // value for 'perPage'
 *   },
 * });
 */
export function useOrderListQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<OrderListQuery, OrderListQueryVariables>) {
        return ApolloReactHooks.useQuery<OrderListQuery, OrderListQueryVariables>(OrderListQueryDocument, baseOptions);
      }
export function useOrderListQueryLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<OrderListQuery, OrderListQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<OrderListQuery, OrderListQueryVariables>(OrderListQueryDocument, baseOptions);
        }
export type OrderListQueryHookResult = ReturnType<typeof useOrderListQuery>;
export type OrderListQueryLazyQueryHookResult = ReturnType<typeof useOrderListQueryLazyQuery>;
export type OrderListQueryQueryResult = ApolloReactCommon.QueryResult<OrderListQuery, OrderListQueryVariables>;