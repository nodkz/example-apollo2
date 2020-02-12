import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import qs from 'qs';
import { useOrderListQuery } from './__generated__/OrderQuery';
import { OrderList } from './OrderList';

interface Props extends RouteComponentProps {}

export function OrderQuery(props: Props) {
  const setPage = (page: number) => {
    const { search } = props.location;
    const query = qs.parse(search, { ignoreQueryPrefix: true }) || {};

    props.history.push({
      search: qs.stringify({ ...query, page }),
    });
  };

  const { search } = props.location;
  const query = qs.parse(search, { ignoreQueryPrefix: true }) || {};
  const page = parseInt(query.page, 10) || 1;
  const perPage = parseInt(query.perPage, 10) || 10;

  const { error, loading, data } = useOrderListQuery({
    variables: {
      page,
      perPage,
    },
  });

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (data && data.viewer && data.viewer.orderPagination) {
    return <OrderList pagination={data.viewer.orderPagination} onSetPage={setPage} />;
  }

  return null;
}
