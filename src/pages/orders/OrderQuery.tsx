import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import qs from 'qs';
import { OrderListQueryComponent } from './__generated__/OrderQuery';
import OrderList from './OrderList';

interface Props extends RouteComponentProps {}

export default class OrderQuery extends React.Component<Props> {
  setPage = (page: number) => {
    const { search } = this.props.location;
    const query = qs.parse(search, { ignoreQueryPrefix: true }) || {};

    this.props.history.push({
      search: qs.stringify({ ...query, page }),
    });
  };

  render() {
    const { search } = this.props.location;
    const query = qs.parse(search, { ignoreQueryPrefix: true }) || {};
    const page = parseInt(query.page, 10) || 1;
    const perPage = parseInt(query.perPage, 10) || 10;

    return (
      <div>
        <OrderListQueryComponent
          variables={{
            page,
            perPage,
          }}
        >
          {({ error, loading, data }) => {
            if (loading) return <div>Loading...</div>;
            if (error) return <div>Error: {error.message}</div>;
            if (data && data.viewer && data.viewer.orderPagination) {
              return (
                <OrderList pagination={data.viewer.orderPagination} onSetPage={this.setPage} />
              );
            }

            return null;
          }}
        </OrderListQueryComponent>
      </div>
    );
  }
}
