import React from 'react';
import { Query } from 'react-apollo';
import OrderList from './OrderList';
import gql from 'graphql-tag';
import { OrderListQuery as Q, OrderListQueryVariables as V } from './__generated__/OrderListQuery';

class QueryTyped extends Query<Q, V> {}

interface Props extends V {
  onSetPage: (page: number) => any;
}

export default class OrderListQuery extends React.Component<Props> {
  render() {
    return (
      <QueryTyped
        fetchPolicy="cache-first"
        variables={{
          page: this.props.page || 1,
          perPage: this.props.perPage || 20,
        }}
        query={gql`
          query OrderListQuery($page: Int!, $perPage: Int!) {
            viewer {
              orderPagination(page: $page, perPage: $perPage) {
                ...OrderList_orderPagination
              }
            }
          }
          ${OrderList.fragment}
        `}
      >
        {({ error, loading, data }) => {
          if (loading) return <div>Loading...</div>;
          if (data && data.viewer && data.viewer.orderPagination) {
            return (
              <OrderList
                orderPagination={data.viewer.orderPagination}
                onSetPage={this.props.onSetPage}
              />
            );
          }
        }}
      </QueryTyped>
    );
  }
}
