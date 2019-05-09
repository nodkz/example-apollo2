import React from 'react';
import gql from 'graphql-tag';
import { Customer_data } from './__generated__/Customer_data';

interface Props {
  data: Customer_data;
}

class Customer extends React.Component<Props> {
  static fragments = {
    data: gql`
      fragment Customer_data on Customer {
        companyName
        orderList {
          orderID
        }
      }
    `,
  };

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
