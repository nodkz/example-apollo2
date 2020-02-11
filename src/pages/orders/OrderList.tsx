import React from 'react';
import { Pagination } from 'react-bootstrap';
import OrderRow from './OrderRow';
import { OrderList_paginationFragment } from './__generated__/OrderList_pagination';

interface Props {
  pagination: OrderList_paginationFragment;
  onSetPage: (page: number) => any;
}

class OrderList extends React.Component<Props> {
  setPage = (page: number) => {
    const { onSetPage } = this.props;
    if (onSetPage) onSetPage(page);
  };

  render() {
    const { pagination } = this.props;
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
