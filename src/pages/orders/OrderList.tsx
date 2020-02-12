import React from 'react';
import { Pagination } from 'react-bootstrap';
import { OrderRow } from './OrderRow';
import { OrderList_paginationFragment } from './__generated__/OrderList_pagination';

interface Props {
  pagination: OrderList_paginationFragment;
  onSetPage: (page: number) => any;
}

export function OrderList(props: Props) {
  const setPage = (page: number) => {
    const { onSetPage } = props;
    if (onSetPage) onSetPage(page);
  };

  const { pagination } = props;
  const { count } = pagination;
  const { pageCount, currentPage } = pagination.pageInfo;

  if (!pagination || !pagination.items) {
    return <div>No data</div>;
  }

  return (
    <div>
      <h1>Orders: {count}</h1>
      {pagination.items.map((order, i) => {
        if (!order) return <div>Empty element</div>;
        return <OrderRow key={i} order={order} />;
      })}

      <Pagination>
        {[...Array(pageCount)].map((_, i) => {
          return (
            <Pagination.Item
              key={i}
              active={i + 1 === currentPage}
              onClick={() => {
                setPage(i + 1);
              }}
            >
              {i + 1}
            </Pagination.Item>
          );
        })}
      </Pagination>
    </div>
  );
}
