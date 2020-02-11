import React from 'react';
import { OrderRow_OrderFragment } from '../../__generated__/types';

interface Props {
  order: OrderRow_OrderFragment;
}

class OrderRow extends React.Component<Props> {
  render() {
    const { order } = this.props;
    const { employee } = order;

    return (
      <div>
        <div className="row">
          <div className="col-sm-1">{order.orderID}</div>
          <div className="col-sm-2">{order.customer && order.customer.companyName}</div>
          {employee && (
            <div className="col-sm-2">
              {employee.firstName} {employee.lastName} (id:{order.employeeID})
            </div>
          )}
          <div className="col-sm-2">{`${order.orderDate || ''}`.substr(0, 10)}</div>
          <div className="col-sm-2">{order.freight}</div>
        </div>
      </div>
    );
  }
}

export default OrderRow;
