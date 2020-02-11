import React from 'react';
import { Customer_DataFragment } from '../../__generated__/types';

interface Props {
  data: Customer_DataFragment;
}

class Customer extends React.Component<Props> {
  render() {
    const { data } = this.props;

    return (
      <div>
        <div>{data.companyName}</div>
        {data.orderList && (
          <div>
            {data.orderList.map((order) => (
              <span>{!!order && order.orderID}</span>
            ))}
          </div>
        )}
      </div>
    );
  }
}
