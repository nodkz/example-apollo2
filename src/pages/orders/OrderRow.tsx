import React from 'react';
import { OrderRow_orderFragment } from './__generated__/OrderRow_order';
import { Customer } from '../customers/Customer';

interface Props {
  order: OrderRow_orderFragment;
}

export function OrderRow(props: Props) {
  const { order } = props;
  const { employee } = order;

  return (
    <div>
      <div className="row">
        <div className="col-sm-1">{order.orderID}</div>
        <div className="col-sm-2">{order.customer && <Customer data={order.customer} />}</div>
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
