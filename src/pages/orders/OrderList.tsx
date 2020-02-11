import React from 'react';
import { Pagination } from 'react-bootstrap';
import OrderRow from './OrderRow';
import { OrderList_OrderPaginationFragment } from '../../__generated__/types';

interface Props {
  orderPagination: OrderList_OrderPaginationFragment;
  onSetPage: (page: number) => any;
}

class OrderList extends React.Component<Props> {
  setPage = (page: number) => {
    const { onSetPage } = this.props;
    if (onSetPage) onSetPage(page);
  };

  render() {
    const { orderPagination } = this.props;
    const { count } = orderPagination;
    const { pageCount, currentPage } = orderPagination.pageInfo;

    if (!orderPagination || !orderPagination.items) {
      return <div>No data</div>;
    }

    return (
      <div>
        <h1>Orders: {count}</h1>
        {orderPagination.items.map((order, i) => {
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
                  this.setPage(i + 1);
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
}

export default OrderList;
